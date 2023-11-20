import type { RowDataPacket } from "mysql2";

export interface OrganisationTable extends RowDataPacket {
  Id: string;
  Name: string;
}
