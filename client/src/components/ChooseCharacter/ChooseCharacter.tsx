import styles from './ChooseCharacter.module.css'

export function ChooseCharacter() {
  return (
    <div className={styles.container}>
      <h3>Выберите персонажа</h3>
      <div className={styles.characters}>
        <div className={styles.male}></div>
        <div className={styles.male}></div>
      </div>
    </div>
  )
}
