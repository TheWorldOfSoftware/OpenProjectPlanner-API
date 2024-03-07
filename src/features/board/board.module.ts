import BoardFeature from "./board.feature.js";
import BoardRepositoryModule from "repositories/boards/board.module.js";
import { Module } from "@nestjs/common";

@Module({
  imports: [BoardRepositoryModule],
  providers: [BoardFeature],
  exports: [BoardFeature]
})
export default class BoardFeatureModule {}
