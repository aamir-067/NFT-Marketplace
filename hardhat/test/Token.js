const { expect } = require('chai');

describe("Token", function () {
  let owner, adr1, adr2, token, marketplace, fee = 3;
  beforeEach(async () => {
    const temp = await ethers.getContractFactory("MyToken");
    const temp2 = await ethers.getContractFactory("Marketplace");
    token = await temp.deploy();
    marketplace = await temp2.deploy(fee);

    [owner, adr1, adr2] = await ethers.getSigners();
  });
  describe("Deployment", function () {

    it("Should set the right TokenName and Token Sign", async function () {
      const name = await token.name();
      const tokenName = await token.symbol();
      expect(name).to.equal("MyToken");
      expect(tokenName).to.equal("MTK");
    });
  });

  it("Should set the right owner", async function () {
    const res = await token.owner();
    expect(res).to.equal(owner.address);
  })

  describe("Minting", function () {
    it("Should be able to mint tokens and set right balance", async function () {
      const bal = await token.balanceOf(owner.address);
      await token.mint("bla bla bla");
      const newBal = await token.balanceOf(owner.address);
      expect(bal).to.equal(0);
      expect(newBal).to.equal(1n);


      // from another address.
      await token.connect(adr1).mint("bla bla bla");
      const newBal2 = await token.balanceOf(adr1.address);
      expect(newBal2).to.equal(1n);
    });


    it("should increment the token Id after minting", async function () {
      const tokenId = await token._nextTokenId();
      await token.mint("bla bla bla");
      await token.mint("bla bla bla");

      const newTokenId = await token._nextTokenId();
      expect(tokenId).to.equal(0n);
      expect(newTokenId).to.equal(2n);

    })

    it("should set right token URI", async function () {
      const uri = "http://example.com"
      await token.mint(uri);
      expect(await token.tokenURI(0)).to.equal(uri);
    })
  });

  describe("Transferring", function () {
    it("Should be able to transfer tokens", async function () {
      await token.mint("bla bla bla");
      const initBal = await token.balanceOf(owner.address);
      await token.safeTransferFrom(owner.address, adr1.address, 0);
      const finalBal = await token.balanceOf(owner.address);

      expect(initBal).to.equal(1n);
      expect(finalBal).to.equal(0n);
    });

    it("should set the right balance after transferring", async function () {
      await token.mint("bla bla bla");
      const initBal = await token.balanceOf(adr1.address);
      await token.safeTransferFrom(owner.address, adr1.address, 0);
      const finalBal = await token.balanceOf(adr1.address);

      expect(initBal).to.equal(0n);
      expect(finalBal).to.equal(1n);
    });
  })

});

describe("Marketplace", function () {
  let owner, adr1, adr2, token, marketplace, fee = 3;
  beforeEach(async () => {
    const temp = await ethers.getContractFactory("MyToken");
    const temp2 = await ethers.getContractFactory("Marketplace");
    token = await temp.deploy();
    marketplace = await temp2.deploy(fee);

    [owner, adr1, adr2] = await ethers.getSigners();
  });

  describe("Deployment", function () {

    it("Should set right fee reciver and the correct fee value", async () => {
      const res = await marketplace.fee();
      const own = await marketplace.owner();
      expect(res).to.equal(fee);
      expect(own).to.equal(owner.address);
    })

  });

  describe("Listing", function () {

    it("should able to list item and increment the count", async () => {
      await token.mint("bla bla bla");
      const isReceived = await token.balanceOf(marketplace.target);
      const initCount = await marketplace.listItemsCount();
      await token.setApprovalForAll(marketplace.target, true);
      await marketplace.listItem(token, 10000000, 0);
      const newCount = await marketplace.listItemsCount();
      const isReceived2 = await token.balanceOf(marketplace.target);
      expect(initCount).to.equal(0n);
      expect(newCount).to.equal(1n);
      expect(isReceived2).to.equal(1n);
      expect(isReceived).to.equal(0n);
    });

    it("should set the right data after the listing on the marketplace", async () => {
      await token.mint("bla bla bla");
      await token.setApprovalForAll(marketplace.target, true);
      await marketplace.listItem(token, 10000, 0);

      const listedItem = await marketplace.listitems(1);

      expect(listedItem[0]).to.equal(1n);
      expect(listedItem[1]).to.equal(0n);
      expect(listedItem[2]).to.equal(token.target);
      expect(listedItem[3]).to.equal(owner.address);
      expect(listedItem[4]).to.equal(10000n);
      expect(listedItem[5]).to.equal(false);
    })

    it("should emit event after listig an item.", async () => {
      await token.mint("bla bla bla");
      await token.setApprovalForAll(marketplace.target, true);
      expect(await marketplace.listItem(token, 30000, 0)).to.emit(marketplace, "ItemListed").withArgs(
        1,
        token.target,
        0,
        owner.address,
        30000
      )
    })


  });
  describe("purchasing", () => {
    it("should purchase a product and inc the purchaseCount.", async () => {
      await token.mint("bla bla bla");
      await token.setApprovalForAll(marketplace.target, true);
      await marketplace.listItem(token, 30000, 0);

      await marketplace.connect(adr1).purchase(1, { value: 30000 });

      const isRecieved = await token.balanceOf(adr1.address);

      console.log(owner)

      const marketBalance = await token.balanceOf(marketplace.target);
      const purchaseCount = await marketplace.soldItemsCount();

      const idSold = await marketplace.listitems(1);

      expect(idSold[5]).to.equal(true);

      expect(purchaseCount).to.equal(1n);
      expect(isRecieved).to.equal(1n);
      expect(marketBalance).to.equal(0n);
    });

    // it("sholud transfer the fee to the owner after purchasing", async () => {
    //   await token.mint("bla bla bla");
    //   await token.setApprovalForAll(marketplace.target, true);
    //   await marketplace.listItem(token, 30000, 0);

    //   await marketplace.connect(adr1).purchase(1, { value: 30000 });

    //   const isRecieved = await token.balanceOf(adr1.address);


    //   const marketBalance = await token.balanceOf(marketplace.target);
    //   const purchaseCount = await marketplace.soldItemsCount();

    //   const idSold = await marketplace.listitems(1);

    //   expect(idSold[5]).to.equal(true);




    // })


  })
});
