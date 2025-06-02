import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SettingOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.containerHEJ}>
      <ScrollView
        showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={['#7B7B7B', '#111111', '#111111']}
          locations={[0, 0.2, 1]}
          style={styles.backgroundHEJ}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        />

        <View style={styles.headerHEJ}>
          <Text style={styles.TitleHEJ}>Boa tarde</Text>
          <View style={styles.iconsContainerHEJ}>
            <MaterialIcons
              name="notifications"
              color="white"
              style={styles.iconHEJ}
            />
            <ClockCircleOutlined style={styles.iconHEJ} />
            <TouchableOpacity>
              <SettingOutlined style={styles.iconHEJ} />
            </TouchableOpacity>
          </View>

        </View>
        <View style={styles.sectionHEJ}>
          <View style={styles.rowHEJ}>
            <View style={styles.card2HEJ}>
              <Image
                //source={require('./caminho/para/sua/imagem1.jpg')}
                source={{ uri: 'https://exemplo.com/imagem1.jpg' }}
                style={styles.cardImage2HEJ}
              />
              <Text style={styles.cardTextHEJ}>EP 3 - Música de P...</Text>
            </View>
            <View style={styles.card2HEJ}>
              <Image
                source={{ uri: 'https://exemplo.com/imagem1.jpg' }}
                style={styles.cardImage2HEJ}
              />
              <Text style={styles.cardTextHEJ}>#04 - Positividad...</Text>
            </View>
          </View>

          <View style={styles.rowHEJ}>
            <View style={styles.card2HEJ}>
              <Image
                source={{ uri: 'https://exemplo.com/imagem1.jpg' }}
                style={styles.cardImage2HEJ}
              />
              <Text style={styles.cardTextHEJ}>Card 3</Text>
            </View>
            <View style={styles.card2HEJ}>
              <Image
                source={{ uri: 'https://exemplo.com/imagem1.jpg' }}
                style={styles.cardImage2HEJ}
              />
              <Text style={styles.cardTextHEJ}>Card 4</Text>
            </View>
          </View>
        </View>

        <View style={styles.sectionHEJ}>
          <Text style={styles.TitleHEJ}>Episódios para você</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.cardWithImageHEJ}>
              <Image
                source={{ uri: 'https://exemplo.com/imagem1.jpg' }}
                style={styles.cardImageHEJ}
              />
              <Text style={styles.cardTitleHEJ}>EP 3 - Música de P...</Text>
            </View>

            <View style={styles.cardWithImageHEJ}>
              <Image
                source={{ uri: 'https://exemplo.com/imagem1.jpg' }}
                style={styles.cardImageHEJ}
              />
              <Text style={styles.cardTitleHEJ}>EP 3 - Música de P...</Text>
            </View>

            <View style={styles.cardWithImageHEJ}>
              <Image
                source={{ uri: 'https://exemplo.com/imagem1.jpg' }}
                style={styles.cardImageHEJ}
              />
              <Text style={styles.cardTitleHEJ}>EP 3 - Música de P...</Text>
            </View>

            <View style={styles.cardWithImageHEJ}>
              <Image
                source={{ uri: 'https://exemplo.com/imagem2.jpg' }}
                style={styles.cardImageHEJ}
              />
              <Text style={styles.cardTitleHEJ}>#04 - Positividad...</Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles.sectionHEJ}>
          <Text style={styles.TitleHEJ}>Recomendado para hoje</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.cardWithImageHEJ}>
              <Image
                source={{ uri: 'https://exemplo.com/folklore.jpg' }}
                style={styles.cardImageHEJ}
              />
              <Text style={styles.cardTitleHEJ}>folklore</Text>
            </View>

            <View style={styles.cardWithImageHEJ}>
              <Image
                source={{ uri: 'https://exemplo.com/folklore.jpg' }}
                style={styles.cardImageHEJ}
              />
              <Text style={styles.cardTitleHEJ}>folklore</Text>
            </View>

            <View style={styles.cardWithImageHEJ}>
              <Image
                source={{ uri: 'https://exemplo.com/folklore.jpg' }}
                style={styles.cardImageHEJ}
              />
              <Text style={styles.cardTitleHEJ}>folklore</Text>
            </View>

            <View style={styles.cardWithImageHEJ}>
              <Image
                source={{ uri: 'https://exemplo.com/reputation.jpg' }}
                style={styles.cardImageHEJ}
              />
              <Text style={styles.cardTitleHEJ}>reputation</Text>
            </View>
          </ScrollView>
        </View>
        <p></p>
        <p></p>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHEJ: { flex: 1, backgroundColor: '#121212', position: 'relative', },
  headerHEJ: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 32, paddingVertical: 24, },
  TitleHEJ: { color: 'white', fontSize: 28, fontWeight: 'bold', flex: 1, paddingBottom: 16 },
  sectionHEJ: { marginVertical: 24, marginHorizontal: 24 },
  iconsContainerHEJ: { flexDirection: 'row', gap: 24, marginLeft: 'auto' },
  backgroundHEJ: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: -1,
  },
  iconHEJ: { color: 'white', fontSize: 24 },
  card2HEJ: {
    flexDirection: 'row',
    width: 190,
    height: 90,
    backgroundColor: '#282828',
    borderRadius: 10,
    gap: 10,
    overflow: 'hidden',
  },
  rowHEJ: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  cardTextHEJ: {
    fontSize: 16,
    color: 'white',
    alignContent: 'center'
  },
  cardWithImageHEJ: {
    width: 240,
    alignItems: 'center',
  },
  cardImage2HEJ: {
    width: 90,
    height: 90,
    borderRadius: 4,
    backgroundColor: '#333',
  },
  cardImageHEJ: {
    width: 200,
    height: 200,
    borderRadius: 16,
    backgroundColor: '#333',
    marginBottom: 16,
  },
  cardTitleHEJ: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '500',
  }
});
