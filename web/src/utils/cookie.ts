export function setCookie(name: string, value: string, days: number) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
}

interface Cookies {
    [key: string]: string;
}

function getCookies(): Cookies {
    return document.cookie.split(';').reduce((cookies: any, cookie: any) => {
        const [name, value] = cookie.trim().split('=');
        cookies[name] = decodeURIComponent(value);
        return cookies;
    }, {});
}

export function getTokenCookie(): string | null {
    const cookies = getCookies();
    return cookies['token'] || null;
}

export function clearCookie(cookieName: string): void {
    document.cookie = `${cookieName}=; expires=Fri, 01 Dec 2023 00:00:00 UTC; path=/;`;
}