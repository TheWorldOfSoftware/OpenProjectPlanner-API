import type { UUID } from "crypto";
import type { RowDataPacket } from "mysql2/promise";

export interface BoardTable extends RowDataPacket {
  Id: UUID;
  OrganisationId: UUID;
  Title: string;
  Description: string;
}
