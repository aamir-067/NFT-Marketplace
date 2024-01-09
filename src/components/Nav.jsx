import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { initByProvider, initBySigner } from "../utils/index.js";
import { useSelector } from "react-redux";
import { resetWeb3 } from "../features/index.js";
import { store } from "../app/store.js";
import { Turn as MenuIcon } from "hamburger-react";
const Nav = () => {
	const [menuToggled, setMenuToggled] = useState(false);
	const { signer } = useSelector((state) => state.web3Api);
	useEffect(() => {
		(async () => {
			if (signer) {
				return;
			}
			await initByProvider();
		})();

	});

	const handleConnect = async () => {
		if (signer) {
			store.dispatch(resetWeb3());
		} else {
			await initBySigner();
		}
	};

	return (
		<div className="w-full">
			<nav className=" border-gray-200 dark:bg-gray-900">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					<NavLink
						to={""}
						className="flex items-center"
					>
						<img
							src="https://bafybeigj25ax2rek4dygzjd4aw6vvf4vaklfu2jtrf4hw7dmcpy5jeaeta.ipfs.dweb.link/"
							className="h-8 mr-3"
							alt="logo"
						/>
						<span className="self-center text-2xl hidden lg:inline font_secondary tracking-wider text-gray-900 dark:text-gray-100 font-semibold whitespace-nowrap">
							TokenPalace
						</span>
					</NavLink>

					<div className="flex items-center gap-x-4 md:order-2">
						<p className="font-bold hidden lg:block text-sm">
							{signer &&
								`${[...signer.address]
									.slice(0, 7)
									.join("")}....${[...signer.address]
										.slice(37, 42)
										.join("")}`}
						</p>
						<button
							type="button"
							onClick={handleConnect}
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:px-4 py-1 px-2 md:py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							{signer?.address ? "Log out" : "wallet connect"}
						</button>

						{/* onClick={() => { setMenuToggled(!menuToggled) }} */}
						<button
							// onClick={() => {
							// 	setMenuToggled(!menuToggled);
							// }}
							className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden dark:text-gray-400"
							aria-controls="navbar-cta"
							aria-expanded="false"
						>
							<MenuIcon toggled={menuToggled} toggle={setMenuToggled} />
							{/* <svg
								className="w-5 h-5"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 17 14"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M1 1h15M1 7h15M1 13h15"
								/>
							</svg> */}
						</button>
					</div>

					{/* toggled menu */}
					<div
						className={`bg-slate-400 md:bg-transparent z-10 dark:bg-slate-900 dark:text-slate-100 text-slate-900 items-center ${menuToggled ? "" : "hidden"
							} absolute md:relative top-16  md:top-0 left-0 justify-between w-full md:flex md:w-auto md:order-1`}
					>
						<ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
							<li>
								<NavLink
									onClick={() => {
										setMenuToggled(!menuToggled);
									}}
									to=""
									className={({ isActive }) =>
										`block py-2 pl-3 ${isActive ? "text-blue-700" : ""
										} pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`
									}
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									onClick={() => {
										setMenuToggled(!menuToggled);
									}}
									to="list"
									className={({ isActive }) =>
										`block py-2 pl-3 ${isActive ? "text-blue-700" : ""
										} pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`
									}
								>
									List NFT
								</NavLink>
							</li>
							{/* <li>
								<NavLink
									onClick={() => {
										setMenuToggled(!menuToggled);
									}}
									to="sold-nfts"
									className={({ isActive }) =>
										`block py-2 pl-3 ${isActive ? "text-blue-700" : ""
										} pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`
									}
								>
									Sold NFTs
								</NavLink>
							</li> */}
							<li>
								<NavLink
									onClick={() => {
										setMenuToggled(!menuToggled);
									}}
									to="my-nfts"
									className={({ isActive }) =>
										`block py-2 pl-3 ${isActive ? "text-blue-700" : ""
										} pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`
									}
								>
									My NFTs
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Nav;
