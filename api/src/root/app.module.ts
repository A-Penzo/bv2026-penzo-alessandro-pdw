import { DynamicModule, Module } from '@nestjs/common';
import { AppController } from '@root/app.controller';
import { AppService } from '@root/app.service';
import { AppConfigModule } from '@common/config/app-config.module';
import { HealthModule } from '@core/health';
import { LoggingModule } from '@common/logging/logging.module';
import { ApiInterceptor } from '@common/api/interceptor/api.interceptor';

@Module({})
export class AppModule {
  static register(): DynamicModule {
    return {
      module: AppModule,
      imports: [LoggingModule, AppConfigModule.register(), HealthModule],
      controllers: [AppController],
      providers: [AppService, ApiInterceptor],
    };
  }
}
