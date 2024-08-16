document.addEventListener('DOMContentLoaded', function() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (!loggedInUser) {
        window.location.href = 'login.html';
        return;
    }

    //account details
    document.getElementById('accountName').textContent = `${loggedInUser.firstName} ${loggedInUser.lastName}`;
    document.getElementById('accountEmail').textContent = loggedInUser.email;
    document.getElementById('accountAddress').textContent = loggedInUser.address || 'No address provided';
    document.getElementById('accountPhone').textContent = loggedInUser.phone || 'No phone number provided';

    //table
    const ordersTableBody = document.getElementById('orderTableBody');
    ordersTableBody.innerHTML = '';

    if (loggedInUser.orders && loggedInUser.orders.length > 0) {
        loggedInUser.orders.forEach(order => {
            const rowHtml = `
                <tr class="border-b border-gray-200">
                    <td class="p-4 border border-gray-300">${order.id}</td>
                    <td class="p-4 border border-gray-300">${order.date}</td>
                    <td class="p-4 border border-gray-300 text-red-500" data-i18n="order_status_${order.status.toLowerCase()}">${order.status}</td>
                    <td class="p-4 border border-gray-300">${order.total}</td>
                    <td class="p-4 border border-gray-300">${order.debt}</td>
                </tr>
            `;
            ordersTableBody.innerHTML += rowHtml;
        });
    } else {
        ordersTableBody.innerHTML = `
            <tr>
                <td colspan="5" class="p-4 text-gray-500" data-i18n="no_orders_found">No orders found</td>
            </tr>
        `;
    }

    translatePage();
});
