import { FunctionComponent } from 'react';
import { Chip } from '@pellegrims/pellegrims-dev/ui/atoms';

interface TagsProps {
  tags: string[];
}

export const Tags: FunctionComponent<TagsProps> = (props) => (
  <div className="uppercase flex flex-wrap gap-1">
    {props.tags
      .map((tag) => `#${tag}`.toUpperCase())
      .map((tag) => (
        <Chip key={tag} text={tag} />
      ))}
  </div>
);
