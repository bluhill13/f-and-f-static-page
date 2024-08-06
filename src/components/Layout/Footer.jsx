import { HashLink } from "react-router-hash-link";
import logo from "../../images/icons/logofnf.png";
export default function Footer() {
  return (
    <footer>
      <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">
          {/* 1st block */}
          <div className="col-span-12 lg:col-span-4"></div>
          {/* 2nd block */}
        </div>

        <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
            <h1 className=" text-white">
              <img
                width={130}
                className="footerimage "
                src={logo}
                alt="PNG Image"
                class="mx-auto"
              />
              <p className="text-white pt-6 pb-0">
                E-post: kundesenter@fightfitness.no
              </p>
              <p className="text-white pt-6 pb-7">Telefon: (+47) 950 36 724</p>
            </h1>
            <div className="footer-text-id text-sm text-gray-200 py-1">
              Copyright &copy; {new Date().getFullYear()}
              {"  "}
              <HashLink to="#" className="">
                Fight & Fitness AS
              </HashLink>
              . All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
