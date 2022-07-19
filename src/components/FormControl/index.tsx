import React from 'react';
import { Flex } from '../Flex';

export type FormControlProps = {
  children: React.ReactNode;
  onSubmit: (data: any, event?: React.BaseSyntheticEvent) => any | Promise<any>
};

export const FormControl = ({
  children,
  onSubmit,
  ...props
}: FormControlProps) => {
  return (
    <Flex
      as="form"
      direction="column"
      gap={6}
      onSubmit={onSubmit}
      fullWidth
      {...props}
    >
      {children}
    </Flex>
  );
};
