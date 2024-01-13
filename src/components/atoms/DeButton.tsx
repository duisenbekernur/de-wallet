import cls from 'classnames'

import styles from './de-button.module.scss'

interface IProps {
    text: string;
    icon?: string;
    plain?: boolean;
    width?: number | string;
}

export default function DeButton({plain, text, icon, width}: IProps) {
    return <button className={cls([styles.deButton, plain && styles.plain])}
                   style={{'width': width || '100%'}}>
        {icon && <img width={24} height={24} src={'/icons/' + icon} alt={icon}/>}
        {text}
    </button>
}
