import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import { Flex } from 'truckeria-design';

export type FormControlProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<any>;
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
