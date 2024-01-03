import type { RowDataPacket } from "mysql2/promise";
import type { UUID } from "crypto";

export default interface OrganisationTable extends RowDataPacket {
  Id: UUID;
  Name: string;
  Description: string;
}
