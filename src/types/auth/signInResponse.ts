import type { AccountId } from './accountId';
import type { SessionId } from './sessionId';

export type SignInResponse = {
  sessionId: SessionId;
  accountId: AccountId;
  role: string;
};
