import classNames from 'classnames';
import Button from '~/components/Button';
import { memo, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { RxTextAlignJustify } from 'react-icons/rx';

const cx = classNames;

function Header() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [changeBlockHeader, setChangeBlockHeader] = useState('');
    const [showMenu, setShowMenu] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollPosition > 100) {
            setChangeBlockHeader('fadeIn');
        } else setChangeBlockHeader('fadeOut');
    }, [scrollPosition]);

    useEffect(() => {
        // Chuyển đổi path thành id (ví dụ: /contact -> #contact)
        const pathToId = location.pathname === '/' ? '#home' : `#${location.pathname.split('/')[1]}`;

        const element = document.querySelector(pathToId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location.pathname]); // Chạy khi path thay đổi

    const handleClick = (path) => {
        navigate(path); // Cập nhật URL (ví dụ: /contact)
        if (showMenu) setShowMenu(''); // Đóng menu mobile
    };

    return (
        <>
            <div
                className={cx(
                    'w-full h-20 fixed top-0 z-20 flex items-center p-3 pr-36 pl-36  ',
                    'max-xs:pr-3 max-xs:pl-3 ',
                    changeBlockHeader,
                )}
            >
                <div className={cx('font-bold text-4xl w-1/4', 'max-xs:text-center max-xs:w-full max-xs:text-3xl ')}>
                    <span className="text-tt-orange">T</span>uan<span className="text-tt-orange">T</span>hanh
                </div>
                <Button
                    onClick={() => {
                        if (!!showMenu) setShowMenu('');
                        else setShowMenu('max-xs:flex');
                    }}
                    className={cx('hidden text-3xl', 'max-xs:block')}
                >
                    <RxTextAlignJustify />
                </Button>

                <div className={cx('w-3/4 flex items-center space-x-10 text-lg font-medium', 'max-xs:hidden')}>
                    <Button onClick={() => handleClick('/')}>Home</Button>
                    <Button onClick={() => handleClick('/about')}>About</Button>
                    <Button onClick={() => handleClick('/skill')}>Skill</Button>
                    <Button onClick={() => handleClick('/project')}>Project</Button>
                    <Button onClick={() => handleClick('/contact')}>Contact</Button>
                    <Button
                        href="../../../File/Nguyen-Tuan-Thanh.pdf"
                        className={cx('border-2 border-tt-orange p-2 pr-5 pl-5')}
                        download="CV_Nguyễn Tuấn Thanh_Web developer.pdf"
                    >
                        Download CV
                    </Button>
                </div>
            </div>
            <div
                className={cx(
                    'w-full hidden items-center pb-5 z-10 flex-col text-lg font-medium fixed top-0 pt-20 bg-white',
                    showMenu,
                )}
            >
                <Button onClick={() => handleClick('/')} className={cx('hover:text-blue-800')}>
                    Home
                </Button>
                <Button onClick={() => handleClick('/about')}>About</Button>
                <Button onClick={() => handleClick('/skill')}>Skill</Button>
                <Button onClick={() => handleClick('/project')}>Project</Button>
                <Button onClick={() => handleClick('/contact')}>Contact</Button>
                <Button
                    href="../../../File/Nguyen-Tuan-Thanh.pdf"
                    className={cx('border-2 border-tt-orange p-2 pr-5 pl-5 max-w-[200px] justify-center')}
                    download="CV_Nguyễn Tuấn Thanh_Web developer.pdf"
                >
                    Download CV
                </Button>
            </div>
        </>
    );
}

export default memo(Header);
