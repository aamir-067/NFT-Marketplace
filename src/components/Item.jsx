import React from 'react'

const Item = ({ image, name, owner, isAvail }) => {
    return (
        <div className="relative w-64 min-w-min rounded-md">
            <img
                src={`${image}`}
                alt="doodle nft"
                className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">{name}</h1>
                <p className="mt-2 text-sm text-gray-300">
                    Owner : {`${[...owner].slice(0, 5).join("")}....`}
                </p>

                {isAvail && <div className='my-4'>
                    <h2 className="text-lg mb-2 font-semibold text-white">Price : 0.3 eth</h2>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Purchase
                    </button>
                </div>}

            </div>
        </div>
    )
}

export default Item