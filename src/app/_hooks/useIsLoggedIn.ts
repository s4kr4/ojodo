import { useSession } from 'next-auth/react';

/**
 * ログイン状態を返す
 * @returns ログイン状態
 */
export function useIsLoggedIn() {
  const { data: session } = useSession();
  return !!session?.user;
}
