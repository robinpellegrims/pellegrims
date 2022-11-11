interface ListProps<TProps> {
  render: (item: TProps) => JSX.Element;
  items: TProps[];
}

export const List = <TProps,>({ items, render }: ListProps<TProps>) => (
  <div className="flex flex-col gap-12">
    <div className="flex flex-col gap-6 divide-y-2 divide-gray-100">
      {items.filter(Boolean).map((item, index) => (
        <span key={index} className={index !== 0 ? 'pt-6' : ''}>
          {render(item)}
        </span>
      ))}
    </div>
  </div>
);
