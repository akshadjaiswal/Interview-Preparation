import './App.css';
import SkillsList from './SkillsLists';



function App() {
  const skills = ["React", "Nodejs", "MongoDB", "Express"]

  return (
    <div className='center-container'>
      <h1>Skills i Have</h1>
      <SkillsList skills={skills} />
    </div>
  )

}

export default App;
