import { Network } from "./network";

export interface Route  {
    nextHop?: string;
    destination: Network[];
}