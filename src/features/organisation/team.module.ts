import { Module } from "@nestjs/common";
import { TeamFeature } from "./team.feature.js";
import { TeamRepositoryModule } from "../../repositories/organisation/team.module.js";

@Module({
  imports: [TeamRepositoryModule],
  providers: [TeamFeature],

  exports: [TeamFeature]
})
export class TeamFeatureModule {}
