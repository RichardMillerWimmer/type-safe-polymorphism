import { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from 'react';

type CommonProps = {
  className?: string;
};

type LinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function DynamicComponent(props: PropsWithChildren<LinkProps>): JSX.Element;
export function DynamicComponent(props: PropsWithChildren<ButtonProps>): JSX.Element;
export function DynamicComponent({ className, children, ...restProps }: PropsWithChildren<LinkProps | ButtonProps>) {
  if ('href' in restProps) {
    return (
      <a className={className} {...restProps}>
        {children}
      </a>
    );
  } else if ('onClick' in restProps) {
    const buttonProps = restProps as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button className={className} {...buttonProps}>
        {children}
      </button>
    );
  } else return null
}
