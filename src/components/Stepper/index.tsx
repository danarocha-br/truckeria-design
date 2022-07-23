import React from 'react';

import * as S from './styles';

export type StepperItemProps = {
  label: string;
  isActive?: boolean;
  isCompleted?: boolean;
};

export type StepperProps = {
  steps: StepperItemProps[];
  activeIndex?: number;
};

export const Stepper = ({ steps, activeIndex }: StepperProps) => (
  <S.Container>
    <S.List>
      {steps &&
        steps.map((item: StepperItemProps, index: number) => (
          <S.Item
            key={index}
            isActive={item.isActive || (activeIndex && activeIndex === index)}
            isCompleted={
              item.isCompleted || (activeIndex && activeIndex > index)
            }
            aria-label={item.label}
          >
            <span> {item.label}</span>
          </S.Item>
        ))}
    </S.List>
  </S.Container>
);
