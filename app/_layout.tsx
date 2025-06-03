import { Stack } from "expo-router";

export default function RootLayoutHEJ() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="(tabs)/options" />
            <Stack.Screen name="(tabs)/perfil" />
        </Stack>
    )
}