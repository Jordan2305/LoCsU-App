import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BusinessCard = ({ business }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{business.name}</Text>
      <Text>{business.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BusinessCard;