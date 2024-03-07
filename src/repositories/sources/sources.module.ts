import { Module } from "@nestjs/common";
import OpenProjectModule from "./open-project/open-project.module.js";

@Module({
  imports: [OpenProjectModule],
  exports: [OpenProjectModule]
})
export default class SourcesModule {}
