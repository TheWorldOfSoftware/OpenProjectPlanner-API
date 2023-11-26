import { Inject, Injectable } from "@nestjs/common";
import type MySQL from "../sources/databases/mysql/mysql.js";

@Injectable()
export default class OrganisationRepository {
  public constructor(@Inject("MySQL_OpenProjectPlanner") private readonly mySQL: MySQL) {}

  public async getOrganisations() {
    const query = `SELECT * FROM Organisations;`;
    return await this.mySQL.execute(query);
  }
}