/**
 * Represents a physical database
 */
export default interface Database {
  /**
   * Connect to the database.
   * Assumes connection configuration has already been provided.
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
