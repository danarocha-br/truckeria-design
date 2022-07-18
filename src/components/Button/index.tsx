import { VariantProps } from '@stitches/react';
import React from 'react';
import { Icon, iconPath } from '../Icon';

import * as S from './styles';

export type ButtonProps = {
  label?: string;
  ariaLabel?: string;
  icon?: keyof typeof iconPath;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  Omit<VariantProps<typeof S.Container>, 'hasIcon'>;

export const Button = ({
  label,
  ariaLabel,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled = false,
  icon,
  onClick,
  ...props
}: ButtonProps) => (
  <S.Container
    aria-label={ariaLabel ? ariaLabel : label}
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon && variant !== 'icon'}
    variant={variant}
    loading={loading}
    disabled={disabled || loading}
    onClick={onClick}
    {...props}
  >
    {!!icon && <Icon name={icon} color='current' />}
    {variant !== 'icon' && label}
    {loading && variant !== 'icon' && '...'}
  </S.Container>
);
