import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import {
  GetByYearMonthJsonOkResponse,
  getByYearMonthJsonOkResponseResponse,
} from './models/get-by-year-month-json-ok-response';

export class ArchiveService extends BaseService {
  /**
   * Pass in year and month and get back JSON with all articles for that month. The response can be big (~20 megabytes) and contain thousands of articles, depending on the year and month.
   * @param {number} year - Year: 1851-2019
   * @param {number} month - Year: 1-12
   * @returns {Promise<HttpResponse<GetByYearMonthJsonOkResponse>>} An array of articles.
   */
  async getByYearMonthJson(
    year: number,
    month: number,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetByYearMonthJsonOkResponse>> {
    const request = new Request({
      method: 'GET',
      path: '/{year}/{month}.json',
      config: this.config,
      responseSchema: getByYearMonthJsonOkResponseResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('year', year);
    request.addPathParam('month', month);
    return this.client.call<GetByYearMonthJsonOkResponse>(request);
  }
}
