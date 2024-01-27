import styles from './posts.component.module.scss';
import {useGetPosts} from "../../hooks/usePosts.hook.ts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import {timeAgo} from "../../utils/calc-time-ago.ts";

function PostsComponent() {
  const { posts, error, isLoading } = useGetPosts();

  if(isLoading) {
    return <div>Loading...</div>
  }

  if(error) {
    return <div>Error</div>
  }

  if(!posts) {
    return <div>No posted data!</div>;
  }

  return (
    <div className={styles.container}>
      {posts.map((post, index) => (
        <div key={index} className={styles.postItem}>
          <img className={styles.authorProfileImage} src="https://placehold.co/50x50" alt="Placeholder user image" />
          <div className={styles.authorContent}>
            <div className={styles.author}>
              <strong>{post.post_author.username}</strong>
              <time>{timeAgo(post.date)}</time>
            </div>
            <div className={styles.post}>
              <p>{post.content}</p>
            </div>
            <div className={styles.actions}>
              <button title="Like" className={styles.actionButton}><FontAwesomeIcon icon={icon({name: 'heart', style: 'regular'})} /></button>
              <button title="Reply" className={styles.actionButton}><FontAwesomeIcon icon={icon({name: 'comment', style: 'regular'})} /></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostsComponent
