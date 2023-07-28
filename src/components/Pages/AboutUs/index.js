import AboutCard from './AboutCard';
import './index.scss';

function About() {
  return (
    <div className='about-us-full-page'>
    <div className="first-row">
    <div>
    <AboutCard
     name='Demir Subasic' 
     img={'https://avatars.githubusercontent.com/u/117202634?v=4'} 
     location='NOVI PAZAR, SERBIA' 
     description='Demir is a junior frontend developer, and he works at the organization MojNP' 
     githubLink={'https://github.com/demirsubasic2001'}/>
    </div>

    <div>
    <AboutCard
     name='Alen Kalac' 
     img={'https://avatars.githubusercontent.com/u/117202256?v=4'} 
     location='NOVI PAZAR, SERBIA' 
     description='Alen is a junior frontend developer, and he works at the organization MojNP' 
     githubLink={'https://github.com/Alen-Kalac'}/>
    </div>
    </div>

     <div className="second-row">
     <div>
     <AboutCard
     name='Matej Kevkic' 
     img={'https://avatars.githubusercontent.com/u/121257490?v=4'} 
     location='NOVI PAZAR, SERBIA' 
     description='Matej is a programmer, and he works at Tech Solutions as a Software Developer' 
     githubLink={'https://github.com/matejkevkic'}/>
     </div>

     <div>
     <AboutCard
     name='Mehmed Mekic' 
     img={'https://avatars.githubusercontent.com/u/121257478?v=4'} 
     location='NOVI PAZAR, SERBIA' 
     description='Mehmed is a physicist, and he collaborates with the Institute of Science as a Researcher' 
     githubLink={'https://github.com/mehmedmekic08'}/>
     </div>

     <div>
     <AboutCard
     name='Muhamed Gusinac' 
     img={'https://avatars.githubusercontent.com/u/118222302?v=4'} 
     location='NOVI PAZAR, SERBIA' 
     description='Muhamed is a mathematician, and he works in center NIT as a Web developer' 
     githubLink={'https://github.com/muhamedgusinac'}/>
     </div>
     </div>
     
    </div>
  );
}

export default About;
