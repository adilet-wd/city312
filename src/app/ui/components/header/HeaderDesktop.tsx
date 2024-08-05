"use client";
import Link from "next/link";
import "./header.module.scss";
import Image from "next/image";
import logoImage from "@/assets/icons/logo-desktop.svg";
import catalogIcon from "@/assets/icons/catalog_burger.svg";
import searchIcon from "@/assets/icons/search_icon.svg";
import myProfileIcon from "@/assets/icons/myProfile_icon.svg";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";


export default function HeaderDesktop() {

    return (
        <>
            <header className="header header-desktop">
                <div className="header-top">
                    <div className="header-top-left">
                        <div className="header__logo"><Image src={logoImage} alt="City 312"></Image></div>
                        <Link href={"/"} className="header__catalog">
                            <div><Image src={catalogIcon} alt={""}></Image></div>
                            <div>Каталог</div>
                        </Link>
                    </div>
                    <div className="header-top-right">
                        <div className="header__search">
                            <input className="search__input" type="text" placeholder="Поиск" />
                            <button className="search__button"><Image src={searchIcon} alt={""}></Image></button>
                        </div> 
                        <Link href={"/profile"}className="header__user"><Image src={myProfileIcon} alt={""}></Image></Link>
                    </div>
                </div>
                <div className="header-bottom">
                    <nav className="header__navbar">
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
                            <div className="navbar__element navbar__question">Q & A</div>
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    )
}
