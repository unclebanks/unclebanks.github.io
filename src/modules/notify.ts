// Creates a bulma notification
// https://bulma.io/documentation/elements/notification/

type NotifOptions = {
    // color scheme, see documentation link
    type: 'primary' | 'link' | 'info' | 'success' | 'warning' | 'danger',
    // also part of color scheme
    light: boolean,
    // how long to show the notification for
    duration: number,
    // is the content being provided html or plain text?
    isHtml: boolean,
    // show an X in the corner to dismiss?
    closeButton: boolean,
}

const defaultOptions: NotifOptions = {
    type: 'info',
    light: true,
    duration: 2000,
    isHtml: false,
    closeButton: true,
};

const notifContainer = document.getElementById('notifications');

export default function notify(content: string, _options: Partial<NotifOptions> = {}): void {
    const options = {
        ...defaultOptions,
        ..._options,
    };

    const notif = document.createElement('div');
    const contentContainer = document.createElement('div');
    if (options.isHtml) {
        contentContainer.innerHTML = content;
    } else {
        contentContainer.innerText = content;
    }

    notif.classList.add('notification', `is-${options.type}`);
    if (options.light) {
        notif.classList.add('is-light');
    }

    if (options.closeButton) {
        const close = document.createElement('button');
        close.classList.add('delete');
        close.addEventListener('click', () => notif.remove());
        notif.appendChild(close);
    }

    notif.appendChild(contentContainer);
    notifContainer.appendChild(notif);
    setTimeout(() => notif.remove(), options.duration);
}
