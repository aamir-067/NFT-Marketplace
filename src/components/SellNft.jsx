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
		<div>
			<div className={'fixed top-0 left-0 w-full h-full z-50'}></div>
			<div className={'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md shadow-md z-50'}>
				<h2 className="text-2xl mb-4">Popup Title</h2>
				<input
					type="text"
					placeholder="Enter something..."
					className="block w-full border border-gray-300 p-2 rounded-md mb-4"
				/>
				<div className="flex justify-between">
					<button
						className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
					>
						Close
					</button>
					<button
						className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
						onClick={() => console.log('Button clicked')}
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default SellNft;
