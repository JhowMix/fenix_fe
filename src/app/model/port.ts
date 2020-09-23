import { Address } from './address';

export interface Port {
    name?: string;
    phyAddress?: string;
    throughput?: number;
    status?: string;
    addresses?: Address[];
}