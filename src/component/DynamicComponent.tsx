import React from 'react';

type CommonProps = {
  children: React.ReactNode;
  className?: string;
};

type LinkProps = CommonProps & {
  as: 'a';
  href: string;
};

type ButtonProps = CommonProps & {
  as: 'button';
  onClick: () => void;
};

type PolymorphicProps = LinkProps | ButtonProps;

export const DynamicComponent: React.FC<PolymorphicProps> = (props) => {
  if (props.as === 'a') {
    return (
      <a href={props.href} className={props.className}>
        {props.children}
      </a>
    );
  } else {
    return (
      <button onClick={props.onClick} className={props.className}>
        {props.children}
      </button>
    );
  }
};
