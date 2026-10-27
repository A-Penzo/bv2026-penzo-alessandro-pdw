import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from '@core/account';
import {
  AuthIdentifierEntity,
  PasswordCredentialEntity,
  AuthSessionEntity,
  AuthRefreshTokenEntity,
} from './data';

import {
  AuthCookieService,
  AuthIdentifierService,
  AuthSessionService,
  CsrfService,
  PasswordCredentialService,
  PasswordHasherService,
  PasswordPolicyService,
  RefreshTokenService,
  TokenCryptoService,
} from './service';

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
  providers: [
    AuthIdentifierService,
    AuthCookieService,
    AuthSessionService,
    PasswordCredentialService,
    PasswordHasherService,
    PasswordPolicyService,
    CsrfService,
    TokenCryptoService,
    RefreshTokenService,
  ],
})
export class AuthModule {}
