import s from './Skills.module.css';
import styleContainer from "./../common/styles/Container.module.css";
import Skill from "./skill/Skill";


function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}` }>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={"JS"} description={"flex-wrap -  Будут ли элементы выходить за рамки контейнера (по умолчанию – nowrap)"}/>
                    <Skill title={"React"} description={"Если wrap, то элементы, которые не помещаются, будут переноситься на новую строку (столбец)"}/>
                    <Skill title={"CSS"} description={"Если wrap, то элементы, которые не помещаются, будут переноситься на новую строку (столбец)"}/>
                </div>

            </div>

        </div>
    )
}

export default Skills;