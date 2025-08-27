import { test as base } from '@playwright/test';
import * as userData from '../config/testData/registered-user.json';

type AuthUser = {
  email: string;
  password: string;
};

export const test = base.extend<{
  registeredUser: AuthUser;
}>({
  registeredUser: async ({ }, use) => {
    await use(userData.registeredUser);
  }
});