import { FunctionComponent } from 'react';
import { IconButton } from '../icon-button/icon-button';
import { Icon } from '../icon/icon';

interface ImagePreviewProps {
  image: File | string;
  onDelete: () => void;
}

// TODO move to shared/util
const isString = (data: unknown): data is string => typeof data === 'string';

export const ImagePreview: FunctionComponent<ImagePreviewProps> = ({
  image,
  onDelete,
}) => (
  <div className="relative h-64 w-full ">
    <img
      src={isString(image) ? image : URL.createObjectURL(image)}
      alt="Preview"
      className="h-full w-full object-contain"
    />
    <div className="absolute top-0 right-0">
      <IconButton onClick={onDelete}>
        <Icon type="remove" />
      </IconButton>
    </div>
  </div>
);
