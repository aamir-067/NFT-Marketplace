const { Web3Storage } = require('web3.storage');
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGQ3QzEwMTcyNzMxNGQ1ODliMjk3QmNiOTAyQ0I3NDZEOEIxOEI2MWYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTc3OTkxNzM0MDAsIm5hbWUiOiJtYXJrZXRwbGFjZSJ9.itk9oN9f-NAJ1iBvMs5AtHomiHNpJasEJGVQEKtM_Wo"
const files = require("./tempFile.json");
function jsonFile(filename, obj) {
    return new File([JSON.stringify(obj)], filename)
}
async function main() {

    const storage = new Web3Storage({ token })

    const cid = await storage.put(["abc"])
    // console.log('Content added with CID:', cid)
    console.log(`link to the file is : https://dweb.link/ipfs/${cid}`);
}


async function storeImage(imageFile) {
    // The name for our upload includes a prefix we can use to identify our files later
    const uploadName = 'myFile'

    // We store some metadata about the image alongside the image file.
    // The metadata includes the file path, which we can use to generate 
    // a URL to the full image.
    const metadataFile = jsonFile('metadata.json', {
        path: imageFile.name,
        caption
    })

    const token = getSavedToken()
    if (!token) {
        showMessage('> ❗️ no API token found for Web3.Storage. You can add one in the settings page!')
        showLink(`${location.protocol}//${location.host}/settings.html`)
        return
    }
    const web3storage = new Web3Storage({ token })
    showMessage(`> 🤖 calculating content ID for ${imageFile.name}`)
    const cid = await web3storage.put([imageFile, metadataFile], {
        // the name is viewable at https://web3.storage/files and is included in the status and list API responses
        name: uploadName,

        // onRootCidReady will be called as soon as we've calculated the Content ID locally, before uploading
        onRootCidReady: (localCid) => {
            showMessage(`> 🔑 locally calculated Content ID: ${localCid} `)
            showMessage('> 📡 sending files to web3.storage ')
        },

        // onStoredChunk is called after each chunk of data is uploaded
        onStoredChunk: (bytes) => showMessage(`> 🛰 sent ${bytes.toLocaleString()} bytes to web3.storage`)
    })

    const metadataGatewayURL = makeGatewayURL(cid, 'metadata.json')
    const imageGatewayURL = makeGatewayURL(cid, imageFile.name)
    const imageURI = `ipfs://${cid}/${imageFile.name}`
    const metadataURI = `ipfs://${cid}/metadata.json`
    return { cid, metadataGatewayURL, imageGatewayURL, imageURI, metadataURI }
}



main()
