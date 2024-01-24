import styles from './posts.component.module.scss';
import {useGetPosts} from "../../hooks/usePosts.hook.ts";

function PostsComponent() {
  const { posts } = useGetPosts();

  return (
    <div className={styles.container}>
      {posts.data && posts.data.map((item, index) => (
        <div key={index} className={styles.postItem}>
          <img className={styles.authorProfileImage} src="https://placehold.co/50x50" alt="Placeholder user image" />
          <div className={styles.authorContent}>
            <div className={styles.author}>
              <strong>{item.post_author}</strong>
            </div>
            <div className={styles.post}>
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostsComponent
