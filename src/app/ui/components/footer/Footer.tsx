import Link from "next/link";
import Image from "next/image";
import "./Footer.module.scss";
import logo from "@/assets/icons/footer_logo.svg";
import phoneImg from "@/assets/icons/phone.svg";
import addressImg from "@/assets/icons/address.svg";
import instagramLogo from "@/assets/icons/instagram.svg";
import facebookLogo from "@/assets/icons/facebook.svg";
import telegramLogo from "@/assets/icons/telegram.svg"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer__logo">
            <Image src={logo} alt="City 312"></Image>
        </div>
        <div className="footer__column">
            <Link href="#">О Компании</Link>
            <Link href="#">Акции</Link>
            <Link href="#">Скидки</Link>
            <Link href="#">Партнеры</Link>
        </div>
        <div className="footer__column">
            <Link href="#">Сотрудничество</Link>
            <Link href="#">Тех.Поддержка</Link>
            <Link href="#">Вопросы/Ответ</Link>
            <Link href="#">Условия использования</Link>
        </div>
        <div className="footer__column footer__contacts">
            <div className="footer__subtitle"><Image src={phoneImg} alt=""></Image>Контакты</div>
            <a href="#">+996 (505) 031222</a>
            <a href="#">+996 (505) 031222</a>
            <div className="footer__subtitle"><Image src={addressImg} alt=""></Image>Адрес</div>
            <div>Ул. Киевская 77</div>
        </div>
        <div className="footer__column socials">
            <div className="socials__subtitle">Социальные сети</div>
            <div className="socials__links">
                <a href="#"><Image src={instagramLogo} alt="#"></Image></a>
                <a href="#"><Image src={telegramLogo} alt="#"></Image></a>
                <a href="#"><Image src={facebookLogo} alt="#"></Image></a>
            </div>
            <div className="socials__subtitle">Pay Partner</div>
            <div className="socials__links">
                <a href="#"><Image src={instagramLogo} alt="#"></Image></a>
                <a href="#"><Image src={telegramLogo} alt="#"></Image></a>
                <a href="#"><Image src={facebookLogo} alt="#"></Image></a>
            </div>
        </div>
        <div className="footer__column buttons">
                <Link href="" className="footer__button login">Вход</Link>
                <Link href="" className="footer__button registration">Регистрация</Link>
            </div>
      </div>
    </footer>
  )
}
