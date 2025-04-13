import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DriverCard = ({ name, status, shipmentId, lastSeen }) => {
    return (
        <View style={styles.driverCard}>
            <View style={styles.driverLeft}>
                <View
                    style={[
                        styles.statusDot,
                        { backgroundColor: status === 'Active' ? 'green' : 'gray' },
                    ]}
                />
                <View>
                    <Text style={styles.driverName}>{name}</Text>
                    <Text style={styles.shipmentId}>
                        {shipmentId ? `Shipment: ${shipmentId}` : 'No Active Shipment'}
                    </Text>
                </View>
            </View>
            <Text style={styles.lastSeen}>{lastSeen}</Text>
        </View>
    );
};

export default DriverCard;

const styles = StyleSheet.create({
    driverCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        padding: 12,
        borderRadius: 10,
        marginBottom: 10,
    },
    driverLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statusDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginRight: 10,
    },
    driverName: {
        fontWeight: 'bold',
        fontSize: 16,
        color: "#000"
    },
    shipmentId: {
        color: '#666',
        fontSize: 12,
    },
    lastSeen: {
        fontSize: 12,
        color: '#999',
    },
});
