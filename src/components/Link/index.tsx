import * as React from 'react';

import * as S from './styles';

export type LinkProps = {
  /** to render a wrapper to the a tag */
  as?: React.ElementType<any>;
  href: string;
  label?: string;
  /** if you need special link description */
  ariaLabel?: string;
  className?: string;
  variant?: 'standalone' | 'inline';
};

export const Link = ({
  href,
  as,
  label,
  ariaLabel,
  className,
  variant = 'standalone',
}: LinkProps) => {
  const Component = as || React.Fragment;

  return (
    <Component href={href} passHref>
      {variant === 'standalone' ? (
        <S.Anchor
          as="a"
          className={className}
          aria-label={ariaLabel ? ariaLabel : label}
        >
          {label}
        </S.Anchor>
      ) : (
        <S.AnchorInline
          as="a"
          className={className}
          aria-label={ariaLabel ? ariaLabel : label}
        >
          {label}
        </S.AnchorInline>
      )}
    </Component>
  );
};
