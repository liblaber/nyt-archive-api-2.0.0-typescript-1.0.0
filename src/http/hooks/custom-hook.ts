import { HttpMetadata } from '../types';
import { Hook } from './hook';
import { HttpRequest, HttpResponse, HttpError } from './hook';

export class CustomHook implements Hook {
  public async beforeRequest(request: HttpRequest, params: Map<string, string>): Promise<HttpRequest> {
    if (!request.queryParams) {
      request.queryParams = new Map<string, string>();
    }
    if (params.has('apiKey')) {
      request.queryParams.set('api-key', params.get('apiKey'));
    } else {
      throw new Error('apiKey is required');
    }
    return request;
  }

  public async afterResponse(
    request: HttpRequest,
    response: HttpResponse<any>,
    params: Map<string, string>,
  ): Promise<HttpResponse<any>> {
    return response;
  }

  public async onError(
    request: HttpRequest,
    response: HttpResponse<any>,
    params: Map<string, string>,
  ): Promise<HttpError> {
    return new CustomHttpError('a custom error message', response.metadata);
  }
}

class CustomHttpError implements HttpError {
  constructor(
    public error: string,
    public metadata: HttpMetadata,
  ) {}
}
