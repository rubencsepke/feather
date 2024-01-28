import { useState } from 'react';
import {User} from "../../model/user.model.ts";
import styles from "./registration.module.scss";
import {fetchApi} from "../../utils/fetch-api.ts";

async function postUser(data: User) {
    fetchApi({url: 'http://localhost:3000/api/user', method: "POST", body: JSON.stringify(data)})
        .then(result => result.json());
}


function Registration() {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = (event: Event) => {
        event.preventDefault();
        if(event.currentTarget) {
            const data: User = {
                username,
                email,
                password
            }
            postUser(data);
            setUsername("");
            setEmail("");
            setPassword("");
        }
    }

    return (
        <div className={styles.registration}>
            <h1>Registration</h1>
            <form className={styles.registrationForm} onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.formGroup}>
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className={styles.formGroup}>
                    <label>Email</label>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={styles.formGroup}>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        )
}

export default Registration
