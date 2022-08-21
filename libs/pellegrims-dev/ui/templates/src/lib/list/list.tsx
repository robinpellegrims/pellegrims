import { ComponentType } from 'react';

interface ListProps<TComponentProps> {
  items: TComponentProps[];
  ItemComponent: ComponentType<TComponentProps>;
}

export const List = <TProps,>({ items, ItemComponent }: ListProps<TProps>) => (
  <div className="flex flex-col gap-12">
    <div className="flex flex-col gap-6 divide-y-2 divide-gray-100">
      {items.filter(Boolean).map((item, index) => (
        <span key={index} className={index !== 0 ? 'pt-6' : ''}>
          <ItemComponent {...item} />
        </span>
      ))}
    </div>
  </div>
);
