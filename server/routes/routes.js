import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js"
import { getAccountDetails, healthCheck, uploadFile, uploadByPinata, getNftDetails, uploadMetadata } from "../controller/index.controller.js";


const router = new Router();

router.route("/health").get(healthCheck)

router.route("/upload-file").post(upload.single("file"), uploadFile)


router.route("/:chain/:address/nfts").get(getAccountDetails)

router.route("/:chain/:address/:tokenId").get(getNftDetails);

router.route("/upload-to-ipfs").post(upload.single("file"), uploadByPinata);
router.route("/upload-metadata").post(uploadMetadata);
export { router }

