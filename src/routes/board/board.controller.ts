import { Controller, Get, Inject } from "@nestjs/common";
import BoardRepository from "../../repositories/board/board.repository.js";
import Board from "../../models/board/board.js";

@Controller()
export default class BoardController {
  public constructor(
    @Inject(BoardRepository) private readonly boardRepository: BoardRepository
  ) {}

  @Get()
  async getAllBoards(): Promise<Board[]> {
    return await this.boardRepository.getBoards();
  }

  @Get(":boardid")
  async getBoard(boardId: string): Promise<Board> {
    return new Board("name", boardId);
  }
}
