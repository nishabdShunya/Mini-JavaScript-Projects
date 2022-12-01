const btn = document.getElementById('btn');
const notificationList = document.getElementById('notification-list');

btn.addEventListener('click', () => {
    const notificationItem = document.createElement('li');
    notificationItem.innerHTML = 'Some Text';
    notificationList.appendChild(notificationItem);
    setTimeout(() => {
        notificationList.removeChild(notificationItem);
    }, 3000);
});

