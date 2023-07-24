import './index.scss';
import InfoCard from './infoCard'
const ourInfo = [
  {
    name: 'Matej Kevkic',
    description:
    "Matej is currently a beginner in web development",
    img: 'https://avatars.githubusercontent.com/u/121257490?v=4',
    gitHubLink: 'https://www.github.com/matejkevkic/',
  },
  {
    name: 'Mehmed Mekic',
    description:
    "Mehmed is currently a beginner in web development",
    img: 'https://avatars.githubusercontent.com/u/121257478?v=4',
    gitHubLink: 'https://github.com/mehmedmekic08',
  },
  {
    name: 'Muhamed',
    description:
    "Muhamed is currently a beginner in web development",
    img: '',
    gitHubLink: '',
  },
  {
    name: 'Alen Kalac',
    description:
    "Alen is currently a web developer",
    img: 'https://avatars.githubusercontent.com/u/117202256?v=4',
    gitHubLink: 'https://github.com/Alen-Kalac',
  },
  {
    name: 'zaboravio sam',
    description:
    "____ is currently a beginner in web development",
    img: '',
    gitHubLink: '',
  },
  {
    name: 'Remzo Gusinac',
    description:
    "Remzo is currently a web developer",
    img: 'https://avatars.githubusercontent.com/u/77622745?v=4',
    gitHubLink: 'https://www.github.com/Remzo00/',
  }
];
const About = () => {
  return (
    <div className="About">
      {ourInfo.map(el => (
        <InfoCard
          name={el.name}
          description={el.description}
          img={el.img}
          gitHubLink={el.gitHubLink}
        />
      ))}
    </div>
  );
};

export default About;
