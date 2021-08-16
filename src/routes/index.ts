import { Request, Response, NextFunction } from "express";
import * as express from "express";
import * as indexController from '../controller/indexController'
const router = express.Router();

router.get("/", indexController.getIndex)

export default router;