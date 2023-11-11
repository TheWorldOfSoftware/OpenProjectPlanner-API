import mysql, { type Pool, type PoolOptions } from "mysql2/promise";
import type { Credentials } from "types/credentials.js";
import type Database from "../idatabase.js";

/**
 * Interact with a MySQL database
 */
export default class MySQL implements Database {
  /** Manage a pool of connections */
  private pool: Pool | null = null;

  /** Configuration options for the connection pool */
  private config: PoolOptions;

  /**
   * Instantiate a new MySQL representation.
   * @param {string} host The host URL of the database
   * @param {object} credentials Connection credentials used to authenticate on the database
   * @param {string} credentials.username The username to authenticate with
   * @param {string} credentials.password The password of passphrase used for authentication
   * @param {boolean} namedPlaceholders Optional config option to allow named placeholders in the provided queries. Format is :[name]. Default false
   */
  public constructor(
    host: string,
    { username, password }: Credentials,
    namedPlaceholders: boolean = false
  ) {
    this.config = {
      host: host,
      user: username,
      password: password,
      namedPlaceholders: namedPlaceholders
    };
  }

  public connect(): void {
    this.pool = mysql.createPool(this.config);
  }

  public async disconnect(): Promise<void> {
    await this.pool?.end();
  }

  public async execute(query: string, params: any[]): Promise<any> {
    const connection = await this.pool?.getConnection();
    return connection?.execute(query, params);
  }
}
