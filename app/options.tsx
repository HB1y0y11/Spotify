import '@expo/metro-runtime';
import React from 'react';
import { useRouter } from 'expo-router';
import Icons from 'react-native-vector-icons/AntDesign';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';

const HomeEHJ = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.containerEHJ}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      {/* header */}
      <View style={styles.headerEHJ}>
        <View style={styles.headerContentEHJ}>
          <TouchableOpacity
            onPress={() => router.push('(tabs)')}
            style={styles.iconTouchableEHJ}
            activeOpacity={0.7}
          >
            <Icons name="left" size={24} color="#ffffff" />
          </TouchableOpacity>
          <Text style={styles.headertextoEHJ}>Configurar</Text>
        </View>
      </View>

      {/* body */}
      <View style={styles.bodyperfilEHJ}>
        {/* Foto de perfil */}
        <TouchableOpacity onPress={() => router.push('perfil')}>
          <View style={styles.perfilRowEHJ}>
          {/* foto */}
          <View style={styles.fotoPerfilContainerEHJ}>
            <Image
              source={require('./assets/photo.jpeg')}
              style={styles.fotoPerfilEHJ}
            />
          </View>

          {/* Nome e ver perfil */}
          <View style={styles.nomeContainerEHJ}>
            <Text style={styles.nomeTextoEHJ}>Enzo Da Silva</Text>
            <Text style={styles.verPerfilTextoEHJ}>Ver perfil</Text>
          </View>

          {/* seta */}
          <View style={styles.setaContainerEHJ}>
            <Icons name="right" size={24} color="#858585" />
          </View>
        </View>
        </TouchableOpacity>
        
        <View style={styles.telasinexisEHJ}>
           {/* conta */}
           <View style={styles.SubconfigsEHJ}>
          <View>
            <Text style={styles.textossubconfigEHJ}>
              Conta
            </Text>
          </View>
          <View style={styles.setaContainerEHJ}>
            <Icons name="right" size={24} color="#858585" />
          </View>
        </View>
        {/* Economia de dados */}
        <View style={styles.SubconfigsEHJ}>
          <View>
            <Text style={styles.textossubconfigEHJ}>
              Economia de dados
            </Text>
          </View>
          <View style={styles.setaContainerEHJ}>
            <Icons name="right" size={24} color="#858585" />
          </View>
        </View>
        {/* Idiomas */}
        <View style={styles.SubconfigsEHJ}>
          <View>
            <Text style={styles.textossubconfigEHJ}>
              idiomas
            </Text>
          </View>
          <View style={styles.setaContainerEHJ}>
            <Icons name="right" size={24} color="#858585" />
          </View>
        </View>
        {/* Reprodução */}
        <View style={styles.SubconfigsEHJ}>
          <View>
            <Text style={styles.textossubconfigEHJ}>
              Reprodução
            </Text>
          </View>
          <View style={styles.setaContainerEHJ}>
            <Icons name="right" size={24} color="#858585" />
          </View>
        </View>
        {/* Conteudo explícito */}
        <View style={styles.SubconfigsEHJ}>
          <View>
            <Text style={styles.textossubconfigEHJ}>
              Conteúdo explícito
            </Text>
          </View>
          <View style={styles.setaContainerEHJ}>
            <Icons name="right" size={24} color="#858585" />
          </View>
        </View>
        {/* Dispositivos */}
        <View style={styles.SubconfigsEHJ}>
          <View>
            <Text style={styles.textossubconfigEHJ}>
              Dispositivos
            </Text>

          </View>
          <View style={styles.setaContainerEHJ}>
            <Icons name="right" size={24} color="#858585" />
          </View>
        </View>
        {/* Carro */}
        <View style={styles.SubconfigsEHJ}>
          <View>
            <Text style={styles.textossubconfigEHJ}>
              Carro
            </Text>

          </View>
          <View style={styles.setaContainerEHJ}>
            <Icons name="right" size={24} color="#858585" />
          </View>
        </View>
        {/* Redes */}
        <View style={styles.SubconfigsEHJ}>
          <View>
            <Text style={styles.textossubconfigEHJ}>
              Redes
            </Text>
          </View>
          <View style={styles.setaContainerEHJ}>
            <Icons name="right" size={24} color="#858585" />
          </View>
        </View>
        {/* Assistente de voz e aplicativos */}
        <View style={styles.SubconfigsEHJ}>
          <View>
            <Text style={styles.textossubconfigEHJ}>
              Assistente de voz e aplicaticos
            </Text>
          </View>
          <View style={styles.setaContainerEHJ}>
            <Icons name="right" size={24} color="#858585" />
          </View>
        </View>
        </View>
       
       
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  telasinexisEHJ:{
    flexDirection: 'column',
    paddingTop: 50,
    gap: 20,
  },
  SubconfigsEHJ: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    marginHorizontal: 10,
  },
  textossubconfigEHJ: {
    fontSize: 15,
    color: '#C2C2C2',
    paddingLeft: 15,
    fontWeight:'bold',
  },
  containerEHJ: {
    flex: 1,
    backgroundColor: '#111111',
    flexDirection: 'column',
  },
  headerEHJ: {
    height: 90,
    backgroundColor: '#141414',
    justifyContent: 'flex-end',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom: 10,
    paddingHorizontal: 16,
  },
  headerContentEHJ: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconTouchableEHJ: {
    position: 'absolute',
    left: 0,
    padding: 10,
  },
  headertextoEHJ: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
  },
  bodyperfilEHJ: {
    backgroundColor: '#0F0F0F',
    height: 600,
  },
  perfilRowEHJ: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  fotoPerfilContainerEHJ: {
    marginRight: 12,
  },
  fotoPerfilEHJ: {
    width: 80,
    height: 80,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#222222',
  },
  nomeContainerEHJ: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  nomeTextoEHJ: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  verPerfilTextoEHJ: {
    color: '#858585',
    fontSize: 14,
    opacity: 0.7,
  },
  setaContainerEHJ: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeEHJ;
