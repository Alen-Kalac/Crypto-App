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
    name: 'Muhamed Gusinac',
    description:
    "Muhamed is currently a beginner in web development",
    img: 'https://avatars.githubusercontent.com/u/111769390?v=4',
    gitHubLink: 'https://github.com/muhamed-gusinac',
  },
  {
    name: 'Alen Kalac',
    description:
    "Alen is currently a web developer",
    img: 'https://avatars.githubusercontent.com/u/117202256?v=4',
    gitHubLink: 'https://github.com/Alen-Kalac',
  },
  {
    name: 'Demir Subasic',
    description:
    "Demir is currently a beginner in web development",
    img: 'https://avatars.githubusercontent.com/u/117202634?v=4',
    gitHubLink: 'https://github.com/demirsubasic2001',
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
