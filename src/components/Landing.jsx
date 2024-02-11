import React, { useEffect, useState } from "react";
import { Item } from "./index";
import { useNavigate } from "react-router-dom";
import { fetchAllNfts, purchaseNFT } from "../utils";
import { store } from "../app/store";
import { ethers } from "ethers";
import MyToken from "../artifacts/MyToken.json";
import { serverApi } from "../CONSTANTS";
import axios from "axios";
const Landing = () => {
	const [temp, setTemp] = useState([]);

	const navigate = useNavigate();

	// const handleFilter = (e) => {
	// 	// TODO: complete this to filter the results.
	// 	console.log(e);
	// };

	let NFTs = store.getState().general.allNFTs;

	const getDetails = async (nft, tokenId) => {
		const { chainId } = await store.getState().web3Api.provider.getNetwork();
		console.log(`${serverApi}/${chainId}/${nft}/${tokenId}`);
		try {
			const response = await axios({
				method: 'get',
				url: `${serverApi}/${chainId}/${nft}/${tokenId}`,
			});
			console.log("response =>", response.data.data.response);
			return response.data.data.response;
		} catch (error) {
			console.error(error);
		}
	}
	useEffect(() => {
		(async () => {
			const res = await fetchAllNfts();
			console.log("nft fetch result", res.length);
			let tamp = new Array(res.length);
			res.map((nft, index) => {
				getDetails(nft[3], ethers.toNumber(nft[1])).then(res => {
					tamp[index] = {
						name: res.name,
						tokenId: res.token_id,
						owner: res.owner_of,
						address: res.token_address,
						isAvail: true
					};
					setTemp(tamp);
				});
			})
		})();
	}, []);

	const getNFTUri = async (address = "0xF40a041f9808c1681d200c880a9601Ee2df90337", id = 0) => {
		const provider = store.getState().web3Api.provider;
		console.log(provider);
		const nftContract = new ethers.Contract(address, MyToken.abi, provider);
		const uri = await nftContract.tokenURI(id);
		console.log("NFT URI", uri);
		return uri ? uri : "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60";
	}

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

					{/*  real NFTs */}
					{/* {NFTs.map((NFT, index) => {
						const uri = getNFTUri(NFT[3], ethers.toNumber(NFT[1]));
						return (
							<div
								onClick={() => { // FIXME
									navigate(
										`/details/${NFT[2]}/${NFT[3]}/${ethers.toNumber(NFT[1])}/${NFT[5]}`
									);
								}}
								key={index}
							>
								<Item
									image={uri}
									isAvail={NFT[5]}
									name={"temp"}
									tokenId={ethers.toNumber(NFT[1])}
								/>
							</div>
						);
					})} */}

					{/* test real nfts */}
					{NFTs.map((nft, index) => {
						let NFT = temp[index];
						return (
							<div
								onClick={() => {
									navigate(
										`/details/${NFT.owner}/${NFT.address}/${ethers.toNumber(NFT.tokenId)}/${NFT.isAvail}`
									);
								}}
								key={index}
							>
								<Item
									image={"https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"}
									isAvail={NFT.isAvail}
									name={NFT.name}
									tokenId={NFT.tokenId}
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
