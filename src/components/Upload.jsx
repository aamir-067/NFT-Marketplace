import React, { useState } from "react";
import { useForm } from "react-hook-form";
import placeHolderImage from "../images/imagePlaceholder.jpg";
const Upload = () => {
	const { register, handleSubmit } = useForm();
	const [image, setImage] = useState(null);
	const mintHandler = (data) => {
		console.log(data);
		if (data?.image[0]) {
			setImage(data.image[0]);
		}
	};

	return (
		<section className="overflow-hidden">
			<div className="mx-auto max-w-5xl px-5 py-24">
				<form
					onSubmit={handleSubmit(mintHandler)}
					className="mx-auto flex flex-wrap items-center lg:w-4/5"
				>
					<img
						alt="placeholder for image of the nft."
						className="w-full md:w-8/12 mx-auto aspect-square rounded lg:h-96 lg:w-96"
						// src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
						src={
							image
								? URL.createObjectURL(image)
								: placeHolderImage
						}
					/>
					<div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
						<div className="">
							<input
								required
								{...register("name")}
								className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
								type="text"
								placeholder="Name"
							/>
							<p className="mt-1 text-xs text-red-500">
								*This field is required
							</p>
						</div>

						<input
							required
							{...register("symbol")}
							className="flex h-10 my-4 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
							type="text"
							placeholder="Symbol"
						/>

						<input
							required
							{...register("price")}
							className="flex h-10 my-4 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
							type="number"
							placeholder="Price in eth"
						/>

						<textarea
							className=" outline-none border border-black/30 p-1 w-full"
							rows="5"
							{...register("description")}
							placeholder="Description"
						/>
						<div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100">
							<input
								id="nftImage"
								{...register("image")}
								className="block w-full text-gray-900 border border-gray-300 rounded-sm cursor-pointer bg-gray-50  focus:outline-none p-0.5"
								type="file"
							/>
						</div>
						<div className="flex items-center justify-between">
							<button
								type="button"
								onClick={handleSubmit(mintHandler)}
								className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
							>
								List NFT
							</button>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
};
export default Upload;
