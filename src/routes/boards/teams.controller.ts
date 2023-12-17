import { Controller, Inject, Put } from "@nestjs/common";
import { BoardTeamFeature } from "../../features/boards/team.feature.js";
import { BodyParam } from "../decorators/body-param.decorator.js";
import type { TeamAssign } from "../../types/boards/team-assign.js";

@Controller()
export class BoardTeamsController {
  public constructor(
    @Inject(BoardTeamFeature)
    private readonly boardTeamFeature: BoardTeamFeature
  ) {}

  @Put("assign")
  public async putBoardTeams(
    @BodyParam("boardId") { boardId, teamIds }: TeamAssign
  ): Promise<void> {
    this.boardTeamFeature.assignBoardTeams(boardId, teamIds);
  }
}
