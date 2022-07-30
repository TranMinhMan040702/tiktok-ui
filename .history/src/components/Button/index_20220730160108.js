import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, children, onclick }) {
    let Comp = 'button';

    const classes = cx('wrapper');

    return <Comp className={classes}></Comp>;
}

export default Button;
