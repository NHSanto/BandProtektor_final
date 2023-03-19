import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, response, Response } from "express";
import { AppDataSource } from "./data-source";
import { Routes } from "./routes";
import { upload } from "./uploader/csvUploader";
import { createReadStream } from "fs";
import { saveToDatabase } from "./fileHandler/csv";
import { getUserDomainsKeywords } from "./controller/urlUtils";

AppDataSource.initialize()
  .then(async () => {
    // create express app
    var cors = require("cors");
    const app = express();
    app.use(bodyParser.json());
    app.use(cors({ origin: "http://localhost:3000" }));

    // register express routes from defined application routes
    Routes.forEach((route) => {
      (app as any)[route.method](
        route.route,
        (req: Request, res: Response, next: Function) => {
          const result = new (route.controller as any)()[route.action](
            req,
            res,
            next
          );
          if (result instanceof Promise) {
            result.then((result) =>
              result !== null && result !== undefined
                ? res.send(result)
                : undefined
            );
          } else if (result !== null && result !== undefined) {
            res.json(result);
          }
        }
      );
    });

    // setup express app here
    // ...

    // start express server
    app.listen(3001);

    app.post("/addsite", upload.array("csv", 10), saveToDatabase);
    app.post("/domainkeyword/:userName", getUserDomainsKeywords);

    // app.use('/makeSiteUrl',function (req,res){
    //
    //     res.send("ok")
    // });

    console.log(
      "Express server has started on port 3001. Open http://localhost:3001 to see results"
    );
  })
  .catch((error) => console.log(error));
