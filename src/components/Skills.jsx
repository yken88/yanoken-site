import { skills } from '../constants';
import styles from '../style';

const Skills = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-20`}>
      <h3 className="text-white mr-4">控えめにスキル</h3>
      {skills.map((skill) => (
        <div key={skill.id} className="text-white">
          <h4 className="text-xl text-gradient mr-8">{skill.title}</h4>
          <p className="text-xs">{skill.value}</p>
        </div>
      ))}
    </section>
  )
}

export default Skills
