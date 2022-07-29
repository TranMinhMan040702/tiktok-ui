import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import className from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = className.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d160e7b575ab7787c29c4f4bec78e141.jpeg?x-expires=1659261600&x-signature=iNYfi1rjE%2BFUffPWtrLwN%2BjLwPY%3D"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>Nguyen Van A</p>
                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
