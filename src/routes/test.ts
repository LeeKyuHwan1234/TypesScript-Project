import { Request, Response, NextFunction } from "express";
import * as express from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.render('test');
});

export = router;