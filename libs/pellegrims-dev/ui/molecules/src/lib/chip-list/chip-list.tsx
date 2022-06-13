import { FunctionComponent } from 'react';
import { Chip } from '@pellegrims/pellegrims-dev/ui/atoms';

interface ChipListProps {
  tags: string[];
}

export const ChipList: FunctionComponent<ChipListProps> = (props) => (
  <div className="uppercase flex flex-wrap gap-1">
    {props.tags.map((tag) => (
      <Chip key={tag} text={tag} />
    ))}
  </div>
);
