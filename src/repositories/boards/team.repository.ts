import { Inject, Injectable } from "@nestjs/common";
import type { MySQL } from "../sources/databases/mysql/mysql.js";
import type { UUID } from "crypto";
import { escape } from "mysql2";

@Injectable()
export class BoardTeamRepository {
  public constructor(
    @Inject("MySQL_OpenProjectPlanner") private readonly mySQL: MySQL
  ) {}

  public async assignBoardTeams(boardId: UUID, teamIds: UUID[]): Promise<void> {
    const query = `
      INSERT INTO team_board (BoardId, TeamId)
      VALUES ${teamIds
        .map(
          teamId =>
            `(UUID_TO_BIN(${escape(boardId)}), UUID_TO_BIN(${escape(teamId)}))`
        )
        .join(", ")}
    `;
    await this.mySQL.execute(query);
  }
}
