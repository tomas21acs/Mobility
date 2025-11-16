import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { saveUser } from "../storage/userStorage";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");

  const handleRegister = async () => {
    if (!name.trim()) return;
    await saveUser({ name });
    navigation.navigate("Questionnaire");
  };

  return (
    <View style={{ padding: 30 }}>
      <Text style={{ fontSize: 26, fontWeight: "bold", marginBottom: 20 }}>
        Welcome to Mobility
      </Text>

      <Text style={{ fontSize: 16, marginBottom: 10 }}>Your name:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={{
          borderWidth: 1,
          borderRadius: 8,
          padding: 10,
          marginBottom: 20,
        }}
        placeholder="Enter your name"
      />

      <Button title="Continue" onPress={handleRegister} />
    </View>
  );
}
