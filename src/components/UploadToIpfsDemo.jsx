import React, { useRef, useState } from 'react'
import { storeFile } from "../utils/storage"

const Home = () => {
    const [file, setFile] = useState(null)
    const handleStore = async () => {
        const { cid, fileURI } = await storeFile({ fileToUpload: file, name: "myFile.jpg" });
        console.log(`Uploaded`);
        console.log("link is ", fileURI);
        console.log("cid is ", cid);
    }
    return (
        <div className='w-screen flex justify-center items-center'>
            <div>
                <form onSubmit={(e) => {
                    const doc = document.querySelector('input');
                    e.preventDefault();
                    console.log(doc.files[0]);
                    setFile(doc.files[0]);
                }}>
                    <input type="file" />
                    <br />
                    <button className='p-4 border border-black text-white bg-slate-800' >upload</button>
                </form>


                <button className='p-4 border border-black text-white bg-slate-800' onClick={() => { handleStore() }}>Upload to ipfs</button>

            </div>
        </div >
    )
}

export default Home