import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border justify-center items-center rounded-tl-3xl rounded-br-3xl px-2 text-center">
      <div className="flex-1 justify-center flex flex-col p-7">
        <h2 className="text-2xl mb-2 ">Want to start blogging? Create a profile!</h2>
        <Button className="rounded-tl-xl rounded-bl-none" color="blue">          
          <Link to="/sign-up">
              Click here to sign up
          </Link>
        </Button>
      </div>
    </div>
  );
}
