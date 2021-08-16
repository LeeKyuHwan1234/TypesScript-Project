import * as express from 'express'
import { Request, Response, NextFunction } from 'express';
import * as path from 'path';
import * as testRouter from "./routes/test";
import indexRouter from "./routes/index";
const app: express.Application = express();

  app.set( "views", path.join( __dirname, "views" ) );
  app.set( "view engine", "ejs" );
 
  app.use('/', indexRouter);
  app.use("/test", testRouter);

  app.listen(5000, () => {
    console.log('start server')
  })

