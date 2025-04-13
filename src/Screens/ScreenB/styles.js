import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    header: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        left: 6
    },
    alertItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 20,
    },
    alertDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#e67e22',
        marginTop: 6,
        marginRight: 10,
    },
    alertMessage: {
        fontSize: 14,
        color: '#333',
    },
    alertTime: {
        fontSize: 12,
        color: '#888',
        marginTop: 2,
    },
});

export default styles
