import classnames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classnames.bind(styles);

function Wrapper({ children }) {
    return <div classname={cx('wrapper')}>{children}</div>;
}

export default Wrapper;
