import { ComponentType } from 'react';

interface GridProps<TComponentProps> {
  items: TComponentProps[];
  ItemComponent: ComponentType<TComponentProps>;
}

export const Grid = <TProps,>({ items, ItemComponent }: GridProps<TProps>) => (
  <div className="flex flex-wrap">
    {items.map((item, index) => (
      <div key={index} className="p-4 md:w-1/3">
        <ItemComponent {...item} />
      </div>
    ))}
  </div>
);
