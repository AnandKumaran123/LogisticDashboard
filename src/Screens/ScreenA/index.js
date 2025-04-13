import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    ActivityIndicator,
    RefreshControl,
} from 'react-native';
import { mockJSONData } from '../MockJSONData/mockJSONData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../ReusuableComponents/Header';
import Card from '../ReusuableComponents/Card';
import DriverCard from '../ReusuableComponents/DriverCard';
import PieChartSection from '../ReusuableComponents/PieChartSection';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const DashboardScreen = () => {
    const navigation = useNavigation();
    const [currentTime, setCurrentTime] = useState(new Date());
    const [alertcount, setalertcount] = useState(3);
    const [data, setData] = useState(null);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        // Fetch data from AsyncStorage or simulate fetching mock data
        const fetchData = async () => {
            try {
                const cachedData = await AsyncStorage.getItem('dashboardData');
                if (cachedData) {
                    // If data exists in AsyncStorage, use it (first time it will be null)
                    setData(JSON.parse(cachedData));
                } else {
                    // Simulate fetching data (could be replaced with an actual API call)
                    setTimeout(() => {
                        setData(mockJSONData); // Simulating an API call by setting mock data after a delay
                        // Cache the data in AsyncStorage for future use
                        AsyncStorage.setItem('dashboardData', JSON.stringify(mockJSONData)); // Save data to AsyncStorage
                    }, 1000);
                }
            } catch (error) {
                console.error('Error fetching data from AsyncStorage:', error);
            }
        };

        fetchData();

        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            const updatedData = {
                ...mockJSONData,
                drivers: [
                    ...mockJSONData.drivers,
                    {
                        id: 'd4',
                        name: 'AnandKumaran',
                        status: 'Active',
                        shipmentId: 'SHP1247',
                        lastSeen: 'Just now',
                    },
                    {
                        id: 'd5',
                        name: 'Arun Prakash',
                        status: 'Idle',
                        shipmentId: null,
                        lastSeen: 'Just now',
                    },
                ],
                shipmentsSummary: {
                    ...mockJSONData.shipmentsSummary,
                    inTransit: mockJSONData.shipmentsSummary.inTransit + 2,
                    delayed: mockJSONData.shipmentsSummary.delayed + 1,
                },
                deliveryKpis: {
                    onTime: 65, // simulate change
                    delayed: 35,
                },
            };

            setData(updatedData);
            setRefreshing(false);
        }, 1000);
    };

    const onBellPress = () => {
        setalertcount(0)
        navigation.navigate('screenB');
    };

    if (!data) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#3498db" />
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        );
    }

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            {/* Header */}
            <Header
                name={data.Name}
                currentTime={currentTime}
                onBellPress={onBellPress}
                unreadCount={alertcount}
            />

            {/* Shipment Summary Cards */}
            <View style={styles.cardRow}>
                <Card
                    icon="car-outline"
                    label="In Transit"
                    value={data.shipmentsSummary.inTransit}
                    backgroundColor="#3498db"
                />
                <Card
                    icon="checkmark-done-outline"
                    label="Delivered"
                    value={data.shipmentsSummary.deliveredToday}
                    backgroundColor="#2ecc71"
                />
                <Card
                    icon="alert-circle-outline"
                    label="Delayed"
                    value={data.shipmentsSummary.delayed}
                    backgroundColor="#e74c3c"
                />
            </View>

            {/* Driver Activity*/}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Driver Activity</Text>
                {data.drivers.map(driver => (
                    <DriverCard
                        key={driver.id}
                        name={driver.name}
                        status={driver.status}
                        shipmentId={driver.shipmentId}
                        lastSeen={driver.lastSeen}
                    />
                ))}
            </View>

            {/* PieChart*/}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Delivery KPIs</Text>
                <PieChartSection
                    onTime={data.deliveryKpis.onTime}
                    delayed={data.deliveryKpis.delayed}
                />
            </View>
        </ScrollView>
    );
};

export default DashboardScreen;


