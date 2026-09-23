import { Injectable } from '@nestjs/common';
import { ValidatedEnvironment } from './environment/environment.validation';
import { ConfigService } from '@nestjs/config';
import { AppMode, ConfigKey, LogLevel } from './data/enum';
import { DatabaseType } from './data/enum/database-type.enum';
@Injectable()
export class EnvService {
  constructor(
    private readonly configService: ConfigService<ValidatedEnvironment, true>,
  ) {}

  appMode(): AppMode {
    return this.get(ConfigKey.NodeEnv);
  }
  get appName(): string {
    return this.get(ConfigKey.AppName);
  }
  get appPort(): number {
    return this.get(ConfigKey.AppPort);
  }
  get isTest(): boolean {
    return this.appMode() === AppMode.Test;
  }
  get appBaseUrl(): string {
    return this.get(ConfigKey.AppBaseUrl);
  }
  get corsOrigins(): string[] {
    return this.get(ConfigKey.AppCorsOrigin);
  }
  get trustProxy(): boolean {
    return this.get(ConfigKey.AppTrustProxy);
  }
  get httpPayloadErrorStatusCode(): number {
    return this.get(ConfigKey.AppHttpPayloadErrorCode);
  }
  get logLevel(): LogLevel {
    return this.get(ConfigKey.LogLevel);
  }
  get swaggerEnabled(): boolean {
    return this.get(ConfigKey.SwaggerEnabled);
  }
  get swaggerTitle(): string {
    return this.get(ConfigKey.SwaggerTitle);
  }
  get swaggerDescription(): string {
    return this.get(ConfigKey.SwaggerDescription);
  }
  get swaggerVersion(): string {
    return this.get(ConfigKey.SwaggerVersion);
  }
  get swaggerPath(): string {
    return this.get(ConfigKey.SwaggerPath);
  }

  get databaseType(): DatabaseType {
    return this.get(ConfigKey.DbType);
  }
  get databaseHost(): string {
    return this.get(ConfigKey.DbHost);
  }
  get databasePort(): number {
    return this.get(ConfigKey.DbPort);
  }
  get databaseUser(): string {
    return this.get(ConfigKey.DbUser);
  }
  get databasePassword(): string {
    return this.get(ConfigKey.DbPassword);
  }
  get databaseName(): string {
    return this.get(ConfigKey.DbDatabase);
  }
  get databaseSynchronize(): boolean {
    return this.get(ConfigKey.DbSync);
  }
  get databaseMigrationsRun(): boolean {
    return this.get(ConfigKey.DbMigration);
  }
  get databaseLogging(): boolean {
    return this.get(ConfigKey.DbLog);
  }
  get databaseSchema(): string {
    return this.get(ConfigKey.DbSchema);
  }

  get<TConfigKey extends keyof ValidatedEnvironment>(
    key: TConfigKey,
  ): ValidatedEnvironment[TConfigKey] {
    return this.configService.getOrThrow(key, { infer: true });
  }
}
