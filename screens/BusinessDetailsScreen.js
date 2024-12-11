import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { mockBusinesses } from '../data/mockBusinesses';

export default function BusinessDetailsScreen({ route }) {
  // En una prueba real, se pasaría el ID del negocio (cuando se agregue la BD)
  const business = mockBusinesses[0];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.businessName}>{business.name}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.detailSection}>
          <Text style={styles.sectionTitle}>Descripción</Text>
          <Text>{business.description}</Text>
        </View>

        <View style={styles.detailSection}>
          <Text style={styles.sectionTitle}>Información de Contacto</Text>
          <Text>Especialidad: {business.specialty}</Text>
          <Text>Teléfono: {business.contact}</Text>
          <Text>Dirección: {business.address}</Text>
        </View>

        <View style={styles.detailSection}>
          <Text style={styles.sectionTitle}>Horarios</Text>
          <Text>Lunes a Viernes: 9:00 AM - 6:00 PM</Text>
          <Text>Sábados: 10:00 AM - 2:00 PM</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
  },
  businessName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  detailsContainer: {
    padding: 15,
  },
  detailSection: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  }
});