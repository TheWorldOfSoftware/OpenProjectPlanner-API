import { Controller, Get, NotImplementedException } from "@nestjs/common";
import Board from "../../models/board.js";

@Controller()
export default class BoardController {
  @Get()
  getAllBoards(): Board[] {
    throw new NotImplementedException("Get boards is not yet implemented!");
  }

  @Get(":boardid")
  getBoard(boardId: string): Board {
    return new Board("name", boardId);
  }
}
