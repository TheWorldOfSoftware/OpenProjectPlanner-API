import { Inject, Injectable } from "@nestjs/common";
import type MySQL from "../sources/databases/mysql/mysql.js";
import Organisation from "../../models/organisation/organisation.js";
import type { OrganisationTable } from "../sources/open-project-planner/tables/organisation.js";
import { escape } from "mysql2/promise";
import type { UUID } from "crypto";

@Injectable()
export default class OrganisationRepository {
  public constructor(
    @Inject("MySQL_OpenProjectPlanner") private readonly mySQL: MySQL
  ) {}

  public async softDeleteOrganisation(organisationId: UUID): Promise<void> {
    const query = `
      UPDATE Organisation
      SET Deleted = TRUE
      WHERE Id = UUID_TO_BIN(${escape(organisationId)});
    `;
    await this.mySQL.execute(query);
  }

  public async insertOrganisation(organisation: Organisation): Promise<void> {
    const query = `
      INSERT INTO Organisation (Name, Description)
      VALUES (${escape(organisation.name)}, ${escape(
        organisation.description
      )});
    `;
    await this.mySQL.execute(query);
  }

  public async getOrganisations(): Promise<Organisation[]> {
    const query = `
      SELECT BIN_TO_UUID(Id) AS Id, Name, Description
      FROM Organisation
      WHERE Deleted IS FALSE;
    `;
    const [rows] = await this.mySQL.execute<OrganisationTable[]>(query);
    return rows.map(row => new Organisation(row.Name, row.Description, row.Id));
  }

  public async updateOrganisation(organisation: Organisation): Promise<void> {
    const query = `
      UPDATE Organisation
      SET Name = ${escape(organisation.name)},
        Description = ${escape(organisation.description)}
      WHERE Id = UUID_TO_BIN(${escape(organisation.id)})
        AND Deleted IS FALSE;
    `;

    await this.mySQL.execute(query);
  }
}
