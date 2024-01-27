import { useState } from 'react';
import {User} from "../../model/user.model.ts";

async function postUser(data: User) {
    const result = await fetch('http://localhost:3000/api/user', {
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


function Registration() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = (event: Event) => {
        event.preventDefault();
        if(event.currentTarget) {
            const data: User = {
                username,
                password
            }
            postUser(data);
            setUsername("");
            setPassword("");
        }
    }

    return (
        <div>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
        </div>
        )
}

export default Registration
