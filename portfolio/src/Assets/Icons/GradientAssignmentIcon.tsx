import { SvgIcon } from "@mui/material";

const GradientAssignmentIcon = ({ hovered }: { hovered: boolean }) => (
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
            d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
            fill={hovered ? "url(#gradientHover)" : "#a4a0a0ff"}
        />
    </SvgIcon>
);

export default GradientAssignmentIcon;
