import className from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = className.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="" alt="Hoa" />
        </div>
    );
}

export default AccountItem;
