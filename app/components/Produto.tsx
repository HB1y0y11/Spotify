/* ==================================== */
/* ==== COMPONENTE DE ITEM DE LISTA === */
/* ==================================== */
import { View, StyleSheet, ImageSourcePropType } from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import { CustomText } from "../components/CustomText";
import ImageWithGlowHEJ from '../components/ImageWithGlowHEJ';

type DadosMusicaHEJ = {
  imagemHEJ: ImageSourcePropType;
  nomeHEJ?: string;
  artistaHEJ?: string;
}

export default function ProdutoHEJ({ imagemHEJ, nomeHEJ, artistaHEJ }: DadosMusicaHEJ) {
  return (
    <View style={stylesHEJ.cardHEJ}>
      <ImageWithGlowHEJ
        source={imagemHEJ}
        styleImageHEJ={stylesHEJ.imageHEJ}
        glowWidth={150}
        glowHeight={60}
        glowOpacity={0.15}
      />
      <View style={stylesHEJ.subcardHEJ}>
        <View>
          <CustomText style={stylesHEJ.nomeHEJ}>{nomeHEJ}</CustomText>
          <CustomText style={stylesHEJ.artistaHEJ}>{artistaHEJ}</CustomText>
        </View>
        <View style={stylesHEJ.setaContainerHEJ}>
          <Icons name="right" size={24} color="#858585" />
        </View>
      </View>
    </View>
  );
}

const stylesHEJ = StyleSheet.create({
  cardHEJ: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 16,
  },
  subcardHEJ: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageHEJ: {
    width: 60,
    height: 60,
    marginRight: 16,
    borderRadius: 4,
  },
  nomeHEJ: {
    color: "white",
    fontSize: 16,
    fontWeight: '500',
  },
  artistaHEJ: {
    color: "grey",
    fontSize: 14,
    marginTop: 4,
  },
  setaContainerHEJ: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
});