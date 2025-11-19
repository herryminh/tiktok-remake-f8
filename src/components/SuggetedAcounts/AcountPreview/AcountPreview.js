import classNames from 'classnames/bind';
import Styles from './AcountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(Styles);
function AcountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/21f6006b50fafa36648c3ac524725db4~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=428675d2&x-expires=1763715600&x-signature=NNubcyVzdtllm2DmpP6br1N1gVY%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                    alt="hoang tran minh"
                />
                <Button className={cx('follow-btn')} primary>
                    follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>Hoàng trần Minh</strong>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Minh hoàng ofical</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers </span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes </span>
                </p>
            </div>
        </div>
    );
}

export default AcountPreview;
