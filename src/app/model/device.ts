export interface Device {
    id?: string;
    name?: string;
    deviceFamily?: string;
    osVersion?: string;
    platform?: string;
    upTime?: number;
    throughputAverage?: number,
    lastChecking?: Date;
    temperature?: any[];
}