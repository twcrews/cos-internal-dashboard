import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { planningCenterApiKey } from '../configuration';
import {
  PlanningCenterCollectionResponse,
  PlanningCenterSingleResponse,
} from '../planningCenter/shared';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  fetchCollection<T>(url: string) {
    return this.http.get<PlanningCenterCollectionResponse<T>>(url, {
      headers: {
        'X-Functions-Key': planningCenterApiKey.get() ?? '',
      },
    });
  }

  fetchSingle<T>(url: string) {
    return this.http.get<PlanningCenterSingleResponse<T>>(url, {
      headers: {
        'X-Functions-Key': planningCenterApiKey.get() ?? '',
      },
    });
  }

  async fetchAvatarUrl(url: string) {
    try {
      const blob = await lastValueFrom(
        this.http.get(url, {
          headers: {
            'X-Functions-Key': planningCenterApiKey.get() ?? '',
          },
          responseType: 'blob',
        })
      );
      return URL.createObjectURL(blob);
    } catch {
      return 'https://loremflickr.com/160/160/kitten';
    }
  }
}
