import Image from "next/image";
import Link from "next/link";
import logoImg from "/public/img/logo.png";

const ITEMS = ["about", "skills", "values", "future"];

const Header = () => {
  return (
    <header className="container">
      <div className="flex justify-between items-center">
        <Link href="/">
          <a>
            <Image src={logoImg} alt="ロゴ" width={240} height={120} placeholder="blur" />
          </a>
        </Link>
        <nav>
          <ul className="flex text-text-green">
            {ITEMS.map((item) => {
              return (
                <li key={item} className="mr-4 last:mr-0">
                  <a href={`#${item}`} className="uppercase">{item}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header
