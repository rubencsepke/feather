import styles from './message.component.module.scss';

function MessagesComponent() {

  return (
    <div className={styles.container}>
        <div className={styles.messageItem}>
            <img className={styles.authorProfileImage} src="https://placehold.co/50x50" alt="Placeholder user image" />
            <div className={styles.authorContent}>
                <div className={styles.author}>
                    Jon Doe
                </div>
                <div className={styles.message}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque consequatur, ducimus temporibus voluptates soluta mollitia odio nulla deleniti voluptatem? Quae rerum earum magni illum commodi? Sed perferendis tempora consectetur quidem.</p>
                </div>
            </div>
        </div>
        <div className={styles.messageItem}>
            <img className={styles.authorProfileImage} src="https://placehold.co/50x50" alt="Placeholder user image" />
            <div className={styles.authorContent}>
                <div className={styles.author}>
                    Jon Doe
                </div>
                <div className={styles.message}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque consequatur, ducimus temporibus voluptates soluta mollitia odio nulla deleniti voluptatem? Quae rerum earum magni illum commodi? Sed perferendis tempora consectetur quidem.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MessagesComponent
