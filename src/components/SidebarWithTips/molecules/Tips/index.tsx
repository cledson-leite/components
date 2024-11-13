import Blank from "./Blank";
import WithOptions from "./WithOptions";

type Props = {
  options: string[];
  label: string;
}

export default function ToolTip({options, label}: Props) {
  return options.length ? <WithOptions options={options} label={label} /> : <Blank label={label} />
}