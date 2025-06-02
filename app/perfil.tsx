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
    Image,
    TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const PerfilEHJ = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            {/* Gradiente de fundo */}
            <LinearGradient
                colors={['#7B7B7B', '#111111', '#111111']}
                locations={[0, 0.35, 1]}
                style={styles.background}
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
            <View style={styles.mainContainer}>
                {/* Cabeçalho com seta e pontos */}
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        onPress={() => router.push('options')}
                        style={styles.backButton}
                        activeOpacity={0.7}
                    >
                        <Icons name="left" size={24} color="#ffffff" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => router.push('(tabs)')}
                        style={styles.menuButton}
                        activeOpacity={0.7}
                    >
                        <Icons name="ellipsis1" size={24} color="#ffffff" />
                    </TouchableOpacity>
                </View>

                {/* Seção do perfil */}
                <View style={styles.profileSection}>
                    <Image
                        source={require('./assets/photo.jpeg')}
                        style={styles.profileImage}
                    />
                    <Text style={styles.profileName}>Enzo Da Silva</Text>
                    <Text style={styles.editProfileButton}>Editar perfil</Text>
                </View>

                {/* Contadores de seguidores/seguindo */}
                <View style={styles.followContainer}>
                    <View style={styles.followItem}>
                        <Text style={styles.followCount}>99</Text>
                        <Text style={styles.followText}>SEGUIDORES</Text>
                    </View>
                    <View style={styles.followItem}>
                        <Text style={styles.followCount}>71</Text>
                        <Text style={styles.followText}>SEGUINDO</Text>
                    </View>
                </View>

                {/* Título das playlists */}
                <View style={styles.playlistTitleContainer}>
                    <Text style={styles.playlistTitle}>Playlists</Text>
                </View>

                {/* Lista de playlists */}
                <View style={styles.playlistsContainer}>
                    {/* Playlist 1 */}
                    <View style={styles.playlistItem}>
                        <Image
                            source={require('./assets/play1.png')}
                            style={styles.playlistImage}
                        />
                        <View style={styles.playlistTextContainer}>
                            <Text style={styles.playlistName}>Minhas músicas</Text>
                            <Text style={styles.playlistLikes}>10 curtidas</Text>
                        </View>
                        <Icons name="right" size={20} color="#858585" style={styles.playlistArrow} />
                    </View>

                    {/* Playlist 2 */}
                    <View style={styles.playlistItem}>
                        <Image
                            source={require('./assets/play2.png')}
                            style={styles.playlistImage}
                        />
                        <View style={styles.playlistTextContainer}>
                            <Text style={styles.playlistName}>Work</Text>
                            <Text style={styles.playlistLikes}>10 curtidas</Text>
                        </View>
                        <Icons name="right" size={20} color="#858585" style={styles.playlistArrow} />
                    </View>

                    {/* Playlist 3 */}
                    <View style={styles.playlistItem}>
                        <Image
                            source={require('./assets/play3.png')}
                            style={styles.playlistImage}
                        />
                        <View style={styles.playlistTextContainer}>
                            <Text style={styles.playlistName}>Jogos</Text>
                            <Text style={styles.playlistLikes}>10 curtidas</Text>
                        </View>
                        <Icons name="right" size={20} color="#858585" style={styles.playlistArrow} />
                    </View>
                </View>

                {/* Link para todas as playlists */}
                <View style={styles.allPlaylistsContainer}>
                    <Text style={styles.allPlaylistsText}>Ver todas as 6 playlists</Text>
                    <Icons name="right" size={20} color="#858585" />
                </View>
            </View>
        </SafeAreaView>
    );
};

// Estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111111',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: -1,
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingTop: 30,
    },
    backButton: {
        position: 'absolute',
        left: 15,
        top: 30,
        zIndex: 1,
    },
    menuButton: {
        position: 'absolute',
        right: 15,
        top: 30,
        zIndex: 1,
    },
    profileSection: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#222222',
    },
    profileName: {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
    },
    editProfileButton: {
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
    followContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 70,
        marginTop: 50,
    },
    followItem: {
        alignItems: 'center',
    },
    followCount: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    followText: {
        color: '#858585',
        fontSize: 12,
        marginTop: 5,
    },
    playlistTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 30,
        marginTop: 30,
        marginBottom: 10,
    },
    playlistTitle: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    playlistsContainer: {
        marginHorizontal: 20,
    },
    playlistItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    playlistImage: {
        width: 70,
        height: 70,
        borderWidth: 2,
        borderColor: '#222222',
        marginRight: 15,
    },
    playlistTextContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    playlistName: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    playlistLikes: {
        color: '#FFFFFF',
        fontSize: 14,
        opacity: 0.8,
    },
    playlistArrow: {
        marginLeft: 'auto',
    },
    allPlaylistsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 20,
    },
    allPlaylistsText: {
        color: '#858585',
        fontSize: 14,
    },
});

export default PerfilEHJ;