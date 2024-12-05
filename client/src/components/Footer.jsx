import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function FooterComponent() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap font-bold dark:text-white text-lg sm: text-xl"
            >
              <span className="px-2 py-1 bg-green-400 rounded-lg text-white">
                Blog About It!
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Owner" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="www.<myportfolio website url>.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Michael Valdez
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Michael&apos;s Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/mikeyvaldez"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href="https://www.linkedin.com/in/michael-valdez-a29179260/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link
                  href="https://www.linkedin.com/in/michael-valdez-a29179260/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Blog About It!"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">                        
            <Footer.Icon href="https://github.com/mikeyvaldez" icon={BsGithub} />
            <Footer.Icon href="https://www.linkedin.com/in/michael-valdez-a29179260/" icon={BsLinkedin} />
            
          </div>
        </div>
      </div>
    </Footer>
  );
}
