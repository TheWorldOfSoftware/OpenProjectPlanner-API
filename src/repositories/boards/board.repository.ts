import { Inject, Injectable } from "@nestjs/common";
import type MySQL from "../sources/databases/mysql/mysql.js";
import Board from "../../models/boards/board.js";
import { escape } from "mysql2/promise";
import type { UUID } from "crypto";
import type { BoardTable } from "../sources/open-project-planner/tables/board.js";

@Injectable()
export default class BoardRepository {
  public constructor(
    @Inject("MySQL_OpenProjectPlanner") private readonly mySQL: MySQL
  ) {}

  public async softDeleteBoard(boardId: UUID): Promise<void> {
    const query = `
      UPDATE Board
      SET Deleted = TRUE
      WHERE Id = UUID_TO_BIN(${escape(boardId)});
    `;
    await this.mySQL.execute(query);
  }

  public async insertBoard(board: Board): Promise<void> {
    const query = `
      INSERT INTO Board (OrganisationId, Title, Description)
      VALUES (UUID_TO_BIN(${escape(board.organisationId)}), ${escape(
        board.title
      )}, ${escape(board.description)});
    `;
    await this.mySQL.execute(query);
  }

  public async getBoards(organisationId: UUID): Promise<Board[]> {
    const query = `
      SELECT BIN_TO_UUID(Id) AS Id, Title, Description
      FROM Board
      WHERE Deleted IS FALSE
        AND BIN_TO_UUID(OrganisationId) = ${escape(organisationId)};
    `;

    const [rows] = await this.mySQL.execute<BoardTable[]>(query);
    return rows.map(
      row => new Board(organisationId, row.Title, row.Description, row.Id)
    );
  }

  public async updateBoard(board: Board): Promise<void> {
    const query = `
      UPDATE board
      SET Title = ${escape(board.title)},
        Description = ${escape(board.description)}
      WHERE Id = UUID_TO_BIN(${escape(board.id)});
    `;
    await this.mySQL.execute(query);
  }
}
