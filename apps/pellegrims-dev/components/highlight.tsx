import React from 'react';
import { RoughNotation } from 'react-rough-notation';

export interface HighlightProps {
  color: string;
  children: string;
}

export const Highlight = ({ color, children }: HighlightProps) => {
  const animationDuration = Math.floor(30 * children.length);
  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      padding={[0, 2]}
      animationDuration={animationDuration}
      color={color}
    >
      {children}
    </RoughNotation>
  );
};
