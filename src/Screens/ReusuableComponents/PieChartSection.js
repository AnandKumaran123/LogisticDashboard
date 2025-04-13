import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

const PieChartSection = ({ onTime, delayed }) => {
    return (
        <View style={styles.kpiContainer}>
            <PieChart
                style={{ height: 180, width: 180 }}
                data={[
                    {
                        key: 1,
                        value: onTime,
                        svg: { fill: '#2ecc71' },
                        arc: { outerRadius: '100%', cornerRadius: 6 },
                    },
                    {
                        key: 2,
                        value: delayed,
                        svg: { fill: '#e74c3c' },
                        arc: { outerRadius: '100%', cornerRadius: 6 },
                    },
                ]}
            />
            <View style={styles.kpiLabels}>
                <Text style={{ color: '#2ecc71' }}>● On Time: {onTime}%</Text>
                <Text style={{ color: '#e74c3c' }}>● Delayed: {delayed}%</Text>
            </View>
        </View>
    );
};

export default PieChartSection;

const styles = StyleSheet.create({
    kpiContainer: {
        alignItems: 'center',
        marginTop: 12,
    },
    kpiLabels: {
        marginTop: 10,
        alignItems: 'center',
    },
});
