/* ==================================== */
/* ====== COMPONENTE DE NAVEGAÇÃO ===== */
/* ==================================== */
import { Tabs } from 'expo-router';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export default function LayoutHEJ() {
  const [fontsLoaded] = useFonts({
    'Gotham-Regular': Montserrat_400Regular,
    'Gotham-Bold': Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#0F0F0F',
          height: 70,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          borderTopWidth: 0,
          position: 'absolute',
          elevation: 0,
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 5,
          paddingVertical: 0,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          marginTop: 2,
          marginBottom: 8,
          fontFamily: 'Gotham-Regular',
        },
        headerShown: false,
        tabBarIcon: ({ color }) => {
          const iconSize = 28;
          switch (route.name) {
            case 'index':
              return <MaterialIcons name="home" size={iconSize} color={color} />;
            case 'search':
              return <FontAwesome name="search" size={iconSize} color={color} />;
            case 'un':
              return <Ionicons name="library-outline" size={iconSize} color={color} />;
            case 'in':
              return <FontAwesome5 name="coins" size={iconSize} color={color} />;
            default:
              return <MaterialIcons name="error" size={iconSize} color={color} />;
          }
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Início' }} />
      <Tabs.Screen name="search" options={{ title: 'Buscar' }} />
      <Tabs.Screen name="un" options={{ title: 'Biblioteca' }} />
      <Tabs.Screen name="in" options={{ title: 'Premium' }} />
      <Tabs.Screen name="options" options={{ href: null }} />
      <Tabs.Screen name="perfil" options={{ href: null }} />
    </Tabs>
  );
}