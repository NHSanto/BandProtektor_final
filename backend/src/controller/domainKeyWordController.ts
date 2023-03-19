import { AppDataSource } from "../data-source";
import { DomainKeyword } from "../entity/DomainKeyword";

const domainKeywordRepository = AppDataSource.getRepository(DomainKeyword);

const saveToDomainKeyWord = (domain, keyword, _user_name) => {
  const domainKeyword = Object.assign(new DomainKeyword(), {
    domain,
    keyword,
    user_name: _user_name,
  });
  return domainKeywordRepository.save(domainKeyword);
};
export { saveToDomainKeyWord };
