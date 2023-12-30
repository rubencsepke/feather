import styles from './form.component.module.scss';

function FormComponent() {

  return (
    <div className={styles.formContainer}>
      <img className={styles.authorProfileImage} src="https://placehold.co/50x50" alt="Placeholder user image" />
        <div className={styles.authorContent}>
          <div className={styles.author}>
              Jon Doe
          </div>
          <form action="" className={styles.form}>
              <textarea name="" id=""></textarea>
              <input type="submit" />
          </form>
        </div>
    </div>
  )
}

export default FormComponent
