/* ==================================== */
/* ===== PÁGINA PRINCIPAL (HOME) ====== */
/* ==================================== */
import { ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SettingOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { CustomText } from "../components/CustomText";
import ImageWithGlowHEJ from '../components/ImageWithGlowHEJ';

export default function HomeHEJ() {
  const routerHEJ = useRouter();

  return (
    <View style={stylesHEJ.containerHEJ}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Gradiente de fundo */}
        <LinearGradient
          colors={['#7B7B7B', '#111111', '#111111']}
          locations={[0, 0.2, 1]}
          style={stylesHEJ.backgroundHEJ}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        />

        {/* Cabeçalho com título e ícones */}
        <View style={stylesHEJ.headerHEJ}>
          <CustomText style={stylesHEJ.TitleHEJ}>Boa tarde</CustomText>
          <View style={stylesHEJ.iconsContainerHEJ}>
            <MaterialIcons
              name="notifications"
              color="white"
              style={stylesHEJ.iconHEJ}
            />
            <ClockCircleOutlined style={stylesHEJ.iconHEJ} />
            <TouchableOpacity onPress={() => routerHEJ.push('options')}>
              <SettingOutlined style={stylesHEJ.iconHEJ} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Seção de cards horizontais */}
        <View style={stylesHEJ.sectionHEJ}>
          <View style={stylesHEJ.rowHEJ}>
            <View style={stylesHEJ.card2HEJ}>
              <ImageWithGlowHEJ
                source={require('../assets/HEJm1.png')}
                styleImageHEJ={stylesHEJ.cardImage2HEJ}
              />
              <CustomText style={stylesHEJ.cardCustomTextHEJ}>Bonda 69</CustomText>
            </View>
            <View style={stylesHEJ.card2HEJ}>
              <ImageWithGlowHEJ
                source={require('../assets/HEJm2.png')}
                styleImageHEJ={stylesHEJ.cardImage2HEJ}
              />
              <CustomText style={stylesHEJ.cardCustomTextHEJ}>Teto trip</CustomText>
            </View>
          </View>

          <View style={stylesHEJ.rowHEJ}>
            <View style={stylesHEJ.card2HEJ}>
              <ImageWithGlowHEJ
                source={require('../assets/HEJm3.png')}
                styleImageHEJ={stylesHEJ.cardImage2HEJ}
              />
              <CustomText style={stylesHEJ.cardCustomTextHEJ}>Chest pain(I love)</CustomText>
            </View>
            <View style={stylesHEJ.card2HEJ}>
              <ImageWithGlowHEJ
                source={require('../assets/HEJm4.png')}
                styleImageHEJ={stylesHEJ.cardImage2HEJ}
              />
              <CustomText style={stylesHEJ.cardCustomTextHEJ}>Levan pokkan</CustomText>
            </View>
          </View>
        </View>

        {/* Seção de episódios recomendados */}
        <View style={stylesHEJ.sectionHEJ}>
          <CustomText style={stylesHEJ.TitleHEJ}>Episódios para você</CustomText>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={stylesHEJ.cardWithImageHEJ}>
              <ImageWithGlowHEJ
                source={require('../assets/HEJ1.png')}
                styleImageHEJ={stylesHEJ.cardImageHEJ}
              />
              <CustomText style={stylesHEJ.cardTitleHEJ}>EP 3 - Nerdcast -...</CustomText>
              <CustomText style={stylesHEJ.subcardTitleHEJ}>JovemNerd</CustomText>
            </View>

            <View style={stylesHEJ.cardWithImageHEJ}>
              <ImageWithGlowHEJ
                source={require('../assets/HEJ2.png')}
                styleImageHEJ={stylesHEJ.cardImageHEJ}
              />
              <CustomText style={stylesHEJ.cardTitleHEJ}>TEMP 2 - Capadu...</CustomText>
              <CustomText style={stylesHEJ.subcardTitleHEJ}>Jurandir Filho</CustomText>
            </View>

            <View style={stylesHEJ.cardWithImageHEJ}>
              <View style={stylesHEJ.imageContainerHEJ}>
                <ImageWithGlowHEJ
                  source={require('../assets/HEJ3.png')}
                  styleImageHEJ={stylesHEJ.cardImageHEJ}
                />
                <View style={stylesHEJ.progressBackgroundHEJ}>
                  <View style={[stylesHEJ.progressForegroundHEJ, { width: '45%' }]} />
                </View>
              </View>
              <CustomText style={stylesHEJ.cardTitleHEJ}>99 Vidas - Trail...</CustomText>
              <CustomText style={stylesHEJ.subcardTitleHEJ}>Jurandir Filho e Izzy Nobre</CustomText>
            </View>

            <View style={stylesHEJ.cardWithImageHEJ}>
              <ImageWithGlowHEJ
                source={require('../assets/HEJ4.png')}
                styleImageHEJ={stylesHEJ.cardImageHEJ}
              />
              <CustomText style={stylesHEJ.cardTitleHEJ}>#194 Vingadore...</CustomText>
              <CustomText style={stylesHEJ.subcardTitleHEJ}>JovemNerd</CustomText>
            </View>
          </ScrollView>
        </View>

        {/* Seção de recomendações diárias */}
        <View style={stylesHEJ.sectionHEJ}>
          <CustomText style={stylesHEJ.TitleHEJ}>Recomendado para hoje</CustomText>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={stylesHEJ.cardWithImageHEJ}>
              <ImageWithGlowHEJ
                source={require('../assets/HEJm5.png')}
                styleImageHEJ={stylesHEJ.cardImageHEJ}
              />
              <CustomText style={stylesHEJ.cardTitleHEJ}>Creepy Nuts</CustomText>
            </View>

            <View style={stylesHEJ.cardWithImageHEJ}>
              <ImageWithGlowHEJ
                source={require('../assets/HEJm6.png')}
                styleImageHEJ={stylesHEJ.cardImageHEJ}
              />
              <CustomText style={stylesHEJ.cardTitleHEJ}>Grilo</CustomText>
            </View>

            <View style={stylesHEJ.cardWithImageHEJ}>
              <ImageWithGlowHEJ
                source={require('../assets/HEJm7.png')}
                styleImageHEJ={stylesHEJ.cardImageHEJ}
              />
              <CustomText style={stylesHEJ.cardTitleHEJ}>Mashle</CustomText>
            </View>

            <View style={stylesHEJ.cardWithImageHEJ}>
              <ImageWithGlowHEJ
                source={require('../assets/HEJm8.png')}
                styleImageHEJ={stylesHEJ.cardImageHEJ}
              />
              <CustomText style={stylesHEJ.cardTitleHEJ}>Hatsuni Miku</CustomText>
            </View>
          </ScrollView>
        </View>

        {/* Espaçamento final */}
        <p></p>
        <p></p>
      </ScrollView>
    </View>
  );
}

