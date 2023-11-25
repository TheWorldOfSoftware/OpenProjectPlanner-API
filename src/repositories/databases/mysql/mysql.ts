import mysql, {
  type FieldPacket,
  type Pool,
  type PoolOptions,
  type ProcedureCallPacket,
  type ResultSetHeader,
  type RowDataPacket
} from "mysql2/promise";
import type Database from "../idatabase.js";

/**
 * Interact with a MySQL database
 */
export default class MySQL implements Database {
  /** Manage a pool of connections */
  private pool: Pool | null = null;

  /** Configuration options for the connection pool */
  private config: PoolOptions;

  public get connected(): boolean {
    return this.pool !== null;
  }

  /**
   * Instantiate a new MySQL representation.
   * @param {object} database Configurations for the database
   * @param {string} database.host The host URL of the database
   * @param {string=} database.schema Optional parameter to select the default schema
   * @param {object} credentials Connection credentials used to authenticate on the database
   * @param {string} credentials.username The username to authenticate with
   * @param {string} credentials.password The password of passphrase used for authentication
   * @param {boolean=} namedPlaceholders Optional config option to allow named placeholders in the provided queries. Format is :[name]. Default false
   */
  public constructor(
    { host, schema }: { host: string; schema?: string },
    { username, password }: { username: string; password: string },
    namedPlaceholders: boolean = false
  ) {
    this.config = {
      host: host,
      user: username,
      password: password,
      namedPlaceholders: namedPlaceholders,
      ...(schema && { database: schema })
    };
  }

  public connect(): void {
    this.pool = mysql.createPool(this.config);
  }

  public async disconnect(): Promise<void> {
    await this.pool?.end();
    this.pool = null;
  }

  public async execute<
    T extends
      | ResultSetHeader
      | ResultSetHeader[]
      | RowDataPacket[]
      | RowDataPacket[][]
      | ProcedureCallPacket
  >(query: string, params?: any[]): Promise<[T, FieldPacket[]]> {
    const connection = await this.pool?.getConnection();
    if (!connection) throw new Error("No connection available.");

    return await connection?.execute(query, params);
  }
}
