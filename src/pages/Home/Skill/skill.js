import React from 'react';
import classNames from 'classnames';
import skill from '~/img/skill.png';
import ItemSkill from '../../../components/ItemSkill/itemSkill';
import imgNodeJS from '~/img/Node.js_logo.png';
import java from '~/img/java.png';
import spring from '~/img/spring.png';
import sql from '~/img/sql.png';
import mongoDB from '~/img/mongodb.png';
import javascript from '~/img/javascript.png';
import react from '~/img/react.png';
import taiwind from '~/img/tailwind.png';
import mui from '~/img/mui.png';
import img3 from '~/img/img3.png';
import postgresql from '~/img/postgresql_logo.png';
const cx = classNames;

function Skill() {
    return (
        <>
            <div id="skill" className={cx('w-full min-h-screen relative')}>
                <img src={skill} alt="" className={cx('absolute -z-20 top-32 left-5 h-60 object-contain')} />
                <img src={img3} alt="" className={cx('absolute -z-20 bottom-1 right-5 h-60 object-contain')} />
                <div className={cx('w-full h-full pr-36 pl-36 pt-20 ', 'max-xs:pl-5 max-xs:pr-5')}>
                    <div className={cx('text-3xl text-center mb-10 text-tt-orange')}>My Skill</div>
                    <p className={cx('text-2xl font-medium')}>- Back-end</p>
                    <div className={cx('flex flex-wrap justify-center ')}>
                        <ItemSkill src={imgNodeJS} />
                        <ItemSkill src={java} />
                        <ItemSkill src={spring} />
                        <ItemSkill src={sql} />
                        <ItemSkill src={postgresql} />
                        <ItemSkill src={mongoDB} />
                    </div>
                    <p className={cx('text-2xl font-medium')}>- Front-end</p>
                    <div className={cx('flex flex-wrap justify-center ')}>
                        <ItemSkill src={javascript} />
                        <ItemSkill src={react} />
                        <ItemSkill src={taiwind} />
                        <ItemSkill src={mui} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skill;
