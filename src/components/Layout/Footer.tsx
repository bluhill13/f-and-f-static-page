import logo from "../../images/icons/logoff.png";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-white border-t border-b py-30">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">
          {/* 1st block */}
          <div className="col-span-12 lg:col-span-4"></div>
          {/* 2nd block */}
        </div>

        <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
            <h1 className=" text-black">
              <img width={130} className="mx-auto" src={logo} alt="PNG Image" />
              <div className="flex flex-col">
                <Link
                  className="text-black pt-6 pb-0"
                  to="mailto:kundesenter@fightfitness.no"
                >
                  E-post: kundesenter@fightfitness.no
                </Link>
                <Link
                  className="text-black pt-6 pb-7 break-keep"
                  to="tel:+4795036724"
                >
                  Telefon: (+47) 950 36 724
                </Link>
              </div>
            </h1>
            <div className="footer-text-id text-sm text-gray-200 py-1">
              Copyright &copy; {new Date().getFullYear()}
              {"  "}
              <Link to="#" className="">
                Fight & Fitness AS
              </Link>
              . All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
