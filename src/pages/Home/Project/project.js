import React from 'react';
import classNames from 'classnames';
import img2 from '~/img/img2.png';
import img4 from '~/img/img4.png';
import { dataProject } from '~/lib/templateData';
import CardProject from '~/components/CardProject';
const cx = classNames;
function Project() {
    const renderCardProject = () => {
        return dataProject.map((data, index) => {
            return <CardProject data={data} key={index} />;
        });
    };

    return (
        <>
            <div id="project" className={cx('w-full min-h-screen relative text-lg')}>
                <img src={img2} alt="img1" className={cx('absolute -z-20 top-32 left-0 h-80 object-contain')} />
                <img src={img4} alt="img2" className={cx('absolute -z-20 bottom-1 right-0 h-72 object-contain')} />
                <div className={cx('w-full h-full  pr-36 pl-36 pt-20 ', 'max-xs:pl-10 max-xs:pr-10')}>
                    <div className={cx('text-3xl text-center text-tp-orange font-medium mb-10 text-tt-orange')}>
                        My project
                    </div>
                    <div className={cx('flex flex-wrap justify-center ')}>{renderCardProject()}</div>
                </div>
            </div>
        </>
    );
}

export default Project;
