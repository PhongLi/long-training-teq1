import type { FC } from "react";

import EmailIcon from "@/assets/email.svg";
import LocationIcon from "@/assets/location.svg";
import Logo from "@/assets/logo.svg?react";
import PhoneIcon from "@/assets/phone.svg";
import { cn } from "@/utils/common";

import FooterNavigation from "./components/FooterNavigation";

interface Props {
  className?: string;
}

const Footer: FC<Props> = ({ className = "" }) => {
  const companyLinks = [
    { label: "About", href: "/about" },
    { label: "Career", href: "/career" },
    { label: "News", href: "/news" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Cookie Preferences", href: "/cookie-preferences" },
  ];

  const serviceLinks = [
    { label: "Web applications", href: "/services/web" },
    { label: "Mobile applications", href: "/services/mobile" },
    { label: "API & Backend", href: "/services/api" },
    { label: "Quality assurance", href: "/services/qa" },
  ];

  const galleryLinks = [
    { label: "Company trip", href: "/gallery/company-trip" },
    { label: "Project", href: "/gallery/project" },
    { label: "Office", href: "/gallery/office" },
    { label: "Workshop", href: "/gallery/workshop" },
  ];

  return (
    <footer className={cn("w-full bg-gray-50", className)}>
      <div className="container mx-auto items-center justify-between px-6">
        <div className="w-full pb-12 pt-[4.13rem]">
          <div className="flex w-full flex-wrap justify-between">
            {/* Left side - Logo and Contact */}
            <div className="flex w-full flex-col space-y-4 md:w-1/3">
              <a href="/" className="block w-[15.625rem]">
                <Logo className="h-auto w-full" />
              </a>
              <div className="flex flex-col space-y-2">
                <a
                  href="tel:+84335333588"
                  className="flex items-center gap-x-2 text-gray-650"
                >
                  <img src={PhoneIcon} alt="Phone" className="size-6" />
                  <span>(+84) 335 3335 88</span>
                </a>
                <a
                  href="mailto:contact@teqnological.asia"
                  className="flex items-center gap-x-2 text-gray-650"
                >
                  <img src={EmailIcon} alt="Email" className="size-6" />
                  <span>contact@teqnological.asia</span>
                </a>
                <div className="flex items-start gap-x-2 text-gray-650">
                  <img
                    src={LocationIcon}
                    alt="Address"
                    className="mt-1 size-6"
                  />
                  <span>
                    No. 301, Floor 3, Block B, Waseco Plaza,
                    <br />
                    10 Pho Quang, Ward 2, Tan Binh,
                    <br />
                    Ho Chi Minh city, Vietnam
                  </span>
                </div>
              </div>
            </div>

            {/* Right side - Navigation */}
            <div className="mt-8 flex w-full flex-wrap gap-y-10 md:mt-0 md:w-2/3 md:justify-end">
              <FooterNavigation title="Company" items={companyLinks} />
              <FooterNavigation title="Services" items={serviceLinks} />
              <FooterNavigation title="Gallery" items={galleryLinks} />
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-4 w-full">
            <p className="text-base text-gray-650">
              © 2023 Teqnological Asia, Inc
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
