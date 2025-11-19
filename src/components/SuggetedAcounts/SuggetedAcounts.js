import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Styles from './SuggetedAcounts.module.scss';
import AcountItem from './AcountItems';
const cx = classNames.bind(Styles);

function SuggetedAcounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AcountItem />
            <AcountItem />
            <AcountItem />
            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}
SuggetedAcounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggetedAcounts;
