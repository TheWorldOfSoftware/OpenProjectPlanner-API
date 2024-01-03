import { Inject, Injectable } from "@nestjs/common";
import type Board from "../../models/boards/board.js";
import BoardRepository from "../../repositories/boards/board.repository.js";
import type { UUID } from "crypto";

@Injectable()
export default class BoardFeature {
  private readonly boardRepository: Readonly<BoardRepository>;

  public constructor(
    @Inject(BoardRepository) boardRepository: Readonly<BoardRepository>
  ) {
    this.boardRepository = boardRepository;
  }

  public async removeBoard(boardId: UUID): Promise<void> {
    await this.boardRepository.softDeleteBoard(boardId);
  }

  public async getBoards(organisationId: UUID): Promise<Board[]> {
    return this.boardRepository.getBoards(organisationId);
  }

  public async newBoard(board: Readonly<Board>): Promise<void> {
    await this.boardRepository.insertBoard(board);
  }

  public async updateBoard(board: Readonly<Board>): Promise<void> {
    await this.boardRepository.updateBoard(board);
  }
}