const stylesHEJ = StyleSheet.create({
  containerHEJ: { flex: 1, backgroundColor: '#121212', position: 'relative' },
  headerHEJ: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 32, paddingVertical: 24 },
  TitleHEJ: { color: 'white', fontSize: 28, fontWeight: 'bold', flex: 1, paddingBottom: 16 },
  iconsContainerHEJ: { flexDirection: 'row', gap: 24, marginLeft: 'auto' },
  iconHEJ: { color: 'white', fontSize: 24 },
  backgroundHEJ: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: -1,
  },
  sectionHEJ: { marginVertical: 24, marginHorizontal: 20 },
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
  cardCustomTextHEJ: {
    fontSize: 16,
    color: 'white',
    alignContent: 'center'
  },
  cardWithImageHEJ: {
    width: 240,
    marginRight: 16,
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
  },
  subcardTitleHEJ: {
    fontSize: 15,
    marginLeft: 20,
    color: 'gray',
    fontWeight: '500',
  },
  imageContainerHEJ: {
    position: 'relative',
  },
  progressBackgroundHEJ: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    width: '100%',
    height: 8,
    borderRadius: 4,
    marginTop: 8,
  },
  progressForegroundHEJ: {
    backgroundColor: '#1DB954',
    height: 8,
    borderRadius: 4,
  }
});