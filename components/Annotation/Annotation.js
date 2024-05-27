import { useState } from 'react';
import styles from 'components/Annotation/Annotation.module.css'

export default function Annotation({ children }) {

    const [isOn, setIsOn] = useState(false)
    const annotation = () => {setIsOn(!isOn)}

    return (
        <div className={`${styles.annotate} ${isOn ? styles.on : styles.off}`} onClick={annotation}>
            {children}
        </div>
    )
};
