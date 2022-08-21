import { FunctionComponent } from 'react';

interface ChipProps {
  text: string;
}

export const Chip: FunctionComponent<ChipProps> = (props) => (
  <span className="bg-primary-50 text-primary-600 inline-block rounded py-1 px-2 text-xs font-medium tracking-widest">
    {props.text}
  </span>
);
