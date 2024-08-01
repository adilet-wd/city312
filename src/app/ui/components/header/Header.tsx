import Link from "next/link";
import "./header.module.scss";

export default function Header() {
  return (
    <>
        <header>
            <div className="header-top">
                <div className="header__logo"></div>
                <div className="header__catalog">Каталог</div>
                <div className="header__search">
                    <input type="text" placeholder="Поиск" />
                    <button></button>
                </div>
                <div className="header__user"></div>
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
                    <div className="navbar__element">
                        <Link href="/">Q & A</Link>
                    </div>
                </nav>
            </div>
        </header>
    </>
  )
}
