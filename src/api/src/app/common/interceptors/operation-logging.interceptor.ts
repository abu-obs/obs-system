import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {
  LOG_OPERATION_KEY,
  LogOperationOptions,
} from '../decorators/log-operation.decorator';

@Injectable()
export class OperationLoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(OperationLoggingInterceptor.name);

  // In a real scenario, you can inject a logging service to write logs to a DB.
  // constructor(
  //   private reflector: Reflector,
  //   private readonly auditLogService: AuditLogService,
  // ) {}

  constructor(private reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const logOptions = this.reflector.get<LogOperationOptions>(
      LOG_OPERATION_KEY,
      context.getHandler(),
    );

    // If the route is not decorated, skip logging
    if (!logOptions) {
      return next.handle();
    }

    const { action, module } = logOptions;

    const request = context.switchToHttp().getRequest();
    // Assuming user information is attached to the request by auth guard
    const user = request.user;
    const userId = user?.id || user?.sub || 'anonymous';
    const method = request.method;
    const url = request.url;
    const ip = request.ip;

    this.logger.log(
      `[${module}] Action '${action}' initiated by User: ${userId} | ${method} ${url} | IP: ${ip}`,
    );

    const startTime = Date.now();

    return next.handle().pipe(
      tap({
        next: (response) => {
          const duration = Date.now() - startTime;
          this.logger.log(
            `[${module}] Action '${action}' completed successfully by User: ${userId} in ${duration}ms`,
          );

          // Example: Save to Database
          // this.auditLogService.create({
          //   userId,
          //   action,
          //   module,
          //   requestUrl: url,
          //   requestMethod: method,
          //   ipAddress: ip,
          //   status: 'SUCCESS',
          // });
        },
        error: (error) => {
          const duration = Date.now() - startTime;
          this.logger.error(
            `[${module}] Action '${action}' failed for User: ${userId} in ${duration}ms | Error: ${error.message}`,
            error.stack,
          );

          // Example: Save error log to Database
          // this.auditLogService.create({
          //   userId,
          //   action,
          //   module,
          //   requestUrl: url,
          //   requestMethod: method,
          //   ipAddress: ip,
          //   status: 'FAILED',
          //   errorMessage: error.message,
          // });
        },
      }),
    );
  }
}
