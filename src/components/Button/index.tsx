import React from 'react';

import { Spinner } from '../Spinner';
import { Icon, iconPath } from '../Icon';
import * as S from './styles';

export type ButtonProps = {
  label?: string;
  ariaLabel?: string;
  icon?: keyof typeof iconPath;
  variant?: 'primary' | 'flat' | 'success' | 'icon';
  size?: 'sm' | 'flat' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

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
    {!!icon && <Icon name={icon} color="current" />}
    {variant !== 'icon' && label}
    {loading && variant !== 'icon' && (
      <S.LoadingWrapper>
        <Spinner size="xs" color="onInteractive" />
      </S.LoadingWrapper>
    )}
  </S.Container>
);
