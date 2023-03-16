import {NextFunction, Request, Response} from "express";
import * as fs from "fs";
import {saveToDomainKeyWord} from "../controller/domainKeyWordController";
import {parse} from "csv";
const success = {
    success: "file successfully upload"
}

export function saveToDatabase(request: Request, response: Response, next: NextFunction){

    const files = request.files;
    if (!files){
        const error = new Error('Please choose files')
        return next(error);
    }

    const self = this;
    console.log(files);
    files.forEach(file => {
        let userName = null;
        let domains  = [];
        let keyWords = [];

        fs.createReadStream(file.path)
            .pipe(parse({ delimiter: ",", from_line: 2}))
            .on("data", function (row){

                userName = row.shift();
                domains = row.shift()
                    .replace(/\s+/g, '')
                    .trim().split("|")

                keyWords = [...row].map(keyWord=>keyWord.replace(/\s+/g, '')
                    .trim().split("|")
                    .join(","))

                if(domains.length != keyWords.length)
                {
                    response.send({error:"domains and keywors number not matched or there is empty filed"})
                }

                domains.forEach((domain,index)=>{
                    saveToDomainKeyWord(domain,keyWords[index],userName).catch(err=>response.send(err));
                })

            })
            .on("end", function () {
                console.log("finished");
            })
            .on("error", function (err){
                console.log(err.message);
            });
    });


    response.send(success);
   // return next();

}