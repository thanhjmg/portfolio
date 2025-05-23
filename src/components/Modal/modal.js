import React from 'react';
import classNames from 'classnames';

const cx = classNames;
function Modal({ children, isShow, isHidden, className }) {
    var classShow = 'hidden';
    const showModal = () => {
        if (isShow === true) {
            classShow = 'block';
        }
    };
    showModal();
    return (
        <div
            className={cx(
                'w-full h-screen top-0 left-0 flex justify-center items-center bg-black  fixed backdrop-blur-sm z-20 bg-opacity-20 ',
                classShow,
            )}
            onClick={isHidden}
        >
            <div
                className={cx('w-1/2  bg-white rounded-lg z-30 border ', className)}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                {children}
            </div>
        </div>
    );
}

export default Modal;
