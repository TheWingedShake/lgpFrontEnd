import { Injectable } from '@angular/core';

import { Metric, AnalyticImplementation } from './analytics.interface';

@Injectable()
export class AnalyticsService {

  constructor(private implementation: AnalyticImplementation) { }

  record(metric: Metric): void {
    this.implementation.recordEvent(metric);
  }

}
