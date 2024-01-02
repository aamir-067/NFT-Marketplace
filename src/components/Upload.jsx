import React from "react";
import placeHolderImage from "../images/imagePlaceholder.jpg";
const Upload = () => {
	const [name, setName] = React.useState("");
	const [description, serDescription] = React.useState("");
	const [item, setItem] = React.useState(null);

	const handelItem = () => {
		const nftImage = document.querySelector("#nftImage");
		console.log(nftImage.files[0]);
		if (
			["image/jpeg", "image/jpg", "image/png"].some(
				(t) => t === nftImage.files[0].type
			)
		) {
			setItem(nftImage.files[0]);
		}
	};

	return (
		<section className="overflow-hidden">
			<div className="mx-auto max-w-5xl px-5 py-24">
				<form className="mx-auto flex flex-wrap items-center lg:w-4/5">
					<img
						alt="placeholder for image of the nft."
						className="w-full md:w-8/12 mx-auto aspect-square rounded lg:h-96 lg:w-96"
						// src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
						src={
							item ? URL.createObjectURL(item) : placeHolderImage
						}
					/>
					<div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
						<div className="">
							<input
								onChange={(e) => setName(e.target.value)}
								required
								className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
								type="text"
								placeholder="Name"
							/>
							<p className="mt-1 text-xs text-red-500">
								*This field is required
							</p>
						</div>

						<input
							onChange={(e) => {}}
							required
							className="flex h-10 my-4 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
							type="text"
							placeholder="Symbol"
						/>

						<textarea
							className=" outline-none border border-black/30 p-1 w-full"
							rows="5"
							placeholder="Description"
							onChange={(e) => serDescription(e.target.value)}
						/>
						<div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100">
							<input
								id="nftImage"
								className="block w-full text-gray-900 border border-gray-300 rounded-sm cursor-pointer bg-gray-50  focus:outline-none p-0.5"
								type="file"
								onChange={() => handelItem()}
							/>
						</div>
						<div className="flex items-center justify-between">
							<button
								type="button"
								onClick={() => {
									console.log(name);
									console.log(description);
									console.log(item);
								}}
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
