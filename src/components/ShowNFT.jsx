import React from "react";
import image from "../images/imagePlaceholder.jpg";
const ShowNFT = () => (
	<div className="w-full flex justify-center items-center">
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
							Bored Ape classic
						</h2>
						<h2 className="text-xl lg:text-2xl font-bold">
							Price : 0.3 eth
						</h2>
					</div>
					<h2 className="text-gray-800 hidden md:block">#013</h2>
					<h2 className="font-bold text-md lg:text-lg mt-2 md:mt-5">
						seller : <span>0x0000000000000000000000000000</span>
					</h2>

					<button
						className="md:w-full w-11/12 mx-auto mt-10 py-5 text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-center dark:bg-blue-600"
						onClick={() => {}}
					>
						Purchase
					</button>
				</div>
			</div>

			{/* NFT collection details */}
			<div className="my-10 md:mx-10 lg:mx-20">
				<h2 className="font-bold md:text-lg">
					Token Address : <spam>0x0000000000000000000000</spam>
				</h2>

				<h2 className="font-bold mt-4 text-2xl">Description :</h2>
				<p className="md:ml-5">
					Lorem ipsum dolor sit abet consectetur edit. Aspirator,
					enid, aerial tempera perspiciatis site gusto quia optic
					ornis rescinds nunquam fpga labrum inure consequent quo sed
					legend tempore. Repudiate, voluptuous.
				</p>
			</div>
		</div>
	</div>
);

export default ShowNFT;
