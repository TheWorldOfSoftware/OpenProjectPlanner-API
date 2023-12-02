import { Inject, Injectable } from "@nestjs/common";
import BoardRepository from "../../repositories/boards/board.repository.js";
import type { UUID } from "crypto";
import type Board from "../../models/boards/board.js";

@Injectable()
export default class BoardFeature {
  public constructor(
    @Inject(BoardRepository) private readonly boardRepository: BoardRepository
  ) {}

  public async removeBoard(boardId: UUID): Promise<void> {
    await this.boardRepository.softDeleteBoard(boardId);
  }

  public async getBoards(organisationId: UUID): Promise<Board[]> {
    return await this.boardRepository.getBoards(organisationId);
  }

  public async newBoard(board: Board): Promise<void> {
    await this.boardRepository.insertBoard(board);
  }

  public async updateBoard(board: Board): Promise<void> {
    await this.boardRepository.updateBoard(board);
  }
}
