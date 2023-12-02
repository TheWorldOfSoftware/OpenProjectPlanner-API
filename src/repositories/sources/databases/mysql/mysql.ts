import {
  createPool,
  type FieldPacket,
  type Pool,
  type PoolOptions,
  type ProcedureCallPacket,
  type ResultSetHeader,
  type RowDataPacket
} from "mysql2/promise";
import type IDatabase from "../idatabase.js";

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
    { username, password }: { username: string; password: string },
    defaultSchema?: string,
    namedPlaceholders: boolean = false
  ) {
    this.poolConfig = {
      host: host,
      user: username,
      password: password,
      namedPlaceholders: namedPlaceholders,
      ...(defaultSchema && { database: defaultSchema })
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
      | ResultSetHeader
      | ResultSetHeader[]
      | RowDataPacket[]
      | RowDataPacket[][]
      | ProcedureCallPacket
  >(query: string, params?: any[] | undefined): Promise<[T, FieldPacket[]]> {
    return await this.pool.execute(query, params);
  }
}
