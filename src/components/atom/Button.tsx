import type {
  ComponentPropsWithoutRef,
  ElementType,
  FC,
  ReactNode,
} from "react";

import { cn } from "@/utils/common";

export interface ButtonProps<T extends ElementType> {
  as?: T;
  prefix?: ReactNode;
  suffix?: ReactNode;
  children: ReactNode;
  omitEventContent?: boolean;
  disabled?: boolean;
  className?: string;
}
export type ButtonComponent = typeof Button;

interface ContentProps {
  className?: string;
  omitEventContent?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  children: ReactNode;
}

const Content: FC<ContentProps> = ({
  children,
  prefix,
  suffix,
  className,
  omitEventContent = false,
}) => {
  return (
    <span
      className={cn(
        "relative flex w-full items-center justify-center px-4",
        className,
        { "pointer-events-none": omitEventContent }
      )}
    >
      {prefix && (
        <span className="absolute left-4 top-1/2 -translate-y-1/2">
          {prefix}
        </span>
      )}
      {children}
      {suffix && (
        <span className="absolute right-4 top-1/2 -translate-y-1/2">
          {suffix}
        </span>
      )}
    </span>
  );
};

function Button<T extends ElementType = "button">(
  props: ButtonProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) {
  const {
    as: Component = "button",
    prefix,
    suffix,
    className,
    omitEventContent,
    disabled,
    children,
    ...restProps
  } = props;

  const hasIcon = !!(prefix || suffix);
  const content = (
    <>
      {hasIcon ? (
        <Content
          omitEventContent={omitEventContent}
          className="h-full"
          prefix={prefix}
          suffix={suffix}
        >
          {children}
        </Content>
      ) : (
        <>{children}</>
      )}
    </>
  );

  return (
    <Component
      className={cn(
        "flex items-center justify-center rounded px-5 py-2.5 text-center",
        "bg-gray-800 text-white hover:bg-gray-800/[0.85]",
        "transition-all duration-200 ease-in-out",
        { "opacity-80 pointer-events-none": disabled },
        className
      )}
      {...restProps}
      disabled={disabled}
    >
      {content}
    </Component>
  );
}

export default Button;
