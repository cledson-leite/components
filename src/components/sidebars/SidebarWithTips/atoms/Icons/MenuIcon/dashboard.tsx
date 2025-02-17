type Props = React.SVGProps<SVGSVGElement>;

export default function Dashboard({...props}: Props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0013.277-5.5zM2 13.292A8 8 0 017.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 008.5.015z" />
    </svg>
  );
}
