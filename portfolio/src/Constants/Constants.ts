export const STORIES_TITLE = "Stories";

export const colors = [
    '#0f3305',
    '#0f4a5b',
    '#141664',
    '#652318',
    '#510f69',
    '#4d1540',
    '#6a11cb',
    '#16514d',
    '#502b0a',
    '#556017'
];

export const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
};