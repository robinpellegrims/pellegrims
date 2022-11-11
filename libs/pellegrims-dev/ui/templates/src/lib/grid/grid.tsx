interface GridProps<TProps> {
  render: (item: TProps) => JSX.Element;
  items: TProps[];
}

export const Grid = <TProps,>({ items, render }: GridProps<TProps>) => (
  <div className="flex flex-wrap">
    {items.map((item, index) => (
      <div key={index} className="p-4 md:w-1/3">
        {render(item)}
      </div>
    ))}
  </div>
);
