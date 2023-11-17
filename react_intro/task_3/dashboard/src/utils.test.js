import { getFullYear, getFooterCopy } from './utils';
import getLatestNotification from './utils';

it('current year', () => {
    expect(getFullYear()).toEqual(2023);
});

it('getFooterCopy', () => {
    expect(getFooterCopy()).toEqual('Holberton School main dashboard');
});

it('getLatestNotification', () => {
    expect(getLatestNotification()).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
});