import {
  ChangeEventHandler,
  FunctionComponent,
  InputHTMLAttributes,
} from 'react';

interface DropZoneProps {
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Dropzone: FunctionComponent<DropZoneProps> = ({
  inputProps,
  onChange,
}) => (
  <div className="flex w-full items-center justify-center">
    <label
      htmlFor="dropzone-file"
      className="dark:hover:bg-bray-800 bg-dark-50 hover:bg-dark-100 border-dark-300 dark:bg-dark-700 dark:hover:border-dark-500 dark:hover:bg-dark-600 dark:border-dark-600 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed"
    >
      <div className="flex flex-col items-center justify-center pt-5 pb-6">
        <svg
          aria-hidden="true"
          className="mb-3 h-10 w-10 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          ></path>
        </svg>
        <p className="text-dark-500 dark:text-dark-400 mb-2 text-sm">
          <span className="font-semibold">Klik om te uploaden</span> of sleep
          bestand(en) hierheen
        </p>
      </div>
      <input
        id="dropzone-file"
        type="file"
        className="hidden"
        {...inputProps}
        onChange={onChange}
      />
    </label>
  </div>
);
