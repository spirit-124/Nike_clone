import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
// import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <div className="">
      <header className="padding-x py-8  absolute z-10 w-full">
        <nav className="max-container flex items-center justify-between">
          <a href="/">
            <img src={headerLogo} alt="Logo" width={130} height={29} />
          </a>
          <ul className="flex flex-1 justify-center items-center max-lg:hidden gap-16 ">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg  text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden">
            <img src={hamburger} alt="Menu" height={25} width={25} />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
