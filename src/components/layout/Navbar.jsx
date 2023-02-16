function Navbar() {
  return (
    <nav className="flex justify-between p-[2rem] items-center mb-[2rem]">
      <div className="flex gap-[4rem] items-center">
        <p className="text-2xl text-gray-800 font-bold"> Estary</p>
        <ul className="flex gap-4 items-center text-gray-600">
          <li className="px-2 py-1 hover:bg-purple-100 hover:text-[#6f60f2] font-medium">
            <a href="/">Rent</a>
          </li>
          <li className="px-2 py-1 hover:bg-purple-100 hover:text-[#6f60f2] font-medium">
            <a href="/">Buy</a>
          </li>
          <li className="px-2 py-1 hover:bg-purple-100 hover:text-[#6f60f2] font-medium">
            <a href="/">Sell</a>
          </li>
          <li className="px-2 py-1 hover:bg-purple-100 hover:text-[#6f60f2] font-medium">
            <a href="/">Manage Property</a>
          </li>
          <li className="px-2 py-1 hover:bg-purple-100 hover:text-[#6f60f2] font-medium">
            <a href="/">Resources</a>
          </li>
        </ul>
      </div>
      <div className="flex gap-3 items-center font-medium">
        <a
          className="border border-[#6f60f2] rounded-md px-3 py-1 text-[#6f60f2]"
          href="/"
        >
          Login
        </a>
        <a className="bg-[#6f60f2] px-3 py-1 rounded-md text-white" href="/">
          Signup
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
