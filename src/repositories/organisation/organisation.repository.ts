import { Inject, Injectable } from "@nestjs/common";
import type MySQL from "../sources/databases/mysql/mysql.js";
import Organisation from "../../models/organisation/organisation.js";
import type { OrganisationTable } from "../sources/open-project-planner/tables/organisation.js";

@Injectable()
export default class OrganisationRepository {
  public constructor(@Inject("MySQL_OpenProjectPlanner") private readonly mySQL: MySQL) {}

  public async getOrganisations(): Promise<Organisation[]> {
    const query = `SELECT BIN_TO_UUID(Id) AS Id, Name, Description FROM Organisation WHERE Deleted IS FALSE;`;
    const [rows] = await this.mySQL.execute<OrganisationTable[]>(query);
    return rows.map(row => new Organisation(row.Name, row.Description, row.Id))
  }
}