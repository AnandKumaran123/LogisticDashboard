import { StyleSheet, Platform } from 'react-native';


const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 18,
        color: '#3498db',
    },
    container: {
        padding: 16,
    },

    cardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
    },

    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 12,
        color: '#000',
    },
});
export default styles