import { Inject, Injectable } from "@nestjs/common";
import type { MySQL } from "../sources/databases/mysql/mysql.js";
import { Team } from "../../models/organisation/team.js";
import type { TeamTable } from "../sources/open-project-planner/tables/team.js";
import type { UUID } from "crypto";
import { escape } from "mysql2/promise";

@Injectable()
export class TeamRepository {
  private readonly mySQL: Readonly<MySQL>;

  public constructor(
    @Inject("MySQL_OpenProjectPlanner") mySQL: Readonly<MySQL>
  ) {
    this.mySQL = mySQL;
  }

  public async insertTeam(team: Readonly<Team>): Promise<void> {
    const query = `
      INSERT INTO Team (OrganisationId, Name, Description)
      VALUES (UUID_TO_BIN(${escape(team.organisationId)}), ${escape(
        team.name
      )}, ${escape(team.description)});
    `;
    await this.mySQL.execute(query);
  }

  public async getTeams(organisationId: UUID): Promise<Team[]> {
    const query = `
      SELECT BIN_TO_UUID(Id) AS Id, Name, Description
      FROM Team
      WHERE Deleted IS FALSE
        AND BIN_TO_UUID(OrganisationId) = ${escape(organisationId)};
    `;
    const [rows] = await this.mySQL.execute<Readonly<TeamTable>[]>(query);
    return rows.map(
      row =>
        new Team(
          organisationId,
          { name: row.Name, description: row.Description },
          row.Id
        )
    );
  }
}
