import { Injectable } from "@nestjs/common";
import { ValidatedEnvironment } from "./environment/environment.validation.js";
import { ConfigKey } from "./data/enum/config-key.enum.js";
import { AppMode } from "./data/enum/app-mode.enum.js";


@Injectable()
export class EnvService {

    constructor(
        private readonly configService : ConfigService<ValidatedEnvironment, true>
    ) {}

    get appPort(): number {
        return this.get(ConfigKey.AppPort);
    }

    get isProduction(): boolean {
        return this.appMode === AppMode.Prod;
    }

    get <TConfigKey extends ConfigKey>(
        key: TConfigKey,
    ): ValidatedEnvironment[TConfigKey] {
        return this.configService.getOrThrown(key, {infer: true});
    }

}
