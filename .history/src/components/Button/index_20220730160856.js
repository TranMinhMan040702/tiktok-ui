import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, primary, children, onclick }) {
    let Comp = 'button';
    const props = {};

    if (to) {
    }

    const classes = cx('wrapper');

    return (
        <Comp className={classes}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
