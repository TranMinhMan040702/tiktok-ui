import className from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = className.bind(styles);

function Sidebar() {
    return <aside className={cx('wrapper')}></aside>;
}

export default Sidebar;
