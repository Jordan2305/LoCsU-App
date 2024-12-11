import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { mockBusinesses } from '../data/mockBusinesses';

export default function AppointmentCard({ appointment, onPress }) {
  // Buscar el negocio correspondiente a esta cita
  const business = mockBusinesses.find(b => b.id === appointment.businessId);

  return (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => onPress(appointment, business)}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.businessName}>{business.name}</Text>
        <Text style={[
          styles.statusText, 
          appointment.status === 'Confirmada' 
            ? styles.confirmedStatus 
            : styles.pendingStatus
        ]}>
          {appointment.status}
        </Text>
      </View>
      
      <View style={styles.cardBody}>
        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>Fecha:</Text>
          <Text>{appointment.date}</Text>
        </View>
        
        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>Hora:</Text>
          <Text>{appointment.time}</Text>
        </View>
        
        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>Cliente:</Text>
          <Text>{appointment.clientName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 10,
  },
  businessName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusText: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
  confirmedStatus: {
    backgroundColor: '#d4edda',
    color: '#155724',
  },
  pendingStatus: {
    backgroundColor: '#fff3cd',
    color: '#856404',
  },
  cardBody: {
    marginTop: 5,
  },
  detailContainer: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  detailLabel: {
    fontWeight: 'bold',
    marginRight: 5,
    width: 80,
  }
});