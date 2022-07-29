import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import classnames from 'classnames/bind';
import styles from './Popper.modules.scss';

function Wrapper({ children }) {
    return <div classname={faCircleXmark('wrapper')}>{children}</div>;
}

export default Wrapper;
