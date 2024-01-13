import cls from 'classnames'

import styles from './de-page-changer-item.module.scss'
import {Link} from "react-router-dom";

interface IProps {
    text: string;
    href: string;
    active?: boolean;
}

export default function DePageChangerItem({text, active, href}: IProps) {

    return (
        <Link to={href} className={cls([styles.item, active && styles.active])}>
            <button>
                {text}
            </button>
        </Link>
    )
}
