import styles from 'components/Skeleton/Skeleton.module.css'

export default function Skeleton({h1,h2,h3,h4,p,img,miniImg}) {
    return <>
        { h1 ? <div className={[styles.skeleton, styles.skeletonH1].join(" ")}/> : false }
        { h2 ? <div className={[styles.skeleton, styles.skeletonH2].join(" ")}/> : false }
        { h3 ? <div className={[styles.skeleton, styles.skeletonH3].join(" ")}/> : false }
        { h4 ? <div className={[styles.skeleton, styles.skeletonH4].join(" ")}/> : false }
        { p ? <div className={[styles.skeleton, styles.skeletonP].join(" ")}/> : false }
        { img ? <div className={[styles.skeleton, styles.skeletonImg].join(" ")}/> : false }
        { miniImg ? <div className={[styles.skeleton, styles.skeletonMiniImg].join(" ")}/> : false }
        </>
}