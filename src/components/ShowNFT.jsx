import React, { useEffect, useState } from "react";
import image from "../images/imagePlaceholder.jpg";
import { useNavigate, useParams } from "react-router-dom";
import SellNft from "./SellNft";
import { simplePrompt } from "react-simple-dialogs";
import MyToken from "../artifacts/MyToken.json";
import { ethers } from "ethers";
import { store } from "../app/store";
const ShowNFT = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { itemId } = useParams();
	const [name, setName] = useState("");
	const navigate = useNavigate(false);


	var thatNFT = store.getState().general.allNFTs[+itemId];

	useEffect(() => {
		(async () => {
			const provider = store.getState().web3Api.provider;
			const contract = new ethers.Contract(thatNFT[3], MyToken.abi, provider);

			const tokenName = await contract.name();
			setName(tokenName);
		})();

		if (typeof +itemId !== "number") {
			navigate("/error");
			return;
		}
	}, []);

	const showPrompt = async () => {
		const name = await simplePrompt('Please inform your name')

		console.log(`User name is ${name || 'a mistery'}`)
	}


	return (
		<div className={`w-full flex justify-center relative items-center ${isOpen ? "opacity-75 bg-gray-500" : ""}`} >
			<div className="w-11/12 lg:w-10/12">
				<div className="block md:flex md:justify-evenly w-full md:mx-10 lg:mx-20 mt-20">
					<img
						className="w-8/12 mx-auto md:mx-0 md:w-4/12"
						src={image}
						alt="a placeholder picture i will remove it later"
					/>
					<div className="md:mx-10">
						<div className=" block md:flex justify-between mt-5">
							<h2 className="text-2xl font-bold">
								{name}
							</h2>
							<h2 className="text-xl lg:text-2xl font-bold">
								{ethers.formatEther(thatNFT[4])}
							</h2>
						</div>
						<h2 className="text-gray-800 hidden md:block">#{ethers.toNumber(thatNFT[0])}</h2>
						<h2 className="font-bold text-md lg:text-lg mt-2 md:mt-5">
							owner : <span>{thatNFT[2]}</span>
						</h2>


						{/* {isOwned === "true" && <button
							className="md:w-full w-11/12 mx-auto mt-10 py-5 text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-center dark:bg-blue-600"
							// onClick={() => { setIsOpen(true) }}
							onClick={() => { showPrompt() }}
						>
							Sell NFT
						</button>}

						{
							(isAvail === "true" && isOwned === "false") && <button
								className="md:w-full w-11/12 mx-auto mt-10 py-5 text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-center dark:bg-blue-600"
								onClick={() => { }}
							>
								Purchase
							</button>
						} */}

						{/* {
							isAvail === "false" && <button disabled
								className="md:w-full w-11/12 mx-auto mt-10 py-5 text-white bg-blue-800 rounded-lg text-center"
								onClick={() => { }}
							>
								Already sold
							</button>
						} */}
					</div>
				</div>

				{/* NFT collection details */}
				<div className="my-10 md:mx-10 lg:mx-20">
					<h2 className="font-bold md:text-lg">
						Token Address : <span>0x0000000000000000000000</span>
					</h2>

					<h2 className="font-bold mt-4 text-2xl">Description :</h2>
					<p className="md:ml-5">
						Lorem ipsum dolor sit abet consectetur edit. Aspirator,
						enid, aerial tempera participate site gusto quia optic
						ornis rescinds nunquam fpga labrum inure consequent quo sed
						legend tempore. Repudiate, voluptuous.
					</p>
				</div>
			</div>



			{/* for the popUp
			{
				isOpen &&
				<SellNft handleOpen={setIsOpen} />
			} */}
		</div >
	);

}

export default ShowNFT;
