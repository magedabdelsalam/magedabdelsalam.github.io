import { useRouter } from 'next/router'
import styles from '../styles/Header.module.css'


function ActiveLink({ children, href }) {
  const router = useRouter()
  const active = router.asPath === href ? styles.active : ''

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} className={active}>
      {children}
    </a>
  )
}

export default ActiveLink