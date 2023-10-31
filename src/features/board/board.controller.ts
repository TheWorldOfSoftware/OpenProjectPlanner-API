import { Controller, Get, NotImplementedException } from "@nestjs/common";
import type Board from "models/board.js";

@Controller("boards")
export default class BoardController {
  @Get()
  getAllBoards(): Board[] {
    throw new NotImplementedException("Get boards is not yet implemented!");
  }
}
