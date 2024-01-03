import { Inject, Injectable } from "@nestjs/common";
import BoardTeamRepository from "../../repositories/boards/team.repository.js";
import type { UUID } from "crypto";

@Injectable()
export default class BoardTeamFeature {
  private readonly boardTeamRepository: Readonly<BoardTeamRepository>;

  public constructor(
    @Inject(BoardTeamRepository)
    boardTeamRepository: Readonly<BoardTeamRepository>
  ) {
    this.boardTeamRepository = boardTeamRepository;
  }

  public async assignBoardTeams(
    boardId: UUID,
    teamIds: readonly UUID[]
  ): Promise<void> {
    await this.boardTeamRepository.assignBoardTeams(boardId, teamIds);
  }
}
