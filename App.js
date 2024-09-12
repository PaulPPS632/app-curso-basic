import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

// Importa las imágenes
import homeImage from './assets/logogif.webp';
import secondImage from './assets/4.png';
import thirdImage from './assets/1.png';
import finalImage from './assets/2.png';

// Pantallas
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Sección superior con imagen */}
      <View style={styles.topSection}>
        <Image source={homeImage} style={styles.image} />
      </View>

      {/* Sección inferior con fondo y contenido */}
      <View style={styles.bottomSection}>
        <Text style={styles.title}>Bienvenido a tu CODELEDGE</Text>
        <Text style={styles.subtitle}>Desbloquea Tu Potencial</Text>
        <Text style={styles.description}>
          "Empieza tu viaje en el mundo de la programación. Aprende a tu propio ritmo y con los mejores recursos diseñados para ti."
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('segundo')}>
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function SecondScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Sección superior con imagen */}
      <View style={styles.topSection}>
        <Image source={secondImage} style={styles.image} />
      </View>

      {/* Sección inferior con fondo y contenido */}
      <View style={styles.bottomSection}>
        <Text style={styles.title}>Conocimiento a tu Alcance</Text>
        <Text style={styles.description}>
          "Explora contenidos detallados y bien estructurados que te ayudarán a dominar cada concepto. Aprende leyendo guías claras y comprensibles."
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('tercero')}>
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function ThirdScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.topSection}>
        <Image source={thirdImage} style={styles.image} />
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.title}>Construye Tu Futuro</Text>
        <Text style={styles.description}>
          "Desde lo básico hasta lo avanzado, sigue tu propio camino y lleva tus habilidades al siguiente nivel con Codeledge."
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Final')}>
          <Text style={styles.buttonText}>Comenzar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function FinalScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.topSection}>
        <Image source={finalImage} style={styles.image} />
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.title}>¡Gracias por llegar al final!</Text>
        <Text style={styles.description}>
          "Estamos emocionados de verte crecer en tu viaje de programación. ¡Nos vemos pronto!"
        </Text>
      </View>
    </View>
  );
}

// Stack Navigator
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="inicio" component={HomeScreen} />
        <Stack.Screen name="segundo" component={SecondScreen} />
        <Stack.Screen name="tercero" component={ThirdScreen} />
        <Stack.Screen name="Final" component={FinalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FF', // Fondo claro para la parte superior
  },
  topSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Fondo blanco para la parte superior
  },
  bottomSection: {
    flex: 1.8,
    backgroundColor: '#6C63FF', // Fondo de color morado para la parte inferior
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 455,
    height: 285,
    marginBottom: 20,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#FFFFFF', // Texto blanco para contraste
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFFFFF', // Texto blanco
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: '#FFFFFF', // 
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#FFFFFF', // Botón blanco
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: '#6C63FF', // Texto morado
    fontSize: 18,
    fontWeight: '600',
  },
});

export default App;

