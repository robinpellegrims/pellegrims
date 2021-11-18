import React, { FunctionComponent } from 'react';
import { RoughNotation } from 'react-rough-notation';

interface HighlightProps {
  color: string;
  children: string;
}

export const Highlight: FunctionComponent<HighlightProps> = ({
  color,
  children,
}) => {
  const animationDurationPerChar = 30;
  const animationDuration = Math.floor(
    animationDurationPerChar * children.length
  );
  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      animationDuration={animationDuration}
      color={color}
    >
      {children}
    </RoughNotation>
  );
};
