import { Module } from "@nestjs/common";
import BoardTeamRepositoryModule from "../../repositories/boards/team.module.js";
import BoardTeamFeature from "./team.feature.js";

@Module({
  imports: [BoardTeamRepositoryModule],
  providers: [BoardTeamFeature],
  exports: [BoardTeamFeature]
})
export default class BoardTeamFeatureModule {}
