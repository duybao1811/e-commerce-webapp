import React from "react";
import Image from "next/image";
import TomCruiseImg from "@/assets/images/tom-cruise.png";
import Link from "next/link";
import { TwitterIcon } from "@/assets/icons";
import { CiTwitter, CiInstagram, CiLinkedin } from "react-icons/ci";

const SponsorCard = () => {
  return (
    <div>
      <Image
        src={TomCruiseImg.src}
        width={370}
        height={430}
        alt={"Tom Cruise Avatar"}
        className={"mb-8"}
      />
      <p className={"text-3xl font-medium mb-2"}>Tom Cruise</p>
      <p className={"mb-4"}>Founder & Chairman</p>
      <div className={"flex items-center gap-4"}>
        <Link href={"#"}>
          <CiTwitter size={24} />
        </Link>
        <Link href={"#"}>
          <CiInstagram size={24} />
        </Link>
        <Link href={"#"}>
          <CiLinkedin size={24} />
        </Link>
      </div>
    </div>
  );
};

export default SponsorCard;
