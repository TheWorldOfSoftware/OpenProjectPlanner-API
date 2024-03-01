import { Controller, Inject, Put } from "@nestjs/common";
import BoardTeamFeature from "../../features/boards/team.feature.js";
import { BodyParam } from "../../decorators/body-param.decorator.js";
import type TeamAssign from "../../types/boards/team-assign.js";
import TeamAssignPipe from "../pipes/boards/team-assign.pipe.js";

@Controller()
export default class BoardTeamsController {
  private readonly boardTeamFeature: Readonly<BoardTeamFeature>;

  public constructor(
    @Inject(BoardTeamFeature)
    boardTeamFeature: Readonly<BoardTeamFeature>
  ) {
    this.boardTeamFeature = boardTeamFeature;
  }

  @Put("assign")
  public async putBoardTeams(
    @BodyParam("boardId", new TeamAssignPipe())
    { boardId, teamIds }: Readonly<TeamAssign>
  ): Promise<void> {
    await this.boardTeamFeature.assignBoardTeams(boardId, teamIds);
  }
}
