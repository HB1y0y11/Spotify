import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link, Stack, useRouter } from 'expo-router';
import { SettingOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.containerHEJ}>

      {/* ScrollView para permitir rolagem vertical */}
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Gradiente de fundo */}
        <LinearGradient
          colors={['#7B7B7B', '#111111', '#111111']}
          locations={[0, 0.2, 1]}
          style={styles.backgroundHEJ}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        />

        {/* Cabeçalho com saudação e ícones */}
        <View style={styles.headerHEJ}>
          <Text style={styles.TitleHEJ}>Boa tarde</Text>
          
          {/* Container dos ícones (notificações, relógio e configurações) */}
          <View style={styles.iconsContainerHEJ}>

            {/* Ícone de notificações */}
            <MaterialIcons
              name="notifications"
              color="white"
              style={styles.iconHEJ}
            />
            
            {/* Ícone de relógio */}
            <ClockCircleOutlined style={styles.iconHEJ} />
            
            {/* Botão de configurações que navega para tela 'options' */}
            <TouchableOpacity onPress={() => router.push('options')}>
              <SettingOutlined style={styles.iconHEJ} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Seção de cards em formato grid (2x2) */}
        <View style={styles.sectionHEJ}>

          {/* Primeira linha de cards */}
          <View style={styles.rowHEJ}>

            {/* Card 1 */}
            <View style={styles.card2HEJ}>
              <Image
                source={{ uri: 'https://exemplo.com/imagem1.jpg' }}
                style={styles.cardImage2HEJ}
              />
              <Text style={styles.cardTextHEJ}>EP 3 - Música de P...</Text>
            </View>
            
            {/* Card 2 */}
            <View style={styles.card2HEJ}>
              <Image
                source={{ uri: 'https://exemplo.com/imagem1.jpg' }}
                style={styles.cardImage2HEJ}
              />
              <Text style={styles.cardTextHEJ}>#04 - Positividad...</Text>
            </View>
          </View>

          {/* Segunda linha de cards */}
          <View style={styles.rowHEJ}>

            {/* Card 3 */}
            <View style={styles.card2HEJ}>
              <Image
                source={{ uri: 'https://exemplo.com/imagem1.jpg' }}
                style={styles.cardImage2HEJ}
              />
              <Text style={styles.cardTextHEJ}>Card 3</Text>
            </View>
            
            {/* Card 4 */}
            <View style={styles.card2HEJ}>
              <Image
                source={{ uri: 'https://exemplo.com/imagem1.jpg' }}
                style={styles.cardImage2HEJ}
              />
              <Text style={styles.cardTextHEJ}>Card 4</Text>
            </View>
          </View>
        </View>

        {/* Seção horizontal de episódios recomendados */}
        <View style={styles.sectionHEJ}>
          <Text style={styles.TitleHEJ}>Episódios para você</Text>
          
          {/* ScrollView horizontal para os cards de episódios */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {/* Card de episódio 1 */}
            <View style={styles.cardWithImageHEJ}>
              <Image
                source={{ uri: 'https://exemplo.com/imagem1.jpg' }}
                style={styles.cardImageHEJ}
              />
              <Text style={styles.cardTitleHEJ}>EP 3 - Música de P...</Text>
            </View>

            {/* Card de episódio 2 */}
            <View style={styles.cardWithImageHEJ}>
              <Image
                source={{ uri: 'https://exemplo.com/imagem1.jpg' }}
                style={styles.cardImageHEJ}
              />
              <Text style={styles.cardTitleHEJ}>EP 3 - Música de P...</Text>
            </View>

            {/* Card de episódio 3 */}
            <View style={styles.cardWithImageHEJ}>
              <Image
                source={{ uri: 'https://exemplo.com/imagem1.jpg' }}
                style={styles.cardImageHEJ}
              />
              <Text style={styles.cardTitleHEJ}>EP 3 - Música de P...</Text>
            </View>

            {/* Card de episódio 4 */}
            <View style={styles.cardWithImageHEJ}>
              <Image
                source={{ uri: 'https://exemplo.com/imagem2.jpg' }}
                style={styles.cardImageHEJ}
              />
              <Text style={styles.cardTitleHEJ}>#04 - Positividad...</Text>
            </View>
          </ScrollView>
        </View>

        {/* Seção horizontal de recomendações diárias */}
        <View style={styles.sectionHEJ}>
          <Text style={styles.TitleHEJ}>Recomendado para hoje</Text>
          
          {/* ScrollView horizontal para os cards de recomendações */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {/* Card de recomendação 1 */}
            <View style={styles.cardWithImageHEJ}>
              <Image
                source={{ uri: 'https://exemplo.com/folklore.jpg' }}
                style={styles.cardImageHEJ}
              />
              <Text style={styles.cardTitleHEJ}>folklore</Text>
            </View>

            {/* Card de recomendação 2 */}
            <View style={styles.cardWithImageHEJ}>
              <Image
                source={{ uri: 'https://exemplo.com/folklore.jpg' }}
                style={styles.cardImageHEJ}
              />
              <Text style={styles.cardTitleHEJ}>folklore</Text>
            </View>

            {/* Card de recomendação 3 */}
            <View style={styles.cardWithImageHEJ}>
              <Image
                source={{ uri: 'https://exemplo.com/folklore.jpg' }}
                style={styles.cardImageHEJ}
              />
              <Text style={styles.cardTitleHEJ}>folklore</Text>
            </View>

            {/* Card de recomendação 4 */}
            <View style={styles.cardWithImageHEJ}>
              <Image
                source={{ uri: 'https://exemplo.com/reputation.jpg' }}
                style={styles.cardImageHEJ}
              />
              <Text style={styles.cardTitleHEJ}>reputation</Text>
            </View>
          </ScrollView>
        </View>

        {/* Espaçamento extra no final */}
        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
}

// Estilos
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