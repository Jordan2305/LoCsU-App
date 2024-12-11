import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function AppointmentDetailsScreen({ route }) {
  const { appointment, business } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.appointmentCard}>
        <Text style={styles.businessName}>{business.name}</Text>
        
        <View style={styles.detailSection}>
          <Text style={styles.sectionTitle}>Detalles de la Cita</Text>
          <Text>Fecha: {appointment.date}</Text>
          <Text>Hora: {appointment.time}</Text>
          <Text>Estado: {appointment.status}</Text>
        </View>

        <View style={styles.detailSection}>
          <Text style={styles.sectionTitle}>Información del Negocio</Text>
          <Text>Especialidad: {business.specialty}</Text>
          <Text>Dirección: {business.address}</Text>
          <Text>Contacto: {business.contact}</Text>
        </View>

        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Reagendar Cita</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  appointmentCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  businessName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  detailSection: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  actionButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
    alignItems: 'center',
  },
  actionButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});