import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js"
import { getAccountDetails, healthCheck, uploadFile } from "../controller/index.controller.js";


const router = new Router();

router.route("/health").get(healthCheck)

router.route("/upload-file").post(upload.single("file"), uploadFile)


router.route("/:chain/:address/nfts").get(getAccountDetails)

export { router }

