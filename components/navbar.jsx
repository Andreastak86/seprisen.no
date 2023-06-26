import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="text-xl font-bold tracking-tight">
          <Link href="/">
            Seprisen.no
          </Link>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
