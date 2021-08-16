import { NextFunction, Response,Request } from "express";
import * as express from 'express';

function getIndex(req:Request, res:Response, next:NextFunction) {
	  res.render('index');
}


export {
  getIndex
}