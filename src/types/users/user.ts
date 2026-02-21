import type { Address } from './address';

export type User = {
  id: string;
  accountId: string;
  email: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  address: Address;
  pointsCollected: number;
};
