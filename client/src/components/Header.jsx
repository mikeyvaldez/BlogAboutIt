import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom"; // goes to page without refreshing page
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const path = useLocation().pathname;
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
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline">
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button gradientDuoTone="greenToBlue" outline>Sign In</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
