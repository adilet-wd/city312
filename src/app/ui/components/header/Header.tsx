import Link from "next/link";
import "./header.module.scss";
import Image from "next/image";
import logoImage from "@/assets/icons/logo.svg";
import catalogIcon from "@/assets/icons/catalog_burger.svg";
import searchIcon from "@/assets/icons/search_icon.svg";
import myProfileIcon from "@/assets/icons/myProfile_icon.svg";

export default function Header() {
    
  return (
    <>
        <header className="header">
            <div className="header-top">
                <div className="header-top-left">
                    <div className="header__logo"><Image src={logoImage} alt="City 312"></Image></div>
                    <div className="header__catalog">
                        <div><Image src={catalogIcon} alt={""}></Image></div>
                        <div>Каталог</div>
                    </div>
                </div>
                <div className="header-top-right">
                    <div className="header__search">
                        <input className="search__input" type="text" placeholder="Поиск" />
                        <button className="search__button"><Image src={searchIcon} alt={""}></Image></button>
                    </div>
                    <div className="header__user"><Image src={myProfileIcon} alt={""}></Image></div>
                </div>
            </div>
            <div className="header-bottom">
                <nav className="header__navbar">
                    <div className="navbar__element">
                        <Link href="/">Афиши</Link>
                    </div>
                    <div className="navbar__element">
                        <Link href="/">Акции</Link>
                    </div>
                    <div className="navbar__element">
                        <Link href="/">Куда сходить</Link>
                    </div>
                    <div className="navbar__element">
                        <Link href="/">Сертификаты</Link>
                    </div>
                    <div className="navbar__element">
                        <Link href="/">Промокоды</Link>
                    </div>
                    <div className="navbar__element">
                        <Link href="/">Для бизнеса</Link>
                    </div>
                    <div className="navbar__element navbar__question">
                        <Link href="/">Q & A</Link>
                    </div>
                </nav>
            </div>
        </header>
    </>
  )
}
