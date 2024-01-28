interface FetchApiProps {
    url: string,
    method: RequestInit["method"],
    body: BodyInit | null | undefined
}

export const fetchApi = async ({url, method, body}: FetchApiProps) => {
    const result = await fetch(url, {
        method,
        mode: "cors",
        headers: {"Content-Type": "application/json"},
        body
    });
    if (!result.ok) {
        throw new Error('error');
    }
    return result;
}