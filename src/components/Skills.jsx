import { skills } from '../constants';
// import styles from '../style';

const Skills = () => {
  return (
    <section className="w-full">
      <h2 className="text-3xl text-white text-align-center mb-8">Skills</h2>
        <div className="flex md:flex-row flex-col mb-10">
          {skills.map((skill) => (
            <div key={skill.id} className="text-white border-2 border-solid border-white md:w-1/4 md:m-8 m-2 pt-2 pb-4 px-4">
              <h4 className="text-2xl text-gradient mr-8">{skill.title}</h4>
              <p className="text-lg">{skill.value}</p>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Skills
