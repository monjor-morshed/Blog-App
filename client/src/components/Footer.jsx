// import React from 'react'
// import { Link } from "react-router-dom";
import { Footer, FooterCopyright } from "flowbite-react";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
const FooterCompo = () => {
  return (
    <Footer container>
      {/* className="border border-t-8 border-teal-500" */}
      <div className="w-full max-w-7xl mx-auto">
        {/* <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lh sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Blog
              </span>
              App
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Code" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/monjor-morshed/Blog-App"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="">
              <Footer.Title title="Follow Me" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.linkedin.com/in/monjor-morshed/"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Footer.Link>
                <Footer.Link
                  href="https://github.com/monjor-morshed"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="">
              <Footer.Title title="Contact Me" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.linkedin.com/in/monjor-morshed/"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Footer.Link>
                <Footer.Link
                  href="https://www.facebook.com/monjurarnob.18/"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div> */}
        {/* <Footer.Divider /> */}
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright
            href="#"
            by="Blog-App. All rights reserved."
            year={new Date().getFullYear()}
          />

          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsLinkedin} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterCompo;
