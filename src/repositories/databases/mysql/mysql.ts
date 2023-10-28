import mysql, { type Pool } from "mysql2/promise";
import type { Credentials } from "types/credentials.js";

export default class MySQL {
  private pool: Pool | null = null;

  public constructor(host: string, { username, password }: Credentials) {
    this.pool = mysql.createPool({
      host: host,
      user: username,
      password: password
    });
  }

  public close(): void {
    this.pool?.end();
  }
}
