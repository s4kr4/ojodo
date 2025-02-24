import HeaderNavigations from './HeaderNavigations';

/**
 * ヘッダー
 */
export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">往生堂</h1>
        <HeaderNavigations />
      </div>
    </header>
  );
}
