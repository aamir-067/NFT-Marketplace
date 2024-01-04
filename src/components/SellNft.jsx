import React, { useRef } from "react";

// this will be popup to sell your own nft.
const SellNft = ({ handleOpen }) => {
	const priceRef = useRef(null);

	const handleSell = () => {
		const price = priceRef.current.value;
		handleOpen(false);
		if (price) {
			console.log(`NFT sold for ${price}`);
		} else {
			console.log("Enter at least 0.00000001 ether");
		}
	};
	return (
		<div className="w-40 h-40 absolute top-50 left-50 -translate-x-1/2 -translate-y-1/2 bg-red-400/30 flex justify-center items-center">
			<div className="w-full h-full px-8">
				<input
					ref={priceRef}
					type="number"
					placeholder="price"
				/>
				<button onClick={handleSell}>Sell NFT</button>
			</div>
		</div>
	);
};

export default SellNft;
