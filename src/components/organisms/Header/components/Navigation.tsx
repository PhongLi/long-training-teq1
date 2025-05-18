import type { FC } from "react";

import { NAVIGATION } from "@/constants/common";
import { cn } from "@/utils/common";

type NavItemProps = {
  href: string;
  children: string;
  active?: boolean;
};

const NavItem: FC<NavItemProps> = ({ href, children, active = false }) => {
  return (
    <li className="relative h-fit">
      <a
        href={href}
        className={cn(
          "group relative font-medium text-gray-500",
          "hover:font-bold hover:text-gray-800",
          "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-black",
          "after:w-0 after:transition-all hover:after:w-full",
          {
            "font-bold text-gray-800 after:w-full": active,
          }
        )}
      >
        <span
          className={cn(
            "inline-block whitespace-nowrap text-center uppercase",
            "before:invisible before:block before:h-0 before:overflow-hidden before:font-bold before:content-[attr(data-text)] group-hover:before:text-gray-800"
          )}
          data-text={children}
        >
          {children}
        </span>
      </a>
    </li>
  );
};

const Navigation: FC = () => {
  const isActive = (path: string) => path === "/";
  return (
    <nav>
      <ul className="flex items-center gap-x-8">
        {NAVIGATION.map((nav) => (
          <NavItem key={nav.path} href={nav.path} active={isActive(nav.path)}>
            {nav.label}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
