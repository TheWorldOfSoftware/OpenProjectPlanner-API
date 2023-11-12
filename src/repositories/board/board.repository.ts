import { Inject, Injectable } from "@nestjs/common";
import Board from "../../models/board.js";
import type MySQL from "../databases/mysql/mysql.js";
import type { BoardTable } from "../databases/mysql/tables/board.js";

@Injectable()
export default class BoardRepository {
  public constructor(
    @Inject("MySQL_OpenProjectPlanner") private readonly mySql: MySQL
  ) {
    if (!mySql.connected) mySql.connect();
  }

  public async getBoards(): Promise<Board[]> {
    const query = `
      SELECT * FROM Board;
    `;

    const [rows] = await this.mySql.execute<BoardTable[]>(query);
    return rows.map(row => new Board(row.Name, row.Id));
  }
}
