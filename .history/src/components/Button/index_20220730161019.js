import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, primary, children, onclick }) {
    let Comp = 'button';
    const props = { onclick };

    if (to) {
        props.to = to;
        comp = Link;
    } else if (href) {
        props.href = href;
    }

    const classes = cx('wrapper');

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
