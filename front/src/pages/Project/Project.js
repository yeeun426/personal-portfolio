import { useState, useEffect } from 'react';
import { ProjectStyled } from './style';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Project() {
  const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
  const URL = `${PROXY}/data/project.json`;
  const [project, setProject] = useState([]);
  console.log(URL);

  useEffect(() => {
    fetch('/data/project.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
      });
  }, []);

  return (
    <ProjectStyled>
      <div className='test'>
        {project.map((project) => (
          <div className='project-content' key={project.id}>
            <div className='project-txt'>
              <div className='project-date'>{project.date}</div>
              <div className='project-name'>{project.name}</div>
              <div className='project-detail'>{project.detail}</div>
            </div>
            <img src={project.img} alt={project.name} />
          </div>
        ))}
      </div>
    </ProjectStyled>
  );
}
