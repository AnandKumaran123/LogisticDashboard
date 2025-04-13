export const mockJSONData = {
    Name: "Chanchal Sunder",
    shipmentsSummary: {
        inTransit: 12,
        deliveredToday: 28,
        delayed: 5,
    },
    drivers: [
        { id: '1', name: 'Malavika Dhananjay', status: 'Active', shipmentId: 'SHIP123', lastSeen: '2 mins ago' },
        { id: '2', name: 'Antony Stanly', status: 'Offline', shipmentId: null, lastSeen: '20 mins ago' },
        { id: '3', name: 'Anish Muringanolil,', status: 'Active', shipmentId: 'SHIP456', lastSeen: 'Just now' },
    ],
    deliveryKpis: {
        onTime: 70,
        delayed: 30,
    },
    alerts: [
        { id: '1', message: 'Shipment #1223 delayed due to weather', timestamp: '10:30 AM' },
        { id: '2', message: 'Driver Ram disconnected for 20 mins', timestamp: '11:00 AM' },
        { id: '3', message: 'Shipment #1240 arrived at hub', timestamp: '11:30 AM' },
    ],
};
