import React from 'react';
import classNames from 'classnames';
import img5 from '~/img/img5.png';
import img6 from '~/img/img6.png';
import { FaMapLocationDot } from 'react-icons/fa6';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
const cx = classNames;
function Contact() {
    return (
        <>
            <div id="contact" className={cx('w-full min-h-screen relative ')}>
                <img src={img5} alt="" className={cx('absolute -z-10 top-10 -left-40 w-96 object-contain')} />
                <img src={img6} alt="" className={cx('absolute -z-10  right-2 bottom-0 w-72 object-contain')} />

                <div className={cx('w-full h-full  pr-36 pl-36 pt-20 ', 'max-xs:pl-5 max-xs:pr-5')}>
                    <div className={cx('text-3xl text-center text-tp-orange font-medium mb-10 text-tt-orange')}>
                        Contact Me
                    </div>
                    <div className={cx('w-full flex  justify-center items-center pt-10', 'max-xs:flex-col')}>
                        <div className={cx('p-5 mt-5')}>
                            <div className={cx('flex ')}>
                                <div
                                    className={cx(
                                        'w-20 h-20  rounded-full bg-tt-orange bg-opacity-20 text-tt-orange text-3xl flex justify-center items-center',
                                    )}
                                >
                                    <FaMapLocationDot />
                                </div>
                                <div className="w-72">
                                    <p className={cx('text-2xl font-medium ml-5 text-tt-orange')}>Address</p>
                                    <p className={cx('font-light ml-5')}>Thu Duc District, Ho Chi Minh City</p>
                                </div>
                            </div>

                            <div className={cx('flex mt-10')}>
                                <div
                                    className={cx(
                                        'w-20 h-20  rounded-full bg-green-500 bg-opacity-20 text-green-900 text-3xl flex justify-center items-center',
                                    )}
                                >
                                    <FaPhoneAlt />
                                </div>
                                <div className="w-72">
                                    <p className={cx('text-2xl font-medium ml-5 text-green-900')}>Phone</p>
                                    <p className={cx('font-light ml-5')}>0374779028</p>
                                </div>
                            </div>
                            <div className={cx('flex mt-10')}>
                                <div
                                    className={cx(
                                        'w-20 h-20  rounded-full bg-yellow-600 bg-opacity-50 text-yellow-100 text-3xl flex justify-center items-center',
                                    )}
                                >
                                    <FaEnvelope />
                                </div>
                                <div className="w-72">
                                    <p className={cx('text-2xl font-medium ml-5 text-green-900')}>Email</p>
                                    <p className={cx('font-light ml-5')}>thanhnt081201@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
