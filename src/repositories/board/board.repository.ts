import { Injectable, NotImplementedException } from "@nestjs/common";
import type Board from "../../models/board.js";

@Injectable()
export default class BoardRepository {
  public async getBoards(): Promise<Board[]> {
    throw new NotImplementedException("Get boards is not yet implemented!");
  }
}
