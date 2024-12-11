import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { mockAppointments } from '../data/mockAppointments';
import { mockBusinesses } from '../data/mockBusinesses';
import AppointmentCard from '../components/AppointmentCard';

export default function UserMainScreen({ navigation }) {
  const handleAppointmentPress = (appointment, business) => {
    navigation.navigate('AppointmentDetails', { 
      appointment, 
      business 
    });
  };

  const renderAppointmentCard = ({ item }) => {
    const business = mockBusinesses.find(b => b.id === item.businessId);
    
    return (
      <AppointmentCard 
        appointment={item}
        onPress={() => handleAppointmentPress(item, business)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={mockAppointments}
        renderItem={renderAppointmentCard}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  }
});