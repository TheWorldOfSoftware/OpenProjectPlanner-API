import type Board from "../../models/boards/board.js";
import type Team from "../../models/organisation/team.js";

export interface TeamAssign {
  boardId: Board["id"] & {};
  teamIds: (Team["id"] & {})[];
}
