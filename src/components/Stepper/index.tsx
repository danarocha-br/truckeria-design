import React from 'react';

import * as S from './styles';

type StepItem = {
  label: string;
  isActive?: boolean;
  isCompleted?: boolean;
};

export type StepperProps = {
  steps: StepItem[];
};

export const Stepper = ({ steps }: StepperProps) => (
  <S.Container>
    <S.List>
      {steps &&
        steps.map((item: StepItem, index: number) => (
          <S.Item
            key={index}
            isActive={item.isActive}
            isCompleted={item.isCompleted}
            aria-label={item.label}
          >
            <span> {item.label}</span>
          </S.Item>
        ))}
    </S.List>
  </S.Container>
);
