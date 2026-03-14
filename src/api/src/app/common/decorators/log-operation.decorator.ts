import { SetMetadata } from '@nestjs/common';

export const LOG_OPERATION_KEY = 'log_operation';

/**
 * Metadata options for the LogOperation decorator.
 */
export interface LogOperationOptions {
  /**
   * The action being performed (e.g., 'update_grade', 'login')
   */
  action: string;
  /**
   * The module or entity being affected (e.g., 'grade', 'auth')
   */
  module: string;
}

/**
 * Decorator to mark a route as a critical operation that needs to be logged.
 * 
 * @example
 * \@LogOperation({ action: 'update_grade', module: 'grade' })
 * \@Post('update')
 * updateGrade(...) { ... }
 */
export const LogOperation = (options: LogOperationOptions) =>
  SetMetadata(LOG_OPERATION_KEY, options);
