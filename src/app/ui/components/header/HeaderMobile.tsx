"use client";
import Link from "next/link";
import "./Header.module.scss";
import Image from "next/image";
import logoImage from "@/assets/icons/logo-mobile.svg";
import catalogIcon from "@/assets/icons/catalog_burger.svg";
import searchIcon from "@/assets/icons/search_icon.svg";
import myProfileIcon from "@/assets/icons/myProfile_icon.svg";
import { useState } from "react";


export default function HeaderMobile() {
    
    const [activeNav, setActiveNav] = useState(0);
    
    const handleClick = (index: number) => {
        setActiveNav(index);
    };

    return (
        <>
            <header className="header header-mobile">
                <div className="header-top">
                    <Link href={"/"} className="header__catalog">
                        <div><Image src={catalogIcon} alt={""}></Image></div>
                    </Link>
                    <div className="header__logo"><Image src={logoImage} alt="City 312"></Image></div>
                    <Link href={"/profile"}className="header__user"><Image src={myProfileIcon} alt={""}></Image></Link>      
                </div>
                <div className="header-bottom">
                    {/* <nav className="header__navbar">
                        <Link href="/">
                            <div className="navbar__element">Афиши</div>
                        </Link>
                        <Link href="/">
                            <div className="navbar__element">Акции</div>
                        </Link>
                        <Link href="/">
                            <div className="navbar__element">Куда сходить</div>
                        </Link>
                        <Link href="/">
                            <div className="navbar__element">Сертификаты</div>
                        </Link>
                        <Link href="/">
                            <div className="navbar__element">Промокоды</div>
                        </Link>
                        <Link href="/">
                            <div className="navbar__element">Для бизнеса</div>
                        </Link>
                        <Link href="/">
                            <div className="navbar__element navbar__question active">Q & A</div>
                        </Link>
                    </nav> */}
                    <nav className="header__navbar">
                    {['Афиши', 'Акции', 'Куда сходить', 'Сертификаты', 'Промокоды', 'Для бизнеса', 'Q & A'].map((item, index) => (
                        <Link href="/" key={index}>
                        <div
                            className={`navbar__element ${activeNav === index ? 'active' : ''}`}
                            onClick={() => handleClick(index)}>
                            {item}
                        </div>
                        </Link>
                    ))}
                    </nav>
                    <div className="header__search">
                        <input className="search__input" type="text" placeholder="Поиск" />
                        <button className="search__button"><Image src={searchIcon} alt={""}></Image></button>
                    </div>
                </div>
            </header>
        </>
    )
}
