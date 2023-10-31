import { Module } from "@nestjs/common";
import RootController from "./root.controller.js";

@Module({
  controllers: [RootController]
})
export default class RootModule {}
