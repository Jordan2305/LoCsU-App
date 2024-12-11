import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { mockBusinesses } from '../data/mockBusinesses';
import { mockAppointments } from '../data/mockAppointments';

export default function BusinessMainScreen() {
  // Asumimos que trabajamos con el primer negocio de la lista
  const business = mockBusinesses[0];
  const businessAppointments = mockAppointments.filter(
    appointment => appointment.businessId === business.id
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.businessInfoSection}>
        <Text style={styles.businessName}>{business.name}</Text>
        <Text style={styles.businessDescription}>{business.description}</Text>
        <View style={styles.contactInfo}>
          <Text>Especialidad: {business.specialty}</Text>
          <Text>Contacto: {business.contact}</Text>
          <Text>Dirección: {business.address}</Text>
        </View>
      </View>

      <View style={styles.appointmentsSection}>
        <Text style={styles.sectionTitle}>Citas Programadas</Text>
        {businessAppointments.map(appointment => (
          <View key={appointment.id} style={styles.appointmentCard}>
            <Text>Cliente: {appointment.clientName}</Text>
            <Text>Fecha: {appointment.date}</Text>
            <Text>Hora: {appointment.time}</Text>
            <Text>Estado: {appointment.status}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  businessInfoSection: {
    backgroundColor: 'white',
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  businessName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  businessDescription: {
    fontSize: 16,
    marginBottom: 15,
  },
  contactInfo: {
    marginTop: 10,
  },
  appointmentsSection: {
    backgroundColor: 'white',
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  appointmentCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
  }
});