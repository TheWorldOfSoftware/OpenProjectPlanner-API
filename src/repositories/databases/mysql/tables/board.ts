import type { RowDataPacket } from "mysql2/promise";

export interface BoardTable extends RowDataPacket {
  Id: string;
  Name: string;
}
