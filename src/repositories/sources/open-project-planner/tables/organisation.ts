import type { UUID } from "crypto";
import type { RowDataPacket } from "mysql2/promise";

export interface OrganisationTable extends RowDataPacket {
  Id: UUID;
  Name: string;
  Description: string;
}
