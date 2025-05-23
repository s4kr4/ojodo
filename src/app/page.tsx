import Link from 'next/link';
import { auth } from '~/server/auth';
import { HydrateClient } from '~/trpc/server';

export default async function Home() {
  const session = await auth();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#3f51b5] to-[#2196f3] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-center sm:text-[5rem]">
            原神 <span className="text-[hsl(45,100%,70%)]">育成管理</span>
          </h1>

          <div className="flex flex-col items-center gap-6">
            <p className="text-center text-2xl">
              {session?.user ? (
                <span>ようこそ、{session.user.name}さん</span>
              ) : (
                <span>キャラクターの育成状況を管理しましょう</span>
              )}
            </p>

            <Link
              href={session ? '/api/auth/signout' : '/api/auth/signin'}
              className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
            >
              {session ? 'ログアウト' : 'ログイン'}
            </Link>

            {session?.user && (
              <Link
                href="/characters"
                className="rounded-full bg-[#ff9800]/80 px-10 py-3 font-semibold no-underline transition hover:bg-[#ff9800]"
              >
                キャラクター一覧へ
              </Link>
            )}
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
