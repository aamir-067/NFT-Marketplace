const Item = ({ image, name, tokenId }) => {
    return (
        <div className="relative cursor-pointer overflow-hidden lg:w-60 md:w-52 w-40 rounded-md">
            <img
                src={`${image}`}
                alt="doodle nft"
                className="z-0 h-full hover:scale-105 duration-500 w-full rounded-md object-cover"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div> */}
            <div className="absolute p-4 bottom-0 pt-10 w-full text-left bg-gradient-to-t from-gray-900 to-transparent">
                <h1 className="text-lg overflow-hidden pr-4 font-semibold whitespace-nowrap text-white">{name}</h1>
                <p className="mt-2 text-sm text-gray-300">
                    {/* Owner : {`${[...owner].slice(0, 5).join("")}....`} */}
                    #{tokenId}
                </p>


            </div>
        </div>
    )
}

export default Item