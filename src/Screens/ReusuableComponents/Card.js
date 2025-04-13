import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Card = ({ icon, label, value, backgroundColor }) => {
    return (
        <View style={[styles.card, { backgroundColor }]}>
            <Icon name={icon} size={30} color="#fff" />
            <Text style={styles.cardLabel}>{label}</Text>
            <Text style={styles.cardValue}>{value}</Text>
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    card: {
        width: '30%',
        padding: 16,
        borderRadius: 18,
        alignItems: 'center',
    },
    cardLabel: {
        color: '#fff',
        marginTop: 10,
    },
    cardValue: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 4,
    },
});
