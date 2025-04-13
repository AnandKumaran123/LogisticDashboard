// src/redux/alerts/alertsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    alerts: [
        { id: '1', message: 'Shipment #1223 delayed due to weather', timestamp: '10:30 AM' },
        { id: '2', message: 'Driver Ram disconnected for 20 mins', timestamp: '11:00 AM' },
        { id: '3', message: 'Shipment #1240 arrived at hub', timestamp: '11:30 AM' },
    ]
};

const alertsSlice = createSlice({
    name: 'alerts',
    initialState,
    reducers: {
        addAlert(state, action) {
            state.alerts.unshift(action.payload);
        },
    },
});

export const { addAlert } = alertsSlice.actions;
export default alertsSlice.reducer;
