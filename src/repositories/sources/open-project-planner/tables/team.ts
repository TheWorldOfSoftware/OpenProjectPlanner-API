import type { RowDataPacket } from "mysql2/promise";
import type { UUID } from "crypto";

export default interface TeamTable extends RowDataPacket {
  Id: UUID;
  OrganisationId: UUID;
  Name: string;
  Description: string;
}
