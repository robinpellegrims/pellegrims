import { FunctionComponent } from 'react';
import Image from 'next/image';
import { ReactMarkdownProps } from 'react-markdown/lib/complex-types';

const isDefined = <SomeType,>(
  val: SomeType | undefined | null
): val is SomeType => val !== undefined && val !== null;

const isString = (value: unknown): value is string => typeof value === 'string';

export const MarkdownImage: FunctionComponent<
  JSX.IntrinsicElements['img'] & ReactMarkdownProps
> = ({ node, children }) => {
  if (
    isDefined(node.properties) &&
    isString(node.properties['alt']) &&
    isString(node.properties['src'])
  ) {
    const metastring = node.properties['alt'];
    const alt = metastring.replace(/ *\{[^)]*} */g, '');
    const metaWidth = metastring.match(/{([^}]+)x/);
    const metaHeight = metastring.match(/x([^}]+)}/);
    const width = metaWidth?.[1] ?? '100%';
    const height = metaHeight?.[1] ?? '100%';
    const isPriority = metastring.toLowerCase().match('{priority}') !== null;
    const hasCaption = metastring?.toLowerCase().includes('{caption:');
    const caption = metastring?.match(/{caption: (.*?)}/)?.pop();
    const imageSrc = node.properties['src'];

    return (
      <span className="block text-center">
        <Image
          src={imageSrc}
          alt={alt}
          priority={isPriority}
          width={width}
          height={height}
        />
        {hasCaption ? (
          <div className="caption" aria-label={caption}>
            {caption}
          </div>
        ) : null}
      </span>
    );
  }
  return <p>{children}</p>;
};
