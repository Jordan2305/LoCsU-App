import React, { useRef, useEffect } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Dimensions, 
  Animated 
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen({ navigation }) {
  // Crear referencias de animación para múltiples rectángulos
  const rectanglesCount = 20;
  const animatedValues = useRef(
    Array(rectanglesCount).fill().map(() => new Animated.Value(0))
  ).current;

  useEffect(() => {
    // Animaciones de los rectángulos
    const animations = animatedValues.map((animatedValue, index) => {
      // Alternar dirección basado en el índice par/impar
      return Animated.loop(
        Animated.sequence([
          Animated.timing(animatedValue, {
            toValue: index % 2 === 0 ? 1 : -1,
            duration: 5000 + (index * 200),
            useNativeDriver: true
          })
        ])
      );
    });

    // Iniciar todas las animaciones simultáneamente
    Animated.parallel(animations).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* Rectángulos animados en el fondo */}
      {animatedValues.map((animatedValue, index) => {
        const interpolatedX = animatedValue.interpolate({
          inputRange: [-1, 0, 1],
          outputRange: [-width, 0, width]
        });

        return (
          <Animated.View 
            key={index}
            style={[
              styles.rectangle, 
              { 
                width: 50 + Math.random() * 30,
                height: 20 + Math.random() * 20,
                backgroundColor: `rgba(183,182,183,${0.1 + Math.random() * 0.2})`,
                top: 50 + (index * 30),
                transform: [
                  { translateX: interpolatedX }
                ]
              }
            ]} 
          />
        );
      })}

      {/* Contenido superpuesto */}
      <View style={styles.contentOverlay}>
        <Text style={styles.title}>Agenda de Negocios</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('BusinessMain')}
        >
          <Text style={styles.buttonText}>Ingresar como Negocio</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('UserMain')}
        >
          <Text style={styles.buttonText}>Ingresar como Usuario</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    overflow: 'hidden',
  },
  rectangle: {
    position: 'absolute',
    borderRadius: 5,
    left: -50,
  },
  contentOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333', 
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    width: '70%',
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});