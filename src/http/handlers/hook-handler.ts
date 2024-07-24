// This file was generated by liblab | https://liblab.com/

import { Request } from '../transport/request';
import { HttpResponse, RequestHandler } from '../types';
import { HttpError } from '../error';
import { Hook } from '../hooks/hook';

export class HookHandler implements RequestHandler {
  next?: RequestHandler;

  constructor(private readonly hook: Hook) {}

  async handle<T>(request: Request<T>): Promise<HttpResponse<T>> {
    if (!this.next) {
      throw new Error('No next handler set in hook handler.');
    }

    const hookParams = this.getHookParams<T>(request);

    const nextRequest = await this.beforeRequest(request, hookParams);

    const response = await this.next.handle(nextRequest);

    if (response.metadata.status < 400) {
      return await this.hook.afterResponse(request.toHookRequest(), response, hookParams);
    }

    const error = await this.hook.onError(request.toHookRequest(), response, hookParams);

    throw new HttpError(error.metadata, error.error);
  }

  private async beforeRequest<T>(request: Request<T>, hookParams: Map<string, string>): Promise<Request<T>> {
    const hookRequest = request.toHookRequest();

    const newRequest = await this.hook.beforeRequest(hookRequest, hookParams);

    request.updateFromHookRequest(newRequest);

    return request;
  }

  getHookParams<T>(request: Request<T>): Map<string, string> {
    const hookParams: Map<string, string> = new Map();
    hookParams.set('apiKey', request.config.apiKey || '');
    return hookParams;
  }
}
