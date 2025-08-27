import { SvgIcon } from "@mui/material";

const GradientEmailIcon = ({ hovered }: { hovered: boolean }) => (
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
            d="M20 4H4c-1.1 0-2 .9-2 2v12c0 
1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 
4l-8 5-8-5V6l8 5 8-5v2z"
            fill={hovered ? "url(#gradientHover)" : "#a4a0a0ff"}
        />
    </SvgIcon>
);

export default GradientEmailIcon;
