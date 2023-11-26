/**
 * Represents a physical database
 */
export default interface IDatabase {
  /**
   * Connect to the database.
   */
  connect(): void | Promise<void>;
  /**
   * Disconnect from the database.
   */
  disconnect(): void | Promise<void>;
  /**
   * Execute a query on the database.
   * @param {string} query The query to execute on the database
   * @param {any[]} params Possible additional params
   */
  execute(query: string, params?: any[]): Promise<any>;
}
