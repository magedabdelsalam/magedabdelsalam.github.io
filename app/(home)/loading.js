import Skeleton from 'components/Skeleton/Skeleton'
import cardStyles from 'components/Card/Card.module.css'
import miniCardStyles from 'components/MiniCard/MiniCard.module.css'
import styles from 'app/(home)/Page.module.css'

export default function Loading() {
    return <article>
        <section>
            <Skeleton h2/>
            <div className={styles.minicards}>
                <div className={miniCardStyles.card}>
                    <Skeleton miniImg/>
                    <div className={miniCardStyles.content}>
                        <Skeleton h4/>
                        <Skeleton p/>
                    </div>
                </div>
                <div className={miniCardStyles.card}>
                    <Skeleton miniImg/>
                    <div className={miniCardStyles.content}>
                        <Skeleton h4/>
                        <Skeleton p/>
                    </div>
                </div>
                <div className={miniCardStyles.card}>
                    <Skeleton miniImg/>
                    <div className={miniCardStyles.content}>
                        <Skeleton h4/>
                        <Skeleton p/>
                    </div>
                </div>
                <div className={miniCardStyles.card}>
                    <Skeleton miniImg/>
                    <div className={miniCardStyles.content}>
                        <Skeleton h4/>
                        <Skeleton p/>
                    </div>
                </div>
                <div className={miniCardStyles.card}>
                    <Skeleton miniImg/>
                    <div className={miniCardStyles.content}>
                        <Skeleton h4/>
                        <Skeleton p/>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <Skeleton h2/>
            <div className={styles.cards}>
                <div className={cardStyles.card}>
                    <Skeleton img/>
                    <div className={cardStyles.content}>
                        <Skeleton h3/>
                        <Skeleton p/>
                    </div>
                </div>
            </div>
        </section>
    </article>
  }