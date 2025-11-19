import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Styles from './AcountItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(Styles);
function AcountItem({ data }) {
    return (
        <Link to={`/profile/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.avatar} />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    <span className={cx('icon-accont')}>{data.tick && <FontAwesomeIcon icon={faCheckCircle} />}</span>
                </h4>
                <span className={cx('userName')}>{data.nickname}</span>
            </div>
        </Link>
    );
}
AcountItem.propTypes = { data: PropTypes.object.isRequired };
export default AcountItem;
