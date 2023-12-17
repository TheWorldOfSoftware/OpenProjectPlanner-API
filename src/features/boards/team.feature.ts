import { Inject, Injectable } from "@nestjs/common";
import { BoardTeamRepository } from "../../repositories/boards/team.repository.js";
import type { UUID } from "crypto";

@Injectable()
export class BoardTeamFeature {
  public constructor(
    @Inject(BoardTeamRepository)
    private readonly boardTeamRepository: BoardTeamRepository
  ) {}

  public async assignBoardTeams(boardId: UUID, teamIds: UUID[]): Promise<void> {
    await this.boardTeamRepository.assignBoardTeams(boardId, teamIds);
  }
}
