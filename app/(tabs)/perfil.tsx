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
    Image,
    TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const PerfilHEJ = () => {
    const routerHEJ = useRouter();

    return (
        <SafeAreaView style={stylesHEJ.containerHEJ}>
            {/* Gradiente de fundo */}
            <LinearGradient
                colors={['#7B7B7B', '#111111', '#111111']}
                locations={[0, 0.35, 1]}
                style={stylesHEJ.backgroundHEJ}
                start={{ x: 1, y: 0 }}
                end={{ x: 1, y: 1 }}
            />

            {/* Barra de status */}
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="light-content"
            />

            {/* Conteúdo principal */}
            <View style={stylesHEJ.mainContainerHEJ}>
                {/* Cabeçalho com seta e pontos */}
                <View style={stylesHEJ.headerContainerHEJ}>
                    <TouchableOpacity
                        onPress={() => routerHEJ.push('options')}
                        style={stylesHEJ.backButtonHEJ}
                        activeOpacity={0.7}
                    >
                        <Icons name="left" size={24} color="#ffffff" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => routerHEJ.push('(tabs)')}
                        style={stylesHEJ.menuButtonHEJ}
                        activeOpacity={0.7}
                    >
                        <Icons name="ellipsis1" size={24} color="#ffffff" />
                    </TouchableOpacity>
                </View>

                {/* Seção do perfil */}
                <View style={stylesHEJ.profileSectionHEJ}>
                    <Image
                        source={require('../assets/photo.jpeg')}
                        style={stylesHEJ.profileImageHEJ}
                    />
                    <CustomText style={stylesHEJ.profileNameHEJ}>Enzo Da Silva</CustomText>
                    <CustomText style={stylesHEJ.editProfileButtonHEJ}>Editar perfil</CustomText>
                </View>

                {/* Contadores de seguidores/seguindo */}
                <View style={stylesHEJ.followContainerHEJ}>
                    <View style={stylesHEJ.followItemHEJ}>
                        <CustomText style={stylesHEJ.followCountHEJ}>99</CustomText>
                        <CustomText style={stylesHEJ.followCustomTextHEJ}>SEGUIDORES</CustomText>
                    </View>
                    <View style={stylesHEJ.followItemHEJ}>
                        <CustomText style={stylesHEJ.followCountHEJ}>71</CustomText>
                        <CustomText style={stylesHEJ.followCustomTextHEJ}>SEGUINDO</CustomText>
                    </View>
                </View>

                {/* Título das playlists */}
                <View style={stylesHEJ.playlistTitleContainerHEJ}>
                    <CustomText style={stylesHEJ.playlistTitleHEJ}>Playlists</CustomText>
                </View>

                {/* Lista de playlists */}
                <View style={stylesHEJ.playlistsContainerHEJ}>
                    {/* Playlist 1 */}
                    <View style={stylesHEJ.playlistItemHEJ}>
                        <Image
                            source={require('../assets/play1.png')}
                            style={stylesHEJ.playlistImageHEJ}
                        />
                        <View style={stylesHEJ.playlistCustomTextContainerHEJ}>
                            <CustomText style={stylesHEJ.playlistNameHEJ}>Minhas músicas</CustomText>
                            <CustomText style={stylesHEJ.playlistLikesHEJ}>10 curtidas</CustomText>
                        </View>
                        <Icons name="right" size={20} color="#858585" style={stylesHEJ.playlistArrowHEJ} />
                    </View>

                    {/* Playlist 2 */}
                    <View style={stylesHEJ.playlistItemHEJ}>
                        <Image
                            source={require('../assets/play2.png')}
                            style={stylesHEJ.playlistImageHEJ}
                        />
                        <View style={stylesHEJ.playlistCustomTextContainerHEJ}>
                            <CustomText style={stylesHEJ.playlistNameHEJ}>Work</CustomText>
                            <CustomText style={stylesHEJ.playlistLikesHEJ}>10 curtidas</CustomText>
                        </View>
                        <Icons name="right" size={20} color="#858585" style={stylesHEJ.playlistArrowHEJ} />
                    </View>

                    {/* Playlist 3 */}
                    <View style={stylesHEJ.playlistItemHEJ}>
                        <Image
                            source={require('../assets/play3.png')}
                            style={stylesHEJ.playlistImageHEJ}
                        />
                        <View style={stylesHEJ.playlistCustomTextContainerHEJ}>
                            <CustomText style={stylesHEJ.playlistNameHEJ}>Jogos</CustomText>
                            <CustomText style={stylesHEJ.playlistLikesHEJ}>10 curtidas</CustomText>
                        </View>
                        <Icons name="right" size={20} color="#858585" style={stylesHEJ.playlistArrowHEJ} />
                    </View>
                </View>

                {/* Link para todas as playlists */}
                <View style={stylesHEJ.allPlaylistsContainerHEJ}>
                    <CustomText style={stylesHEJ.allPlaylistsCustomTextHEJ}>Ver todas as 6 playlists</CustomText>
                    <Icons name="right" size={20} color="#858585" />
                </View>
            </View>
        </SafeAreaView>
    );
};

// Estilos
const stylesHEJ = StyleSheet.create({
    containerHEJ: {
        flex: 1,
        backgroundColor: '#111111',
    },
    backgroundHEJ: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: -1,
    },
    mainContainerHEJ: {
        flex: 1,
        flexDirection: 'column',
    },
    headerContainerHEJ: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingTop: 30,
    },
    backButtonHEJ: {
        position: 'absolute',
        left: 15,
        top: 30,
        zIndex: 1,
    },
    menuButtonHEJ: {
        position: 'absolute',
        right: 15,
        top: 30,
        zIndex: 1,
    },
    profileSectionHEJ: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20,
    },
    profileImageHEJ: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#222222',
    },
    profileNameHEJ: {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
    },
    editProfileButtonHEJ: {
        color: '#ffffff',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 12,
        fontWeight: 'bold',
        borderRadius: 20,
        backgroundColor: '#353434',
        width: 110,
        paddingVertical: 8,
    },
    followContainerHEJ: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 70,
        marginTop: 50,
    },
    followItemHEJ: {
        alignItems: 'center',
    },
    followCountHEJ: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    followCustomTextHEJ: {
        color: '#858585',
        fontSize: 12,
        marginTop: 5,
    },
    playlistTitleContainerHEJ: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 30,
        marginTop: 30,
        marginBottom: 10,
    },
    playlistTitleHEJ: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    playlistsContainerHEJ: {
        marginHorizontal: 20,
    },
    playlistItemHEJ: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    playlistImageHEJ: {
        width: 70,
        height: 70,
        borderWidth: 2,
        borderColor: '#222222',
        marginRight: 15,
    },
    playlistCustomTextContainerHEJ: {
        flex: 1,
        justifyContent: 'center',
    },
    playlistNameHEJ: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    playlistLikesHEJ: {
        color: '#FFFFFF',
        fontSize: 14,
        opacity: 0.8,
    },
    playlistArrowHEJ: {
        marginLeft: 'auto',
    },
    allPlaylistsContainerHEJ: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 20,
    },
    allPlaylistsCustomTextHEJ: {
        color: '#858585',
        fontSize: 14,
    },
});

export default PerfilHEJ;