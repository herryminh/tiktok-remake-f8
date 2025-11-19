import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(Styles);

function Button({
    outline,
    primary,
    to,
    small = false,
    large = false,
    text = false,
    disapled = false,
    rounded = false,
    href,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...resultProps
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...resultProps,
    };

    if (disapled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        [className]: className,
        rounded,
        small,
        large,

        text,
        disapled,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    disapled: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
};

export default Button;
