async function fetchSubscriptions() {
    try {
        const response = await fetch('/api/subscriptions');
        const data = await response.json();
        
        const tableBody = document.getElementById('sub-table-body');
        tableBody.innerHTML = ''; // Tabloyu temizle

        data.forEach(sub => {
            const row = `
                <tr>
                    <td>${sub.name}</td>
                    <td>${sub.price} ₺</td>
                    <td>${sub.expiryDate}</td>
                    <td>${sub.daysLeft} Gün</td>
                    <td><span class="status-${sub.status.toLowerCase().replace(' ', '-')}">${sub.status}</span></td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    } catch (error) {
        console.error('Veri çekilirken hata oluştu:', error);
    }
}

// Sayfa yüklendiğinde verileri getir
fetchSubscriptions();