import {
  type FieldPacket,
  type Pool,
  type PoolOptions,
  type ProcedureCallPacket,
  type ResultSetHeader,
  type RowDataPacket,
  createPool
} from "mysql2/promise";
import type IDatabase from "./idatabase.js";

/**
 * Interact with a MySQL database
 */
export default class MySQL implements IDatabase {
  /** Manage a pool of connections */
  private pool: Pool;

  /** Configuration options for the connection pool */
  private readonly poolConfig: PoolOptions;

  /**
   * Instantiate a new MySQL connector.
   * @param {string} host The host URL of the database
   * @param {object} credentials Connection credentials used to authenticate on the database
   * @param {string} credentials.username The username used to authenticate on the database
   * @param {string} credentials.password The password used to authenticate on the database
   * @param {string=} defaultSchema Optional parameter to select the default schema
   * @param {boolean=} namedPlaceholders Optional config option to allow named placeholders in provided queries. Format is :[name]
   */
  public constructor(
    host: string,
    { username, password }: Readonly<{ username: string; password: string }>,
    {
      defaultSchema,
      namedPlaceholders = false
    }: Readonly<Partial<{ defaultSchema: string; namedPlaceholders: boolean }>>
  ) {
    this.poolConfig = {
      host,
      namedPlaceholders,
      password,
      user: username,
      ...(typeof defaultSchema !== "undefined" && { database: defaultSchema })
    };

    this.pool = createPool(this.poolConfig);
  }

  public connect(): void {
    this.pool = createPool(this.poolConfig);
  }

  public async disconnect(): Promise<void> {
    await this.pool.end();
  }

  public async execute<
    T extends
      | ProcedureCallPacket
      | ResultSetHeader
      | ResultSetHeader[]
      | RowDataPacket[]
      | RowDataPacket[][]
  >(query: string, params?: readonly unknown[]): Promise<[T, FieldPacket[]]> {
    return this.pool.execute(query, params);
  }
}
