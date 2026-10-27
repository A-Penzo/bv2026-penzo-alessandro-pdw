import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from '@core/account';

import { AuthController } from './controller/auth.controller';

import {
  AuthService,
  AuthIdentifierService,
  AuthCookieService,
  AuthSessionService,
  PasswordCredentialService,
  PasswordHasherService,
  PasswordPolicyService,
  CsrfService,
  RefreshTokenService,
  TokenCryptoService,
} from './service/';

import {
  AuthIdentifierEntity,
  PasswordCredentialEntity,
  AuthRefreshTokenEntity,
  AuthSessionEntity,
} from './data/entity/';

import { AccessAuthGuard, OriginGuard } from './guard/';

@Module({
  imports: [
    AccountModule,
    TypeOrmModule.forFeature([
      AuthIdentifierEntity,
      PasswordCredentialEntity,
      AuthSessionEntity,
      AuthRefreshTokenEntity,
    ]),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthIdentifierService,
    PasswordCredentialService,
    PasswordHasherService,
    PasswordPolicyService,
    AuthCookieService,
    AuthSessionService,
    CsrfService,
    RefreshTokenService,
    TokenCryptoService,
    { provide: APP_GUARD, useClass: OriginGuard },
    { provide: APP_GUARD, useClass: AccessAuthGuard },
  ],
})
export class AuthModule {}
