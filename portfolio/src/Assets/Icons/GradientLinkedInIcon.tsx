import { SvgIcon } from "@mui/material";

const GradientLinkedInIcon = ({ hovered }: { hovered: boolean }) => (
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
            d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 
21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 
3H19M8.34 17V10.91H6.11V17H8.34M7.22 
9.94A1.31 1.31 0 1 0 7.22 7.32A1.31 
1.31 0 0 0 7.22 9.94M17.89 17V13.61C17.89 
11.63 16.84 10.65 15.3 10.65C14.12 10.65 
13.55 11.34 13.26 11.83V10.91H11.03V17H13.26V13.97C13.26 
13.06 13.45 12.18 14.55 12.18C15.64 12.18 15.66 13.16 
15.66 14.03V17H17.89Z"
            fill={hovered ? "url(#gradientHover)" : "#a4a0a0ff"}
        />
    </SvgIcon>
);

export default GradientLinkedInIcon;
