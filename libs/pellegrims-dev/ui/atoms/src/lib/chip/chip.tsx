import { FunctionComponent } from 'react';

interface ChipProps {
  text: string;
}

export const Chip: FunctionComponent<ChipProps> = (props) => (
  <span className="inline-block py-1 px-2 rounded bg-primary-50 text-primary-600 text-xs font-medium tracking-widest">
    {props.text}
  </span>
);
