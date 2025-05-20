import type { FC } from "react";

interface NavItem {
  label: string;
  href?: string;
}

interface Props {
  title: string;
  items: NavItem[];
}

const FooterNavigation: FC<Props> = ({ title, items }) => {
  return (
    <div className="w-1/2 sm:w-[30%]">
      <h3 className="text-xl font-bold text-gray-700">{title}</h3>
      <ul className="mt-7 text-base text-gray-650">
        {items.map((item, index) => (
          <li key={index} className="mb-[1.44rem] last:mb-0 xl:mb-6">
            {item.href ? (
              <a href={item.href}>{item.label}</a>
            ) : (
              <p>{item.label}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNavigation;
