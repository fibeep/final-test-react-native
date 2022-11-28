import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ListRenderItem,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "react-native-vector-icons";
import * as React from "react";
import metalData from "./metal";
import BandComponent from "./BandComponent";



export default function Bands() {
  return (
    <View style={styles.container}>
      <Text>Bands!</Text>
      <FlatList 
      
        data = {metalData}
        renderItem={({item}) => (
            
            <ListRenderItem
            title={item.ID}
            />
        )}

      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
