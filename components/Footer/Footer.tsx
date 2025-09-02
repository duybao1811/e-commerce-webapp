import React from "react";
import {
  AppStoreIcon,
  FacebookIcon,
  GooglePlayIcon,
  InstagramIcon,
  LinkedInIcon,
  QrCodeFooter,
  TwitterIcon,
} from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import FooterInputSend from "@/components/Footer/FooterInputSend";

const Footer = () => {
  const titleClass = "text-xl font-medium";
  return (
    <footer className={"bg-button text-text"}>
      <div className={"py-20 container-custom grid grid-cols-5 gap-22"}>
        <div>
          <div className={"flex flex-col gap-6 mb-4"}>
            <p className={"text-2xl font-bold"}>Exclusive</p>
            <p className={"text-xl font-medium"}>Subscribe</p>
            <p>Get 10% off your first order</p>
          </div>
          <FooterInputSend />
        </div>
        <div className={"flex flex-col gap-6"}>
          <p className={titleClass}>Support</p>
          <div className={"flex flex-col gap-4"}>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
        </div>
        <div className={"flex flex-col gap-6"}>
          <p className={titleClass}>Account</p>
          <div className={"flex flex-col gap-4"}>
            <Link href={"/"}>My Account</Link>
            <Link href={"/"}>Login / Register</Link>
            <Link href={"/"}>Cart</Link>
            <Link href={"/"}>Wishlist</Link>
            <Link href={"/"}>Shop</Link>
          </div>
        </div>
        <div className={"flex flex-col gap-6"}>
          <p className={titleClass}>Quick Link</p>
          <div className={"flex flex-col gap-4"}>
            <Link href={"/"}>Privacy Policy</Link>
            <Link href={"/"}>Terms Of Use</Link>
            <Link href={"/"}>FAQ</Link>
            <Link href={"/"}>Contact</Link>
          </div>
        </div>
        <div className={"flex flex-col gap-6"}>
          <p className={titleClass}>Download App</p>
          <div>
            <p className={"opacity-70 text-xs font-medium mb-2.5"}>
              Save $3 with App New User Only
            </p>
            <div className={"flex items-center gap-2"}>
              <Image src={QrCodeFooter} alt={"qr code"} width={80} height={80} />
              <div className={"flex flex-col gap-2"}>
                <Image src={GooglePlayIcon} alt={"google-play-icon"} width={104} height={30} />
                <Image src={AppStoreIcon} alt={"google-play-icon"} width={104} height={30} />
              </div>
            </div>
          </div>
          <div className={"flex items-center gap-6"}>
            <Image src={FacebookIcon} alt={"facebook-icon"} width={24} height={24} />
            <Image src={TwitterIcon} alt={"twitter-icon"} width={24} height={24} />
            <Image src={InstagramIcon} alt={"instagram-icon"} width={24} height={24} />
            <Image src={LinkedInIcon} alt={"linkedin-icon"} width={24} height={24} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
