import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import { addAlert } from '../../Redux/Alert/alertSlice';
import styles from './styles';

const ScreenB = ({ navigation }) => {
    const dispatch = useDispatch();
    const alerts = useSelector(state => state.alert.alerts);


    const newAlert = {
        id: '5',
        message: 'Shipment #1300 delayed due to heavy traffic',
        timestamp: '12:30 PM',
    };

    // Dispatch addAlert action when button is pressed
    const handleAddAlert = () => {
        dispatch(addAlert(newAlert));
    };
    return (
        <View style={styles.container}>
            {/* Custom Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back-outline" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.title}>Notifications</Text>

            </View>

            {/* <Button title="Add New Alert" onPress={handleAddAlert} /> */}
            {alerts.map((alert) => (
                <View key={alert.id} style={styles.alertItem}>
                    <View style={styles.alertDot} />
                    <View>
                        <Text style={styles.alertMessage}>{alert.message}</Text>
                        <Text style={styles.alertTime}>{alert.timestamp}</Text>
                    </View>
                </View>
            ))}
        </View>
    );
};

export default ScreenB;

