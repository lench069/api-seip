import { Policy } from './Policy';

export interface PolicyRepository {
  findUnprocessedPolicies(): Promise<Policy[]>;
}
