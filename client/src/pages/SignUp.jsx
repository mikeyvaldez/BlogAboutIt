import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      {/* left */}
      <div className="">
        <Link to="/" className="whitespace-nowrap font-bold dark:text-white text-4xl">
          <span className="px-2 py-1 bg-green-400 rounded-lg text-white">
            Blog About It!
          </span>
        </Link>
      </div>

      {/* right */}
      <div className=""></div>
    </div>
  );
}
