import { Controller, Get, Inject } from "@nestjs/common";
import Board from "../../models/board/board.js";
import BoardFeature from "../../features/board/board.feature.js";

@Controller()
export default class BoardController {
  public constructor(
    @Inject(BoardFeature) private readonly boardFeature: BoardFeature
  ) {}

  @Get()
  async getAllBoards(): Promise<Board[]> {
    return await this.boardFeature.getBoards();
  }

  @Get(":boardid")
  async getBoard(boardId: string): Promise<Board> {
    return new Board("name", boardId);
  }
}
