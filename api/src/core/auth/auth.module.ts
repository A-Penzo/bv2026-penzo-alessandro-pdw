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
  AuthIdentifierService,
  CsrfService,
  PasswordCredentialService,
  PasswordHasherService,
  PasswordPolicyService,
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
    PasswordCredentialService,
    PasswordHasherService,
    PasswordPolicyService,
    CsrfService,
    TokenCryptoService,
  ],
})
export class AuthModule {}
