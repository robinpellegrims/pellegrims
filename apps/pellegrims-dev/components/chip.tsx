export interface ChipProps {
  text: string;
}

export default function Chip(props: ChipProps) {
  return (
    <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
      {props.text}
    </span>
  );
}
