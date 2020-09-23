import { Address } from "cluster";

export interface Network {
    nextHop?: string;
    address?: Address;
}