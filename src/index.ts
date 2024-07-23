import { Environment } from './http/environment';
import { SdkConfig } from './http/types';
import { ArchiveService } from './services/archive';

export class NytArchives {
  public readonly archive: ArchiveService;

  constructor(public config: SdkConfig) {
    const baseUrl = config.environment || config.baseUrl || Environment.DEFAULT;
    this.config = {
      ...config,
      baseUrl,
    };
    this.archive = new ArchiveService(this.config);
  }

  set baseUrl(baseUrl: string) {
    this.archive.baseUrl = baseUrl;
  }

  set environment(environment: Environment) {
    this.archive.baseUrl = environment;
  }

  set timeout(timeout: number) {
    this.archive.timeout = timeout;
  }

  set apiKey(apiKey: string) {
    this.archive.apiKey = apiKey;
  }
}

// c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c
