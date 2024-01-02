import React from "react";
import { Item } from "./index";
const Landing = () => {
	const featuredNfts = [
		{
			name: "NFT 1",
			image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
			owner: "0x0000000000000000000000000000000000000000",
		},
		{
			name: "NFT 1",
			image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
			owner: "0x0000000000000000000000000000000000000000",
		},
		{
			name: "NFT 1",
			image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
			owner: "0x0000000000000000000000000000000000000000",
		},
		{
			name: "NFT 1",
			image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
			owner: "0x0000000000000000000000000000000000000000",
		},
		{
			name: "NFT 1",
			image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
			owner: "0x0000000000000000000000000000000000000000",
		},
		{
			name: "NFT 1",
			image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
			owner: "0x0000000000000000000000000000000000000000",
		},
		{
			name: "NFT 1",
			image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
			owner: "0x0000000000000000000000000000000000000000",
		},
		{
			name: "NFT 1",
			image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
			owner: "0x0000000000000000000000000000000000000000",
		},
		{
			name: "NFT 1",
			image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
			owner: "0x0000000000000000000000000000000000000000",
		},
		{
			name: "NFT 1",
			image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
			owner: "0x0000000000000000000000000000000000000000",
		},
	];

	return (
		<div>
			<div className="md:flex block justify-evenly items-center">
				<h2 className="lg:text-3xl w-full md:w-8/12 lg:w-9/12  text-center text-2xl font-bold my-10 whitespace-nowrap uppercase tracking">
					Our featured collection
				</h2>

				<form
					className="mx-auto w-8/12 md:w-96 px-10"
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					<div className="border-2 w-full flex py-2 border-gray-400 rounded-full px-4">
						<input
							type="text"
							className=" text-slate-700 outline-none  w-full "
							placeholder="Search"
						/>
						<button className="pl-2">@</button>
					</div>
				</form>
			</div>
			<div className="w-full flex justify-center items-center">
				<div className="w-full flex gap-10 p-5 justify-center md:justify-start items-center flex-wrap">
					{featuredNfts.map((nft, index) => {
						return (
							<Item
								key={index}
								image={nft.image}
								isAvail={index % 2 ? true : false}
								name={nft.name}
								owner={nft.owner}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Landing;
