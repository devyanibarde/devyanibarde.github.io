import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import FolderIcon from '@mui/icons-material/Folder';
import GradientAssignmentIcon from '../Assets/Icons/GradientAssignmentIcon';
import GradientEmailIcon from '../Assets/Icons/GradientEmailIcon';
import GradientLinkedInIcon from '../Assets/Icons/GradientLinkedInIcon';
import GradientGitHubIcon from '../Assets/Icons/GradientGitHubIcon';

export const MY_NAME = "Devyani Barde";

export const MY_DESCRIPTION = "Frontend Developer passionate about building beautiful and functional web applications.";

export const EXTENDED_DESCRIPTION = "As a computer science professional with both a Bachelor's and Master's degree, I bring a well-rounded understanding of the field to my work as a web developer. With over two years of experience in the industry, I have honed my skills and developed a passion for coding. My combination of education and hands-on experience make me a valuable asset to any team, and my enthusiasm for the field drives me to continue learning and growing in my career.";

export const MY_SOCIALS = [
    {
        icon: GradientGitHubIcon,
        name: "GitHub",
        link: "https://github.com/devyanibarde"
    },
    {
        icon: GradientLinkedInIcon,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/devyanibarde/"
    },
    {
        icon: GradientEmailIcon,
        name: "Email",
        link: "mailto:devyanibarde@gmail.com"
    },
    {
        icon: GradientAssignmentIcon,
        name: "Resume",
        link: require('../Assets/Documents/Resume.pdf')
    },
];

export const MY_NAV_ITEMS = [
    {
        icon: PersonIcon,
        name: "Profile"
    },
    {
        icon: FolderIcon,
        name: "Projects"
    },
    {
        icon: WorkIcon,
        name: "Experience"
    },
    {
        icon: SchoolIcon,
        name: "Education"
    },
];