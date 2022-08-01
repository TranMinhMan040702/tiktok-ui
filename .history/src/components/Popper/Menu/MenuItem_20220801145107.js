import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

function MenuItem({ data }) {
    return (
        <Button leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
