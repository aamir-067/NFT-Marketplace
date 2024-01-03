import React from "react";
import { Item } from "./index";
import { NavLink, useNavigate } from "react-router-dom";
const Landing = () => {
	const featuredNfts = [
		{
			name: "Bored Ape",
			sold: false,
			isOwned: false,
			image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
			owner: "0xamplo67asda58dsgf0dgskj8dpdsgoy",
		},
		{
			name: "Doddle",
			sold: false,
			isOwned: false,
			image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
			owner: "0xae09x80kll32vu42bl5lk2343mnj",
		},
		{
			name: "ZKY AI Portrait",
			sold: false,
			isOwned: false,
			image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
			owner: "0xamplo67asda58dsgf0dgskj8dpdsgoy",
		},
		{
			name: "pixels",
			sold: false,
			isOwned: false,
			image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
			owner: "0x80707657hsfljkbdkllkbldfnsdlpo",
		},
		{
			name: "Wall Champs",
			sold: false,
			isOwned: false,
			image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
			owner: "0xae09x80kll32vu42bl5lk2343mnj",
		},
		{
			name: "John Ai",
			sold: false,
			isOwned: false,
			image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
			owner: "0xa90fxsfj3b25jb25kpb54234jl",
		},
	];
	const navigate = useNavigate();

	const handleFilter = (e) => {
		console.log(e);
	};
	return (
		<div>
			<div className="md:flex block justify-evenly items-center">
				<h2 className="lg:text-3xl w-full md:w-8/12 lg:w-9/12  text-center text-2xl font-bold my-10 whitespace-nowrap uppercase tracking">
					Our featured collection
				</h2>

				<form
					className="mx-auto w-8/12 md:w-96 px-10 flex justify-between"
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					<div className="border-2 w-full flex py-2 border-gray-400 rounded-sm px-4">
						<input
							type="text"
							className=" text-slate-700 outline-none  w-full "
							placeholder="Search"
						/>
						<button className="pl-2 text-lg">
							<svg
								className="text-gray-700"
								viewBox="0 0 512 512"
								fill="currentColor"
								height="1em"
								width="1em"
							>
								<path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z" />
							</svg>
						</button>
					</div>

					<select
						name="filter"
						on
						placeholder="search filter"
						className="py-1 mx-4 w-20 md:w-28 cursor-pointer border-2 rounded-sm border-gray-400 text-slate-700 outline-none"
					>
						<option value="Search filter">Search filter</option>
						<option value="sold">Sold</option>
						<option value="available">Available</option>
						<option value="Sort Ascending A-Z">Sort A-Z</option>
					</select>
				</form>
			</div>
			<div className="w-full flex justify-center items-center">
				<div className="w-full flex gap-10 p-5 justify-center md:justify-start items-center flex-wrap">
					{featuredNfts.map((nft, index) => {
						return (
							<div
								onClick={() => {
									navigate(
										`/details/${
											nft.name
										}/${index}/${false}/${
											index % 2 ? false : true
										}`
									);
								}}
								key={index}
							>
								<Item
									image={nft.image}
									isAvail={index % 2 ? true : false}
									name={nft.name}
									owner={nft.owner}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Landing;
