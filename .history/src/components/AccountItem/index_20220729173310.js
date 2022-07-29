import className from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = className.bind();

function AccountItem() {
    return <div className={cx('wrapper')}></div>;
}

export default AccountItem;
