import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from 'react-native';

import globalStyles from '../../styles/globalStyles';

class InfoScreen extends React.Component {
  static navigationOptions = ({navigation}) =>
    ({
      title: 'Informazioni su spazio rap',
    });

  render() {
    return (
      <ScrollView style={[styles.box, globalStyles.hiddenBox]}>
        <Text style={styles.title}>autore</Text>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:riccardo.graziosi97@gmail.com')}>
          <Text style={styles.body}>L'app è stata creata da 🔗Riccardo Graziosi.</Text>
        </TouchableOpacity>

        <Text style={styles.title}>crediti</Text>
        <Text style={styles.title2}>logo</Text>
        <Text style={styles.body}>
          Il logo dell'app è stato realizzato grazie all'Android Asset Studio (creato da Roman Nurik),
          utilizzando l'immagine del ragazzo con le cuffie creata da Freepik di www.flaticon.com
        </Text>
        <Text style={styles.title2}>immagini</Text>
        <Text style={styles.body}>
          Le immagini delle categorie sono state tutte prese da www.flaticon.com.
          In particolare gli autori sono i seguenti: cd e vinili (Smashicons), consigli (geotatah),
          humor (Vectors Market), concerti, emergenti, nessuna categoria, news, opinioni,
          spoiler (Freepik).
        </Text>
      </ScrollView>
    );
  }
}

export default InfoScreen;

const styles = StyleSheet.create({
  box: {
    margin: 8,
    padding: 8,
  },

  title: {
    fontSize: 25,
    marginVertical: 4,
  },

  title2: {
    fontSize: 20,
    marginVertical: 4,
  },

  body: {
    fontSize: 17,
  },
});