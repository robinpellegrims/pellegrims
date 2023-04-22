import { FunctionComponent, useEffect, useState } from 'react';
import { ImagePreview } from './image-preview';
import { Dropzone } from './dropzone';
import { FormField } from '../form-field/form-field';

export interface ImageInputValue {
  previewUrl: string;
  value: string | File;
}

export interface ImageInputProps {
  label: string;
  error?: string;
  value?: ImageInputValue;
  onChange: (value?: ImageInputValue) => void;
}

export const ImageInput: FunctionComponent<ImageInputProps> = ({
  label,
  error,
  value,
  onChange,
}) => {
  const [previewImage, setPreviewImage] = useState<string | undefined>(
    value?.previewUrl
  );

  useEffect(() => setPreviewImage(value?.previewUrl), [value]);

  const onFileChange = (file: File | undefined) => {
    const submitValue = file
      ? { value: file, previewUrl: URL.createObjectURL(file) }
      : undefined;
    setPreviewImage(submitValue?.previewUrl);
    onChange(submitValue);
  };

  return (
    <FormField id={label} label={label} error={error}>
      {previewImage ? (
        <ImagePreview
          image={previewImage}
          onDelete={() => onFileChange(undefined)}
        />
      ) : (
        <Dropzone onFileChange={onFileChange} />
      )}
    </FormField>
  );
};

export default ImageInput;
