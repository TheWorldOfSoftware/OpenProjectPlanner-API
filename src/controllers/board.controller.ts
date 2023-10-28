import { Controller, Get } from "@nestjs/common";
import type Board from "models/board.js";

@Controller()
export default class BoardController {
  @Get()
  getBoards(): Board[] {
    throw new Error("Not implemented!");
  }
}
