export interface Metric{
    eventName: string;
    scope: string;
}
export interface AnalyticImplementation{
    recordEvent(metric: Metric): void;
}
