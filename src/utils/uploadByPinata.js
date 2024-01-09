const PinataSDK = require("@pinata/sdk");
const { pinataApi, pinataSecret } = require("../CONSTANTS");
const main = async () => {
    try {
        const pinata = new PinataSDK(pinataApi, pinataSecret);
        const res = await pinata.testAuthentication();
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};

main();