import React from "react";
import image from "../images/imagePlaceholder.jpg";
import { useParams } from "react-router-dom";
const ShowNFT = () => {

	const { name, id, isOwned, isAvail } = useParams();
	console.log(name, id, typeof isOwned, isAvail);

	return (
		<div className="w-full flex justify-center items-center" >
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
								Price : 0.3 eth
							</h2>
						</div>
						<h2 className="text-gray-800 hidden md:block">#{id}</h2>
						<h2 className="font-bold text-md lg:text-lg mt-2 md:mt-5">
							seller : <span>0x0000000000000000000000000000</span>
						</h2>
						<h2 className="font-bold text-md lg:text-lg mt-2 md:mt-5">
							owner : <span>0x0000000000000000000000000000</span>
						</h2>


						{isOwned && <button
							className="md:w-full w-11/12 mx-auto mt-10 py-5 text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-center dark:bg-blue-600"
							onClick={() => { }}
						>
							Sell NFT
						</button>}

						{
							(isAvail && !isOwned) && <button
								className="md:w-full w-11/12 mx-auto mt-10 py-5 text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-center dark:bg-blue-600"
								onClick={() => { }}
							>
								Purchase
							</button>
						}
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
		</div >
	);

}

export default ShowNFT;
