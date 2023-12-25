import { Web3Storage } from 'web3.storage';
export async function storeFile({ fileToUpload, name = "myFile" }) {
    // The name for our upload includes a prefix we can use to identify our files later
    try {
        if (!fileToUpload) return console.error("No file to upload");

        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGQ3QzEwMTcyNzMxNGQ1ODliMjk3QmNiOTAyQ0I3NDZEOEIxOEI2MWYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTc3OTkxNzM0MDAsIm5hbWUiOiJtYXJrZXRwbGFjZSJ9.itk9oN9f-NAJ1iBvMs5AtHomiHNpJasEJGVQEKtM_Wo";

        const web3storage = new Web3Storage({ token })
        const json = {
            name: "Aamir Khan",
            description: "This is temporary storage"
        }
        const uploadingFile = new File([JSON.stringify(json)], "temp.json");
        console.log("uploading web3storage ....", uploadingFile.name);
        let cid = await web3storage.put([uploadingFile], {
            name: uploadingFile.name
        })
        console.log(cid);
        // const fileURI = `ipfs://${cid}/${uploadingFile.name}`
        // console.log("File Link is : ", fileURI);

        // return { cid, fileURI }
    } catch (error) {
        console.error(error || "something went wrong while uploading to IPFS")
    }
}