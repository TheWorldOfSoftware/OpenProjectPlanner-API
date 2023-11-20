import { Inject, Injectable } from "@nestjs/common";
import type MySQL from "../databases/mysql/mysql.js";
import Organisation from "../../models/organisation/organisation.js";
import type { OrganisationTable } from "../databases/mysql/tables/organisation.js";

@Injectable()
export default class OrganisationRepository {
  public constructor(
    @Inject("MySQL_OpenProjectPlanner") private readonly mySql: MySQL
  ) {
    if (!mySql.connected) mySql.connect();
  }

  public async getOrganisations(): Promise<Organisation[]> {
    const query = `
      SELECT * FROM Organisation;
    `;

    const [rows] = await this.mySql.execute<OrganisationTable[]>(query);
    return rows.map(row => new Organisation(row.Name, row.Id));
  }
}
