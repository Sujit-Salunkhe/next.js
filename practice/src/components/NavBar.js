import Link from "next/link"

const NavBar = () => {
  return (
    <nav className="w-full h-14 bg-indigo-400 flex justify-between items-center px-4 md:px-6">
      <div><p className="text-2xl text-indigo-700">Sujit Skills</p></div>
      <ul className="hidden md:flex  font-semibold">
        <li className="m-[10px] cursor-pointer">Home</li>
        <li className="m-[10px] cursor-pointer">About</li>
        <li className="m-[10px] cursor-pointer">Contact</li>
      </ul>
      <div className="hidden md:block px-2 py-2 bg-indigo-700 text-white rounded font-bold cursor-pointer">
        Login/SignUP
      </div>
      <div className="md:hidden">
        <Link className="" href='#'>
        &#8801;
        </Link>   
      </div>
    </nav>
  )
}

export default NavBar
