import { FunctionComponent } from 'react';
import { IconButton } from '../icon-button/icon-button';
import { Icon } from '../icon/icon';

interface ImagePreviewProps {
  image: string;
  onDelete: () => void;
}

export const ImagePreview: FunctionComponent<ImagePreviewProps> = ({
  image,
  onDelete,
}) => (
  <div className="relative h-64 w-full ">
    <img src={image} alt="Preview" className="h-full w-full object-contain" />
    <div className="absolute top-0 right-0">
      <IconButton onClick={onDelete}>
        <Icon type="remove" />
      </IconButton>
    </div>
  </div>
);
