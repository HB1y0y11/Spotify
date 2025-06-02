import { ScrollView, View, Text, StyleSheet } from 'react-native';

const Search = () => {
  return (
    <View style={styles.containerHEJ}>
      <View style={styles.headerHEJ}>

      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  containerHEJ: { flex: 1, backgroundColor: '#121212', position: 'relative', },
  textHEJ: {flex: 1, color: "white", fontSize: 10, fontWeight: "bold"},
  headerHEJ: { backgroundColor: "black", height: 100, width: "auto"}
});
