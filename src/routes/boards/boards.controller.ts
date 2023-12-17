import {
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseUUIDPipe,
  Post,
  Put
} from "@nestjs/common";
import type { Board } from "../../models/boards/board.js";
import { BoardFeature } from "../../features/boards/board.feature.js";
import { BoardPipe } from "../pipes/boards/board.pipe.js";
import { BodyParams } from "../decorators/body-param.decorator.js";
import type { UUID } from "crypto";

@Controller()
export class BoardsController {
  public constructor(
    @Inject(BoardFeature) private readonly boardFeature: BoardFeature
  ) {}

  @Delete(":id")
  public async deleteBoard(
    @Param("id", new ParseUUIDPipe()) boardId: UUID
  ): Promise<void> {
    await this.boardFeature.removeBoard(boardId);
  }

  @Get()
  public async getBoards(
    @Param("organisationId", new ParseUUIDPipe()) organisationId: UUID
  ): Promise<Board[]> {
    return this.boardFeature.getBoards(organisationId);
  }

  @Post()
  public async postBoard(
    @BodyParams(new BoardPipe()) board: Board
  ): Promise<void> {
    await this.boardFeature.newBoard(board);
  }

  @Put(":id")
  public async putBoard(
    @BodyParams(new BoardPipe()) board: Board
  ): Promise<void> {
    await this.boardFeature.updateBoard(board);
  }
}
