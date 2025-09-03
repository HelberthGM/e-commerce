import styles from './HomeCard.module.css'
import { Link } from 'react-router-dom'

const HomeCard = () => {
  return (
    <div className={`col-md-3 ${styles.col}`}>
      <Link to='/detail' className={styles.link}>
      <div className={styles.card}>
        <div className={styles.cardImgWrapper}>
        <img src="{product.image}" alt="{product.title}" className={styles.cardImgTop} />
        </div>
        <div className={styles.cardBody}>
          <h3 className={`${styles.title} mb-1`}>product.title</h3>
          <p className={styles.cardText}>$ product.price</p>
        </div>
      </div>
      
      </Link>
    </div>
  )
}

export default HomeCard