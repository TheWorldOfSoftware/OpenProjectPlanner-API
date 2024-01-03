import {
  Controller,
  Get,
  Inject,
  Param,
  ParseUUIDPipe,
  Post
} from "@nestjs/common";
import { BodyParam } from "../decorators/body-param.decorator.js";
import type Team from "../../models/organisation/team.js";
import TeamFeature from "../../features/organisation/team.feature.js";
import TeamPipe from "../pipes/organisations/team.pipe.js";
import type { UUID } from "crypto";

@Controller()
export default class TeamController {
  private readonly teamFeature: Readonly<TeamFeature>;

  public constructor(@Inject(TeamFeature) teamFeature: Readonly<TeamFeature>) {
    this.teamFeature = teamFeature;
  }

  @Get()
  public async getTeams(
    @Param("organisationId", new ParseUUIDPipe()) organisationId: UUID
  ): Promise<Team[]> {
    return this.teamFeature.getTeams(organisationId);
  }

  @Post()
  public async createTeam(
    @BodyParam("organisationId", new TeamPipe(true)) team: Readonly<Team>
  ): Promise<void> {
    await this.teamFeature.newTeam(team);
  }
}
