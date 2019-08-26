/* eslint-disable @typescript-eslint/no-explicit-any */
import { getUser } from './auth.client';

async function bootstrapAppData(): any {
  const data = await getUser();
  if (!data) {
    return { user: null };
  }
  const { user } = data.data;
  return {
    user,
  };
}

export { bootstrapAppData };
