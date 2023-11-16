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

export default function getLatestNotification() {
    return ('<strong>Urgent requirement</strong>' + ' - ' + 'complete by EOD');
}

export {getFullYear, getFooterCopy };