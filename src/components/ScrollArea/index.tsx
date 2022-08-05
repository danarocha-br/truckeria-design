import { CSS } from '@stitches/react';
import React from 'react';

import * as S from './styles';
import { config } from '../../stitches.config';

export type ScrollAreaProps = {
  children: React.ReactNode;
  css?: CSS<typeof config>;
};

export const ScrollArea = ({ children, css }: ScrollAreaProps) => (
  <S.ScrollAreaRoot>
    <S.ScrollAreaViewport css={css}>{children}</S.ScrollAreaViewport>

    <S.Scrollbar orientation="vertical">
      <S.ScrollAreaThumb />
    </S.Scrollbar>
    <S.Scrollbar orientation="horizontal">
      <S.ScrollAreaThumb />
    </S.Scrollbar>
    <S.ScrollAreaCorner />
  </S.ScrollAreaRoot>
);
