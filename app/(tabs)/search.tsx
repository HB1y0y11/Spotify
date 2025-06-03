/* ==================================== */
/* ====== PÁGINA DE PESQUISA ========== */
/* ==================================== */
import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { ProdutosHEJ } from "../components/Produtos";
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import ProdutoHEJ from '../components/Produto';
import { CustomText } from "../components/CustomText";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const SearchHEJ = () => {
  const [buscaHEJ, setBuscaHEJ] = useState('');
  const routerHEJ = useRouter();

  const produtosFiltradosHEJ = ProdutosHEJ.filter((produtoHEJ) =>
    produtoHEJ.nomeHEJ.toLowerCase().includes(buscaHEJ.toLowerCase()) ||
    produtoHEJ.artistaHEJ.toLowerCase().includes(buscaHEJ.toLowerCase())
  );

  return (
    <View style={stylesHEJ.containerHEJ}>
      <View style={stylesHEJ.headerHEJ}>
        <View style={stylesHEJ.subheaderHEJ}>
          <View style={stylesHEJ.inputWrapperHEJ}>
            <FontAwesome5 name="search" size={20} color='gray' />
            <TextInput
              style={stylesHEJ.inputHEJ}
              placeholder="Buscar música ou artista"
              placeholderTextColor="gray"
              value={buscaHEJ}
              onChangeText={setBuscaHEJ} />
          </View>
          <TouchableOpacity onPress={() => routerHEJ.push('(tabs)')}>
            <CustomText style={{ color: 'gray', fontWeight: 'bold', marginTop: 20 }}>Cancelar</CustomText>
          </TouchableOpacity>
        </View>

        <View style={stylesHEJ.subheaderHEJ}>
          <TouchableOpacity style={stylesHEJ.buttom2HEJ}>
            <CustomText style={{ color: 'white', fontWeight: 'bold' }}>Melhores resultados</CustomText>
          </TouchableOpacity>
          <TouchableOpacity style={stylesHEJ.buttomHEJ}>
            <CustomText style={{ color: 'white', fontWeight: 'bold' }}>Artistas</CustomText>
          </TouchableOpacity>
          <TouchableOpacity style={stylesHEJ.buttomHEJ}>
            <CustomText style={{ color: 'white', fontWeight: 'bold' }}>Músicas</CustomText>
          </TouchableOpacity>
          <TouchableOpacity style={stylesHEJ.buttomHEJ}>
            <CustomText style={{ color: 'white', fontWeight: 'bold' }}>Playlists</CustomText>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={['#26373C', '#141919', '#141919']}
          locations={[0, 0.8, 1]}
          style={stylesHEJ.backgroundHEJ}
          start={{ x: 1, y: 0 }}
          end={{ x: 1, y: 1 }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <FlatList
              data={produtosFiltradosHEJ}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ProdutoHEJ 
                  imagemHEJ={item.imagemHEJ} 
                  nomeHEJ={item.nomeHEJ} 
                  artistaHEJ={item.artistaHEJ} 
                />
              )}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const stylesHEJ = StyleSheet.create({
  containerHEJ: { flex: 1, backgroundColor: '#141919', position: 'relative' },
  headerHEJ: { backgroundColor: "#192323", height: 100, width: "auto" },
  subheaderHEJ: { 
    height: 50, 
    width: "auto", 
    alignItems: 'center', 
    flexDirection: 'row', 
    gap: 10, 
    marginLeft: 20,
    marginRight: 20,
  },
  inputHEJ: { 
    height: 30, 
    width: 300, 
    color: 'white', 
    fontSize: 14, 
    marginLeft: 10,
  },
  backgroundHEJ: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: -1,
  },
  inputWrapperHEJ: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#233237',
    marginTop: 20,
    width: '80%',
    paddingHorizontal: 17,
    borderRadius: 8,
  },
  buttomHEJ: {
    height: 30,
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
  },
  buttom2HEJ: {
    height: 30,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#137F38',
    borderRadius: 18,
  }
});

export default SearchHEJ;