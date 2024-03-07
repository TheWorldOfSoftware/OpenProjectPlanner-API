import { Inject, Injectable } from "@nestjs/common";
import type MySQL from "../sources/mysql.js";
import type { UUID } from "crypto";
import { escape } from "mysql2";

@Injectable()
export default class BoardTeamRepository {
  private readonly mySQL: Readonly<MySQL>;

  public constructor(
    @Inject("MySQL_OpenProjectPlanner") mySQL: Readonly<MySQL>
  ) {
    this.mySQL = mySQL;
  }

  public async assignBoardTeams(
    boardId: UUID,
    teamIds: readonly UUID[]
  ): Promise<void> {
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
