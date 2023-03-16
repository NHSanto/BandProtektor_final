import {NextFunction, Request, Response} from "express";
import {AppDataSource} from "../data-source";
import {DomainKeyword} from "../entity/DomainKeyword";
import {Equal} from "typeorm";

export function getUserDomainsKeywords(request: Request, response: Response, next: NextFunction) {
    const userName = request.params.userName;
    const domainKeywordRepository = AppDataSource.getRepository(DomainKeyword);
    AppDataSource.getRepository(DomainKeyword).findBy({
        user_name: Equal(userName),
    }).then(data=>response.send(data)).catch(err=>response.send(err));
}