'use client';

import Link from 'next/link';
import { useIsLoggedIn } from '~/app/_hooks/useIsLoggedIn';

/**
 * ヘッダーのナビゲーション
 */
export default function HeaderNavigations() {
  const isLoggedIn = useIsLoggedIn();

  return (
    <nav className="grid grid-flow-col gap-4">
      <Link href="/characters">キャラクター一覧</Link>
      {isLoggedIn && (
        <>
          |<Link href="/mypage">マイページ</Link>
        </>
      )}
    </nav>
  );
}
