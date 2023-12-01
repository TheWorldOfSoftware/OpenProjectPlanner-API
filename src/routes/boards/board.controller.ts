import {
  Controller,
  Get,
  Inject,
  Param,
  ParseUUIDPipe,
  Post
} from "@nestjs/common";
import BoardFeature from "../../features/boards/board.feature.js";
import type { UUID } from "crypto";
import type Board from "../../models/boards/board.js";
import { BodyParam } from "../decorators/body-param.decorator.js";
import { BoardPipe } from "../pipes/board.pipe.js";

@Controller()
export default class BoardController {
  public constructor(
    @Inject(BoardFeature) private readonly boardFeature: BoardFeature
  ) {}

  @Get()
  public async getBoards(
    @Param("organisationid", new ParseUUIDPipe()) organisationId: UUID
  ): Promise<Board[]> {
    return await this.boardFeature.getBoards(organisationId);
  }

  @Post()
  public async createBoard(
    @BodyParam("organisationid", new BoardPipe(true)) board: Board
  ): Promise<void> {
    await this.boardFeature.newBoard(board);
  }
}
