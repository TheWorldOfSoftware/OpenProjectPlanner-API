import type { UUID } from "crypto";
import type { RowDataPacket } from "mysql2/promise";

export interface TeamTable extends RowDataPacket {
  Id: UUID,
  OrganisationId: UUID,
  Name: string,
  Description: string
}
