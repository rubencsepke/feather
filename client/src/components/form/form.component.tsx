import { useState } from 'react';
import { Post } from '../../model/post.model';
import styles from './form.component.module.scss';
import { getRemainCharacters, isMaxCharacters } from '../../utils/calc-characters';

async function postData(data: Post) {
  const result = await fetch('http://localhost:3000/api/posts', {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  if (!result.ok) {
    throw new Error('error');
  }
  return result.json();
}

function FormComponent() {
  const [content, setContent] = useState<string>("");
  const [remain, setRemain] = useState<number>(20);

  const handleChange = (text: string) => {
    const isMax = isMaxCharacters({text, maxCharacterLength: 20});
    setRemain(getRemainCharacters(text, 20));
    if(!isMax) {
      setContent(text);
    }
  }

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    const date: Date = new Date();
    if(event.currentTarget) {
      const data: Post = {
        content,
        post_author: {
          username: "65b526edaeccb241b06b433c"
        },
        likes: 0,
        date
      }
      postData(data);
      setContent("");
    }
  }

  return (
    <div className={styles.formContainer}>
      <img className={styles.authorProfileImage} src="https://placehold.co/50x50" alt="Placeholder user image" />
      <div className={styles.authorContent}>
        <form onSubmit={(e) => handleSubmit(e)} method="POST" className={styles.form}>
          <input type="text" name="content" value={content} onChange={(e) => handleChange(e.target.value)} placeholder='Start a thread...' />
          <span className={styles.remainCharacters}>{remain}</span>
          <button className={styles.submit} type="submit">Post</button>
        </form>
      </div>
    </div>
    )
}

export default FormComponent
