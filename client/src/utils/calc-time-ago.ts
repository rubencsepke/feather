export const timeAgo = (postDate: Date): string => {
    const currentDate = new Date().valueOf();
    const postedDate = new Date(postDate).valueOf();
    const seconds = Math.floor((currentDate - postedDate) / 1000);

    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
        return interval + ' y';
    }

    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + 'm';
    }

    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + 'd';
    }

    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + 'h';
    }

    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + 'm';
    }

    return Math.floor(seconds) + 's';
}