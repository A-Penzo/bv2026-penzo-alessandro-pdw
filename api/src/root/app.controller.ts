import { Controller, Get } from '@nestjs/common';
import { AppService } from '@root/app.service';
import { ApiSuccessCode } from '@common/api/decorator';
import { ApiCodeResponse } from '@common/api/data/enum/api-code-response.enum';
import { ApiException } from '@common/api/data/exception';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello-v2')
  @ApiSuccessCode(ApiCodeResponse.CommonSuccess)
  getHelloV2(): string {
    return this.appService.getHello();
  }

  @Get('hello-v3')
  getHelloV3(): string {
    throw new ApiException();
    return 'test';
  }
}
