import Link from "next/link";
import React from "react";

import SignInButton from "./buttons/SignInButton";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="">
   
      <div className="p-10  ml-10 ">
        <p>&copy; 2023 Mustafa. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;