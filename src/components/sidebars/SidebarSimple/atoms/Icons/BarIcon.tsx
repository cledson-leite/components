type Props = React.SVGProps<SVGSVGElement>;

export default function BarIcon({...props}: Props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="4" height="5" x="1" y="10" rx="1"></rect>
      <rect width="4" height="9" x="6" y="6" rx="1"></rect>
      <rect width="4" height="14" x="11" y="1" rx="1"></rect>
    </svg>
  );
}