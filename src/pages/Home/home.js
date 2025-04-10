import React from 'react';
import classNames from 'classnames';
import avartar from '~/img/avatar.png';
import About from './About/about';
import Skill from './Skill/skill';
import Project from './Project/project';
import Contact from './Contact/contact';

const cx = classNames;

function Home() {
    // Đổi tên function thành Home (viết hoa chữ cái đầu theo convention của React component)
    return (
        <div className="w-full">
            <div
                id="home" // Thêm id cho section Home
                className={cx(
                    'w-full h-screen bg-tt-slider bg-cover flex pr-36 pl-36',
                    'max-xs:flex-col-reverse',
                    'max-xs:pr-5 max-xs:pl-5',
                )}
            >
                <div
                    className={cx(
                        'w-1/2 flex flex-col h-full justify-center space-y-4',
                        'max-xs:w-full max-xs:text-center',
                    )}
                >
                    <div className="text-tt-orange font-bold text-3xl">Hello, I am</div>
                    <div className="font-bold text-4xl">Nguyen Tuan Thanh</div>
                    <div className="text-2xl">A Web Developer</div>
                </div>
                <div
                    className={cx(
                        'w-1/2 flex flex-col h-full justify-center space-y-4',
                        'max-xs:w-full max-xs:text-center',
                    )}
                >
                    <img src={avartar} className="w-5/6 mt-20 max-xs:w-3/4 mx-auto" alt="Avatar" />
                </div>
            </div>
            <div id="about">
                <About />
            </div>
            <div id="skill">
                <Skill />
            </div>
            <div id="project">
                <Project />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </div>
    );
}

export default Home;
