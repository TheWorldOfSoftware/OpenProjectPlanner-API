import { Module } from "@nestjs/common";
import BoardTeamFeatureModule from "../../features/boards/team.module.js";
import BoardTeamsController from "./teams.controller.js";

@Module({
  imports: [BoardTeamFeatureModule],
  controllers: [BoardTeamsController]
})
export default class BoardTeamsModule {}
