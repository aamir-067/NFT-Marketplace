const { Web3Storage } = require('web3.storage');
export async function storeFile({ fileToUpload, name = "myFile" }) {
    // The name for our upload includes a prefix we can use to identify our files later
    if (!fileToUpload) return console.error("No file to upload");

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGQ3QzEwMTcyNzMxNGQ1ODliMjk3QmNiOTAyQ0I3NDZEOEIxOEI2MWYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTc3OTkxNzM0MDAsIm5hbWUiOiJtYXJrZXRwbGFjZSJ9.itk9oN9f-NAJ1iBvMs5AtHomiHNpJasEJGVQEKtM_Wo"

    const web3storage = new Web3Storage({ token })

    const cid = await web3storage.put([fileToUpload], {
        name
    })

    const fileURI = `ipfs://${cid}/${fileToUpload.name}`

    return { cid, fileURI }
}