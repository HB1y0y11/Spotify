import '@expo/metro-runtime';
import React from 'react';
import { useRouter } from 'expo-router';
import Icons from 'react-native-vector-icons/AntDesign';
import { CustomText } from "../components/CustomText";
import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';

const ConfigHEJ = () => {
  const routerHEJ = useRouter();

  return (
    <SafeAreaView style={stylesHEJ.containerHEJ}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      {/* header */}
      <View style={stylesHEJ.headerHEJ}>
        <View style={stylesHEJ.headerContentHEJ}>
          <TouchableOpacity
            onPress={() => routerHEJ.push('(tabs)')}
            style={stylesHEJ.iconTouchableHEJ}
            activeOpacity={0.7}
          >
            <Icons name="left" size={24} color="#ffffff" />
          </TouchableOpacity>
          <CustomText style={stylesHEJ.headertextoHEJ}>Configurar</CustomText>
        </View>
      </View>

      {/* body */}
      <View style={stylesHEJ.bodyperfilHEJ}>
        {/* Foto de perfil */}
        <TouchableOpacity onPress={() => routerHEJ.push('perfil')}>
          <View style={stylesHEJ.perfilRowHEJ}>
            {/* foto */}
            <View style={stylesHEJ.fotoPerfilContainerHEJ}>
              <Image
                source={require('../assets/photo.jpeg')}
                style={stylesHEJ.fotoPerfilHEJ}
              />
            </View>

            {/* Nome e ver perfil */}
            <View style={stylesHEJ.nomeContainerHEJ}>
              <CustomText style={stylesHEJ.nomeTextoHEJ}>Enzo Da Silva</CustomText>
              <CustomText style={stylesHEJ.verPerfilTextoHEJ}>Ver perfil</CustomText>
            </View>

            {/* seta */}
            <View style={stylesHEJ.setaContainerHEJ}>
              <Icons name="right" size={24} color="#858585" />
            </View>
          </View>
        </TouchableOpacity>
        
        <View style={stylesHEJ.telasinexisHEJ}>
          {/* conta */}
          <View style={stylesHEJ.SubconfigsHEJ}>
            <View>
              <CustomText style={stylesHEJ.textossubconfigHEJ}>
                Conta
              </CustomText>
            </View>
            <View style={stylesHEJ.setaContainerHEJ}>
              <Icons name="right" size={24} color="#858585" />
            </View>
          </View>
          {/* Economia de dados */}
          <View style={stylesHEJ.SubconfigsHEJ}>
            <View>
              <CustomText style={stylesHEJ.textossubconfigHEJ}>
                Economia de dados
              </CustomText>
            </View>
            <View style={stylesHEJ.setaContainerHEJ}>
              <Icons name="right" size={24} color="#858585" />
            </View>
          </View>
          {/* Idiomas */}
          <View style={stylesHEJ.SubconfigsHEJ}>
            <View>
              <CustomText style={stylesHEJ.textossubconfigHEJ}>
                idiomas
              </CustomText>
            </View>
            <View style={stylesHEJ.setaContainerHEJ}>
              <Icons name="right" size={24} color="#858585" />
            </View>
          </View>
          {/* Reprodução */}
          <View style={stylesHEJ.SubconfigsHEJ}>
            <View>
              <CustomText style={stylesHEJ.textossubconfigHEJ}>
                Reprodução
              </CustomText>
            </View>
            <View style={stylesHEJ.setaContainerHEJ}>
              <Icons name="right" size={24} color="#858585" />
            </View>
          </View>
          {/* Conteudo explícito */}
          <View style={stylesHEJ.SubconfigsHEJ}>
            <View>
              <CustomText style={stylesHEJ.textossubconfigHEJ}>
                Conteúdo explícito
              </CustomText>
            </View>
            <View style={stylesHEJ.setaContainerHEJ}>
              <Icons name="right" size={24} color="#858585" />
            </View>
          </View>
          {/* Dispositivos */}
          <View style={stylesHEJ.SubconfigsHEJ}>
            <View>
              <CustomText style={stylesHEJ.textossubconfigHEJ}>
                Dispositivos
              </CustomText>
            </View>
            <View style={stylesHEJ.setaContainerHEJ}>
              <Icons name="right" size={24} color="#858585" />
            </View>
          </View>
          {/* Carro */}
          <View style={stylesHEJ.SubconfigsHEJ}>
            <View>
              <CustomText style={stylesHEJ.textossubconfigHEJ}>
                Carro
              </CustomText>
            </View>
            <View style={stylesHEJ.setaContainerHEJ}>
              <Icons name="right" size={24} color="#858585" />
            </View>
          </View>
          {/* Redes */}
          <View style={stylesHEJ.SubconfigsHEJ}>
            <View>
              <CustomText style={stylesHEJ.textossubconfigHEJ}>
                Redes
              </CustomText>
            </View>
            <View style={stylesHEJ.setaContainerHEJ}>
              <Icons name="right" size={24} color="#858585" />
            </View>
          </View>
          {/* Assistente de voz e aplicativos */}
          <View style={stylesHEJ.SubconfigsHEJ}>
            <View>
              <CustomText style={stylesHEJ.textossubconfigHEJ}>
                Assistente de voz e aplicaticos
              </CustomText>
            </View>
            <View style={stylesHEJ.setaContainerHEJ}>
              <Icons name="right" size={24} color="#858585" />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const stylesHEJ = StyleSheet.create({
  telasinexisHEJ: {
    flexDirection: 'column',
    paddingTop: 50,
    gap: 20,
  },
  SubconfigsHEJ: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    marginHorizontal: 10,
  },
  textossubconfigHEJ: {
    fontSize: 15,
    color: '#C2C2C2',
    paddingLeft: 15,
    fontWeight: 'bold',
  },
  containerHEJ: {
    flex: 1,
    backgroundColor: '#111111',
    flexDirection: 'column',
  },
  headerHEJ: {
    height: 90,
    backgroundColor: '#141414',
    justifyContent: 'flex-end',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom: 10,
    paddingHorizontal: 16,
  },
  headerContentHEJ: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconTouchableHEJ: {
    position: 'absolute',
    left: 0,
    padding: 10,
  },
  headertextoHEJ: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  bodyperfilHEJ: {
    backgroundColor: '#0F0F0F',
    height: 600,
  },
  perfilRowHEJ: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  fotoPerfilContainerHEJ: {
    marginRight: 12,
  },
  fotoPerfilHEJ: {
    width: 80,
    height: 80,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#222222',
  },
  nomeContainerHEJ: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
    gap: 5
  },
  nomeTextoHEJ: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  verPerfilTextoHEJ: {
    color: '#858585',
    fontSize: 14,
    opacity: 0.7,
  },
  setaContainerHEJ: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ConfigHEJ;