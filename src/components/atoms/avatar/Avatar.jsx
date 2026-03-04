import styles from './Avatar.module.scss'

const Avatar = ({avatar}) => {
  return (
    <img src={avatar} alt="Avatar" className={styles.avatar}/>
  )
}

export default Avatar