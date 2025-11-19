// hooks
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
// đường dẫn các trang
import Config from '~/config';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/images';
// import { Wrapper as PopperWrapper } from '~/components/Popper';
// import AcountItem from '~/components/AcountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { UploadIcon, MessageIcon, InboxIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);
const currentUser = true;
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'english',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'tiếng việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'keyboard shortcuts',
    },
];

function Header() {
    const handleMenuChange = (MenuItem) => {
        console.log(MenuItem);
    };
    const userMenu = [
        { icon: <FontAwesomeIcon icon={faUser} />, title: 'View profile ', to: '/feedback' },
        { icon: <FontAwesomeIcon icon={faCoins} />, title: 'Get coint', to: '/coint' },
        { icon: <FontAwesomeIcon icon={faGear} />, title: 'Settings', to: '/settings' },
        ...MENU_ITEMS,
        { icon: <FontAwesomeIcon icon={faSignOut} />, title: 'Log out', to: '/logout', separate: true },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}

                <div className={cx('logo')}>
                    <Link to={Config.routes.home}>
                        <img src={images.logo} alt="TIKTOK" />
                    </Link>
                </div>

                {/* ô tìm kiếm */}
                <Search />
                {/* left header */}

                <div className={cx('actions')}>
                    {currentUser ? (
                        <div className={cx('layout_icon')}>
                            <div>
                                <Tippy delay={[0, 0]} content="Upload video">
                                    <button className={cx('actions-btn')}>
                                        <MessageIcon />
                                    </button>
                                </Tippy>
                            </div>
                            <div>
                                <Tippy delay={[0, 0]} content="Upload video">
                                    <button className={cx('actions-btn')}>
                                        <UploadIcon />
                                    </button>
                                </Tippy>
                            </div>
                            <div>
                                <Tippy delay={[0, 0]} content="Upload video">
                                    <button className={cx('actions-btn')}>
                                        <InboxIcon />
                                        <span className={cx('badge')}>12</span>
                                    </button>
                                </Tippy>
                            </div>
                        </div>
                    ) : (
                        <>
                            <Button text>Log in</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    {/* avatar */}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('avatar')}
                                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/7e304bd6293a7532148517663d1f9811~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=f88893ca&x-expires=1762696800&x-signature=Qiyv%2F8cNy2J4CuHE5gqzFFxO7xk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                                alt="nguyen van a"
                                fallback="https://files.fullstack.edu.vn/f8-prod/user_photos/285160/63c81630e344a.jpg"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
