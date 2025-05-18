import type { FC } from "react";

import Logo from "@/assets/logo.svg?react";
import Button from "@/components/atom/Button";
import Navigation from "@/components/organisms/Header/components/Navigation";

const Header: FC = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-[1000] w-full">
      <div className="container mx-auto flex h-24 items-center justify-between px-4">
        <a href="/">
          <Logo className="h-auto w-56" />
        </a>
        <Navigation />
        <Button href={"/contact"} as={"a"} className="uppercase">
          Contact Us
        </Button>
      </div>
    </header>
  );
};
export default Header;
