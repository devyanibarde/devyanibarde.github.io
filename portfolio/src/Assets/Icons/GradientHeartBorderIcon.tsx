import { SvgIcon } from "@mui/material";

const GradientHeartBorderIcon = ({ hovered }: { hovered: boolean }) => (
    <SvgIcon viewBox="0 0 24 24">
        <defs>
            <linearGradient id="gradientHover" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f9cb58" />
                <stop offset="25%" stopColor="#f59e4d" />
                <stop offset="50%" stopColor="#d26c3c" />
                <stop offset="75%" stopColor="#cc2366" />
                <stop offset="100%" stopColor="#b41080" />
            </linearGradient>
        </defs>
        <path
            d="M16.5,3c-1.74,0-3.41,0.81-4.5,2.09C10.91,3.81,9.24,3,7.5,3
      C4.42,3,2,5.42,2,8.5c0,3.78,3.4,6.86,8.55,11.54L12,21.35l1.45-1.32
      C18.6,15.36,22,12.28,22,8.5C22,5.42,19.58,3,16.5,3z M12.1,18.55
      L12,18.65l-0.1-0.1C7.14,14.24,4,11.39,4,8.5C4,6.5,5.5,5,7.5,5
      c1.54,0,3.04,1,3.57,2.36h1.87C13.46,6,14.96,5,16.5,5
      C18.5,5,20,6.5,20,8.5c0,2.89-3.14,5.74-7.9,10.05z"
            fill={hovered ? "url(#gradientHover)" : "#a4a0a0ff"}
        />
    </SvgIcon>
);

export default GradientHeartBorderIcon;
