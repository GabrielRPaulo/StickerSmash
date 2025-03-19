import { Text, View, StyleSheet, Image, Linking, ScrollView } from 'react-native';
import React from 'react';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: 'https://docs.expo.dev/static/images/tutorial/logo.png' }} style={styles.image} />
      <Text style={styles.title}>Sobre o Aplicativo</Text>
      <Text style={styles.text}>Este aplicativo foi desenvolvido como parte de um tutorial introdutório sobre o uso do React Native e do Expo para criar aplicativos universais que funcionam no Android, iOS e na web. O tutorial aborda desde a criação de um novo projeto até a implementação de navegação, layout com flexbox, seleção de imagens, modais, gestos, captura de tela e manejo de diferenças entre plataformas.</Text>
      <Text style={styles.text}>Para mais informações, visite o tutorial oficial do Expo:</Text>
      <Text style={styles.link} onPress={() => Linking.openURL('https://docs.expo.dev/tutorial/introduction/')}>Tutorial: Usando React Native e Expo</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#1e1e2e',
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#d3d3d3',
    textAlign: 'justify',
    marginBottom: 20,
  },
  link: {
    fontSize: 16,
    color: '#1e90ff',
    textDecorationLine: 'underline',
  },
});
