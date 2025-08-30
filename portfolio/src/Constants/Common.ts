import ReactIcon from '@mui/icons-material/Code';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Brush';
import JavascriptIcon from '@mui/icons-material/Javascript';
import TypescriptIcon from '@mui/icons-material/IntegrationInstructions';
import GitIcon from '@mui/icons-material/GitHub';
import MaterialUiIcon from '@mui/icons-material/Widgets';
import ApiIcon from '@mui/icons-material/Api';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import FolderIcon from '@mui/icons-material/Folder';
import GradientAssignmentIcon from '../Assets/Icons/GradientAssignmentIcon';
import GradientEmailIcon from '../Assets/Icons/GradientEmailIcon';
import GradientLinkedInIcon from '../Assets/Icons/GradientLinkedInIcon';
import GradientGitHubIcon from '../Assets/Icons/GradientGitHubIcon';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { PiSunglassesFill } from "react-icons/pi";
import { FaCode } from "react-icons/fa";

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

export const MY_SKILLS = [
    { icon: ReactIcon, name: 'React' },
    { icon: HtmlIcon, name: 'HTML' },
    { icon: CssIcon, name: 'CSS' },
    { icon: JavascriptIcon, name: 'JavaScript' },
    { icon: TypescriptIcon, name: 'TypeScript' },
    { icon: GitIcon, name: 'Git' },
    { icon: MaterialUiIcon, name: 'Material UI' },
    { icon: ApiIcon, name: 'REST API' },
];

export const EDUCATION = [
    {
        name: 'University of North Carolina at Charlotte',
        Degree: 'Master of Science',
        Major: 'Computer Science',
        StartDate: 'January 2021',
        EndDate: 'December 2022',
        icon: MenuBookIcon
    },
    {
        name: 'Sant Gadge Baba Amravati University',
        Degree: 'Bachelor of Engineering',
        Major: 'Computer Science and Engineering',
        StartDate: 'August 2015',
        EndDate: 'October 2019',
        icon: MenuBookIcon
    }
];

export const WORK_EXPERIENCE = [
    {
        name: 'DataEconomy Inc.',
        Role: 'Software Developer Intern',
        StartDate: 'July 2023',
        EndDate: 'Present',
        Description: [
            'Developed user-friendly interfaces using React.js and TypeScript, ensuring responsive design and cross-browser compatibility.',
            'Created reusable React components, effectively managing state with Redux and Context API.',
            'Utilized Git for version control, including branching, merging, and conflict resolution.',
            'Familiarity with popular Java frameworks such as Spring Boot for rapid application development.',
            'Contributed to code reviews, following best practices to enhance code quality and maintainability.'
        ],
        icon: PiSunglassesFill
    },
    {
        name: 'University of North Carolina at Charlotte',
        Role: 'Teaching Assistant',
        StartDate: 'August 2021',
        EndDate: 'December 2021',
        Description: [
            'Worked as a teaching assistant for front-end web development courses',
            'Tutored students on various topics in front-end web development',
            'Performed assistant teaching duties such as providing critical help, grading papers and assignments',
            'Contributed to students\' learning and success through one-on-one tutoring and support.'
        ],
        icon: PiSunglassesFill
    },
    {
        name: 'Drishti Software Solutions',
        Role: 'Web Developer',
        StartDate: 'January 2020',
        EndDate: 'December 2020',
        Description: [
            'Improved website performance by implementing Asynchronous Network calls',
            'Implemented complete Software Development Life Cycle (SDLC) including Design, Coding, Development, and Testing',
            'Utilized CI/CD for faster and reliable deployment',
            'Worked with technologies such as HTML5, CSS3, React.js, and JavaScript',
            'Built user interfaces based on approved designs.',
            'Experienced in Agile and Scrum methodologies',
            'Contributed to the success of the company through hands-on approach and technical skills in web development.'
        ],
        icon: PiSunglassesFill
    }
];

export const PROJECTS = [
    {
        name: 'Facial Emotion Recognition',
        gitlink: 'https://github.com/devyanibarde/FacialEmotionRecognition',
        Description: 'A computer visison based machine learning model is developed to detect seven different emotions in any given facial image.',
        Technologies: ['Python', 'Keras', 'Jupyter', 'Matplotlib'],
        icon: FaCode
    },
    {
        name: 'Market',
        gitlink: 'https://github.com/devyanibarde/Market',
        Description: 'A web portal for online purchases, created with Django framework.',
        Technologies: ['Django', 'Python', 'JavaScript', 'HTML', 'CSS'],
        icon: FaCode
    },
    {
        name: 'Plant Pathology',
        gitlink: 'https://github.com/devyanibarde/PlantPathology',
        Description: 'Machine learning-based model to accurately classify a given leaf image from the test dataset to a particular disease category, and to identify an individual disease from multiple disease symptoms on a single leaf image.',
        Technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
        icon: FaCode
    },
    {
        name: 'Identification of Meritorious Students',
        gitlink: 'https://github.com/devyanibarde/IoMS',
        Description: 'A web portal for schools to manage student data.',
        Technologies: ['Java', 'HTML', 'CSS', 'MySQL'],
        icon: FaCode
    },
]