import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom"; // goes to page without refreshing page
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  return (
    // navbar component from flowbite
    <Navbar className="border-b-2">      
      {/* Link component from flowbite*/}
      <Link to="/" className="self-center text-sm sm:text-xl font-bold">
        <span className="px-2 py-1 bg-green-400 rounded-lg text-white">
          Blog About It!
        </span>
      </Link>
      <form>
        {/* textinput component from flowbite*/}
        <TextInput   
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline"
        /> 
      </form>

      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="">
        <Button className="w-12 h-10 hidden sm:inline">
            <FaMoon />
        </Button>
      </div>
    </Navbar>
  );
}
