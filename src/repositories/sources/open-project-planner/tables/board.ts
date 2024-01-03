import type { RowDataPacket } from "mysql2/promise";
import type { UUID } from "crypto";

export default interface BoardTable extends RowDataPacket {
  Id: UUID;
  OrganisationId: UUID;
  Title: string;
  Description: string;
}
