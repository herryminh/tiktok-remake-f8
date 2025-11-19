import classNames from 'classnames/bind';
import Styles from './SuggetedAcounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../Popper';
import AcountPreview from './AcountPreview';
const cx = classNames.bind(Styles);

function AcountItem() {
    return (
        <>
            <Tippy
                interactive
                delay={[800, 0]}
                placement="bottom"
                offset={[-20, 0]}
                render={(attrs) => (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <>
                            <PopperWrapper>
                                <AcountPreview />
                            </PopperWrapper>
                        </>
                    </div>
                )}
            >
                <div className={cx('acount-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/21f6006b50fafa36648c3ac524725db4~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=428675d2&x-expires=1763715600&x-signature=NNubcyVzdtllm2DmpP6br1N1gVY%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                        alt="hoang tran minh"
                    />
                    <div className={cx('item-infor')}>
                        <p className={cx('nickname')}>
                            <strong>Hoàng trần Minh</strong>
                            <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Minh hoàng ofical</p>
                    </div>
                </div>
            </Tippy>
        </>
    );
}
export default AcountItem;
