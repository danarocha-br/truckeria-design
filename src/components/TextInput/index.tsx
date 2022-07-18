import * as React from 'react';
import { InputHTMLAttributes, useCallback, useState, forwardRef } from 'react';

import { Flex } from '../Flex';
import { iconPath, Icon } from '../Icon';

import * as S from './styles';
import { Spinner } from '../Spinner';
import { FormError } from '../FormError';

export type TextInputProps = {
  name: string;
  defaultValue?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  loading?: boolean;
  readOnly?: boolean;
  hasValue?: boolean;
  icon?: keyof typeof iconPath;
  errors?: any | undefined;
} & InputHTMLAttributes<HTMLInputElement>;

type Ref = HTMLInputElement | null;

export const TextInput = forwardRef<Ref, TextInputProps>(
  (
    {
      id,
      name,
      icon,
      defaultValue,
      label,
      placeholder,
      disabled = false,
      loading = false,
      readOnly = false,
      hasValue = false,
      errors,
      ...props
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref
  ) => {
    /**
     * Get UI States
     */
    const [hasFocus, setFocus] = useState(false);

    const handleInputFocus = useCallback(() => {
      setFocus(true);
    }, [setFocus]);

    const handleInputBlur = useCallback(() => {
      if (!hasValue) {
        setFocus(false);
      }
    }, [setFocus, hasValue]);

    const areErrorsEmpty = Object.keys(errors).length === 0;

    return (
      <Flex direction="column" fullWidth>
        <S.Container
          hasFocus={hasFocus}
          hasError={!!errors && !areErrorsEmpty ? true : false}
          isDisabled={disabled}
          isLoading={loading}
          readOnly={readOnly}
        >
          <S.Input
            ref={ref}
            id={name}
            aria-invalid={!!errors && !areErrorsEmpty ? 'true' : 'false'}
            placeholder={placeholder}
            hasPlaceholder={!!placeholder}
            hasFocus={hasFocus}
            hasError={!!errors && !areErrorsEmpty ? true : false}
            name={name}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            disabled={disabled || loading}
            readOnly={readOnly}
            {...props}
          />

          <S.Label
            htmlFor={id}
            isDisabled={disabled || loading}
            hasValue={hasValue}
            hasPlaceholder={!!placeholder}
          >
            {!!icon && <Icon className="c-input__icon" name={icon} />}
            <span className="c-input__label">{label}</span>

            {!!errors && !areErrorsEmpty && (
              <Icon name="alert" className="c-input__error-icon" />
            )}

            {loading && (
              <i>
                <Spinner size="xs" />
              </i>
            )}
          </S.Label>
        </S.Container>

        {!!errors && !areErrorsEmpty ? (
          <FormError message={errors.message} />
        ) : null}
      </Flex>
    );
  }
);
