import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { planningCenterApiKey } from '../configuration';
import {
  PlanningCenterCollectionResponse,
  PlanningCenterSingleResponse,
} from '../planningCenter/shared';
import { lastValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private httpOptions = {
    headers: {
      'X-Functions-Key': planningCenterApiKey.get() ?? '',
    },
  };

  constructor(private http: HttpClient) {}

  fetchPlainText(url: string) {
    return this.http.get(url, { ...this.httpOptions, responseType: 'text' });
  }

  fetchCollection<T>(url: string) {
    return this.http.get<PlanningCenterCollectionResponse<T>>(
      url,
      this.httpOptions
    );
  }

  fetchSingle<T>(url: string) {
    return this.http.get<PlanningCenterSingleResponse<T>>(
      url,
      this.httpOptions
    );
  }

  postAndFetchCollection<T>(url: string, body: any) {
    return this.http.post<PlanningCenterCollectionResponse<T>>(
      url,
      body,
      this.httpOptions
    );
  }

  postAndFetchSingle<T>(url: string, body: any) {
    return this.http.post<PlanningCenterSingleResponse<T>>(
      url,
      body,
      this.httpOptions
    );
  }

  async fetchAvatarUrl(url: string) {
    try {
      const blob = await lastValueFrom(
        this.http.get(url, { ...this.httpOptions, responseType: 'blob' })
      );
      return URL.createObjectURL(blob);
    } catch {
      return 'https://loremflickr.com/160/160/kitten';
    }
  }
}
