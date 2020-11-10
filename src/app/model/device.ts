import {Port} from './port';

export interface Device {
    engineId?: string;
    name?: string;
    deviceFamily?: string;
    osVersion?: string;
    platform?: string;
    upTime?: number;
    status?: string;
    throughputAverage?: number;
    lastChecking?: Date;
    temperature?: any[];
    ports: Port[];
}
