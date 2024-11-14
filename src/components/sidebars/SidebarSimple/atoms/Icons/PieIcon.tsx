type Props = React.SVGProps<SVGSVGElement>;

export default function PieIcon({...props}: Props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M290.352 13.213l-11.475 218.984 204.68-78.584a219.242 219.284 0 0 0-193.205-140.4zm-51.39 47.566A219.242 219.284 0 0 0 38.59 206.24a219.242 219.284 0 0 0 77.3 250.918 219.242 219.284 0 0 0 262.49-3.092 219.242 219.284 0 0 0 71.366-252.67l-204.682 78.583 12.24-218.943a219.242 219.284 0 0 0-18.34-.258z"></path>
    </svg>
  );
}