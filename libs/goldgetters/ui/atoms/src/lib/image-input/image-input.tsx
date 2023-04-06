import { FormField } from '../form-field/form-field';
import {
  ChangeEventHandler,
  forwardRef,
  FunctionComponent,
  InputHTMLAttributes,
  useState,
} from 'react';
import { ImagePreview } from './image-preview';
import { Dropzone } from './dropzone';

export interface ImageInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  imageUrl?: string;
}

export const ImageInput: FunctionComponent<ImageInputProps> = forwardRef(
  ({ label, error, imageUrl, ...inputProps }, _ref) => {
    const [selectedImage, setSelectedImage] = useState<
      File | string | undefined
    >(imageUrl);

    const imageChange: ChangeEventHandler<HTMLInputElement> = (event) =>
      event.target.files?.length &&
      event.target.files?.length > 0 &&
      setSelectedImage(event.target.files?.[0]);

    const removeSelectedImage = () => setSelectedImage(undefined);

    return (
      <FormField id={inputProps.id ?? label} label={label} error={error}>
        {selectedImage ? (
          <ImagePreview image={selectedImage} onDelete={removeSelectedImage} />
        ) : (
          <Dropzone inputProps={inputProps} onChange={imageChange} />
        )}
      </FormField>
    );
  }
);

export default ImageInput;
