import { Controller, Get } from "@nestjs/common";

@Controller()
export default class RootController {
  @Get()
  getAccepted(): "" {
    return "";
  }
}
