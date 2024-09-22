import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from 'react';

type CommonProps = {
  className?: string;
};

type LinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  as: 'a';
};

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  as: 'button';
};

type PolymorphicOverloadProps = LinkProps | ButtonProps;

export function DynamicComponent(props: PropsWithChildren<LinkProps>): JSX.Element;
export function DynamicComponent(props: PropsWithChildren<ButtonProps>): JSX.Element;
export function DynamicComponent({ as, className, children, ...restProps }: PropsWithChildren<PolymorphicOverloadProps>) {
  if (as === 'a' && 'href' in restProps) {
    return (
      <a className={className} {...restProps}>
        {children}
      </a>
    );
  } else if (as === 'button' && 'onClick' in restProps) {
    return (
      <button className={className} {...restProps}>
        {children}
      </button>
    );
  } else return null
}
