import React from 'react';
import classNames from 'classnames';
import about from '~/img/about.png';
import profile from '~/img/profile.png';
import mot from '~/img/1.png';
import Button from '~/components/Button';
const cx = classNames;
function About() {
    return (
        <>
            <div id="about" className={cx('w-full, h-screen relative text-lg')}>
                <img src={mot} alt="mot" className={cx('absolute -z-10 -l-10 top-50 -left-10 h-72 object-contain')} />

                <div className={cx('w-full h-full flex pr-20 pl-36 pt-10 items-center', 'max-xs:pr-5 max-xs:pl-5')}>
                    <div className={cx('w-1/4', 'max-xs:hidden')}>
                        <img src={profile} alt="profile" />
                    </div>
                    <div className={cx('w-3/4 h-2/3 pl-20 space-y-6', 'max-xs:w-full max-xs:pl-0 max-xs:text-center')}>
                        <div className={cx('font-bold text-tt-orange text-4xl')}>About me</div>
                        <div className={cx('text-3xl font-bold')}>Welcome to my portfolio!</div>
                        <div>
                            Hello! I am Thanh, a Web programmer. I graduated from Ho Chi Minh City University of
                            Industry, majoring in Software Engineering. I have 9 months of working experience at LOGSIK
                            Technology JSC as a web programmer
                        </div>
                        <div>
                            Learn, gain more knowledge, experience and use the knowledge and skills learned to
                            contribute to the company and complete the tasks assigned by the company. Orientation to
                            become a full-stack website developer in the future. From there, improve your own abilities
                            and try to advance in your work.
                        </div>
                        <Button
                            href="#contact"
                            className={cx(
                                'bg-tt-orange text-white w-52 flex h-14 items-center justify-center text-xl',
                                'max-xs:m-auto',
                            )}
                        >
                            Hire me
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
