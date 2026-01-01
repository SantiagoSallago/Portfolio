import './Technologies.css';
import './TechnologiesResponsive.css'
import IconTechnologies from './IconTechnologies/IconTechnologies';
import nestjs from '../../assets/nestjs2.svg'
import typescript from '../../assets/typescript.svg'
import html from '../../assets/html_original_wordmark_logo_icon_146478.svg'
import css from '../../assets/css_original_wordmark_logo_icon_146576.svg'
import javascript from '../../assets/javascript_icon_130900.svg'
import jest from '../../assets/jestjsio_logo_icon_168604.svg'
import mongoDB from '../../assets/mongodb_original_wordmark_logo_icon_146425.svg'
import MySQL from '../../assets/mysql_original_wordmark_logo_icon_146417.svg'
import React from '../../assets/react_original_logo_icon_146374.svg'
import nodeJS from '../../assets/nodejs_original_wordmark_logo_icon_146412.svg'
import java from '../../assets/java.svg'
import Spring from '../../assets/SpringBoot.png'


const Technologies = () => {
    const techs = [
        { icon: html, text: "HTML" },
        { icon: css, text: "CSS" },
        { icon: javascript, text: "JavaScript" },
        { icon: typescript, text: "TypeScript" },
        { icon: React, text: "React" },
        { icon: jest, text: "Jest" },
        { icon: mongoDB, text: "MongoDB" },
        { icon: MySQL, text: "MySQL" },
        { icon: nestjs, text: "NestJS" },
        { icon: nodeJS, text: "NodeJS" },
        { icon: java, text: "Java" },
        { icon: Spring, text: "Spring Boot" },
    ];

    return (
        <div className="Technologies">
            <div className="h2">
                <h2>Tecnologias</h2>
            </div>
            <div className="Technologies_Icons">
                {techs.map((t) => (
                    <IconTechnologies key={t.text} icon={t.icon} text={t.text} />
                ))
                }
            </div>
        </div>
    )
}
export default Technologies;