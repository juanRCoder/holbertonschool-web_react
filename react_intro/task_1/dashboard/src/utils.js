function getFullYear() {
    const now = new Date();
    return now.getFullYear();
}

function getFooterCopy(isIndex) {
    if (isIndex) {
        return 'Holberton School';
    }
    return 'Holberton School main dashboard';
}

export {getFullYear, getFooterCopy};