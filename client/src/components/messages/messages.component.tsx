import styles from './message.component.module.scss';
import { useQuery } from 'react-query';

async function fetchData() {
  const result = await fetch('http://localhost:3000/api/posts');
  if (!result.ok) {
    throw new Error('error');
  }
  return result.json();
}

function MessagesComponent() {
  const { status, data } = useQuery('posts', fetchData);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error fetching data</div>;
  }

  return (
    <div className={styles.container}>
      {data && data.map((item, index) => (
        <div key={index} className={styles.messageItem}>
          <img className={styles.authorProfileImage} src="https://placehold.co/50x50" alt="Placeholder user image" />
          <div className={styles.authorContent}>
            <div className={styles.author}>
              <strong>{item.post_author}</strong>
            </div>
            <div className={styles.message}>
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MessagesComponent
