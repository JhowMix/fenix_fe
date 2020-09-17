import { Address } from './address';

export class Port {
    name?: string;
    phyAddress?: string;
    throughput?: number;
    status?: string;
    addresses?: Address[];
}