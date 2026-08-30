import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "light";
type ButtonSize = "default" | "large";

const baseClassName =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-5 font-semibold leading-none transition-colors duration-200 motion-reduce:transition-none disabled:pointer-events-none disabled:opacity-50";

const variantClassNames: Record<ButtonVariant, string> = {
  primary:
    "border-red bg-red text-white hover:border-navy hover:bg-navy focus-visible:outline-digital-blue",
  secondary:
    "border-navy bg-transparent text-navy hover:bg-navy hover:text-white focus-visible:outline-digital-blue",
  light:
    "border-white bg-white text-navy hover:border-ice-blue hover:bg-ice-blue focus-visible:outline-white",
};

const sizeClassNames: Record<ButtonSize, string> = {
  default: "text-sm",
  large: "min-h-12 px-6 text-base",
};

function classes(variant: ButtonVariant, size: ButtonSize, className?: string) {
  return [baseClassName, variantClassNames[variant], sizeClassNames[size], className]
    .filter(Boolean)
    .join(" ");
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  className,
  size = "default",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return <button className={classes(variant, size, className)} type={type} {...props} />;
}

export interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function ButtonLink({
  className,
  size = "default",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return <a className={classes(variant, size, className)} {...props} />;
}
