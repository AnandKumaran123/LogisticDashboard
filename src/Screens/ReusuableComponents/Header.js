import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({ name, currentTime, onBellPress, unreadCount }) => {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.welcome}>
                    <Text style={styles.goodMorning}>Good Morning, </Text>
                    <Text style={styles.name}>{name}</Text>
                </Text>
                <Text style={styles.datetime}>{currentTime.toDateString()} - {currentTime.toLocaleTimeString()}</Text>
            </View>
            <TouchableOpacity onPress={onBellPress}>
                <View style={styles.bellContainer}>
                    <Icon name="notifications-outline" size={24} color="#000" />
                    {unreadCount > 0 && (
                        <View style={styles.notificationBadge}>
                            <Text style={styles.badgeText}>{unreadCount}</Text>
                        </View>
                    )}
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1
    },
    welcome: {
        flexDirection: 'row', // To align both parts horizontally
        fontSize: 20,
        fontWeight: 'bold',
    },
    goodMorning: {
        color: 'violet',
    },
    name: {
        color: '#3498db',
    },
    datetime: {
        fontSize: 14,
        color: '#000',
    },
    bellContainer: {
        position: 'relative',
    },
    notificationBadge: {
        backgroundColor: 'red',
        borderRadius: 10,
        paddingHorizontal: 6,
        paddingVertical: 2,
        position: 'absolute',
        top: -6,
        right: -6,
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default Header;
