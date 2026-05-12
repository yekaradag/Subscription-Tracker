// Tarih farkını gün cinsinden hesaplayan yardımcı fonksiyon
const calculateDaysLeft = (expiryDate) => {
    const today = new Date();
    const expiration = new Date(expiryDate);
    const diffInTime = expiration.getTime() - today.getTime();
    const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24));
    return diffInDays > 0 ? diffInDays : 0;
};

// Abonelik verisini işleyen servis fonksiyonu
const processSubscriptionData = (subscriptions) => {
    return subscriptions.map(sub => ({
        ...sub,
        daysLeft: calculateDaysLeft(sub.expiryDate),
        status: calculateDaysLeft(sub.expiryDate) > 0 ? "Aktif" : "Süresi Doldu"
    }));
};

module.exports = {
    processSubscriptionData
};