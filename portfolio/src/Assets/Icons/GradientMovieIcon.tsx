import { SvgIcon } from "@mui/material";

const GradientMovieIcon = ({ hovered }: { hovered: boolean }) => (
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
            d="M18 4l2 4h-3l-2-4h3zM13.5 4l2 4H12l-2-4h3.5zM9 4l2 4H8L6 4h3zM21 10V8.8l-1-2V6h-5.2l1 2H13l-1-2H6.8l1 2H4v2H3v10h18V10h-1zM19 18H5v-6h14v6z"
            fill={hovered ? "url(#gradientHover)" : "#a4a0a0ff"}
        />
    </SvgIcon>
);

export default GradientMovieIcon;
