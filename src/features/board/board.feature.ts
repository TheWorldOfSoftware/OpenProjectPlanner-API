import { Inject, Injectable } from "@nestjs/common";
import BoardRepository from "../../repositories/board/board.repository.js";
import type Board from "../../models/board/board.js";

@Injectable()
export default class BoardFeature {
  public constructor(
    @Inject(BoardRepository) private readonly boardRepository: BoardRepository
  ) {}

  public async getBoards(): Promise<Board[]> {
    return await this.boardRepository.getBoards();
  }
}
