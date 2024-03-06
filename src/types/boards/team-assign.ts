import type Board from "models/boards/board.js";
import type Team from "models/organisation/team.js";

export default interface TeamAssign {
  boardId: Board["id"] & NonNullable<unknown>;
  teamIds: (NonNullable<unknown> & Team["id"])[];
}
