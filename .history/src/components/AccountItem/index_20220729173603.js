import className from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = className.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="" alt="Hoa" />
            <div className={cx('info')}>
                <p className={cx('name')}>Nguyen Van A</p>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
