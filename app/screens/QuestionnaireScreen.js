import { useState } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { saveUser, getUser } from "../storage/userStorage";

export default function QuestionnaireScreen({ navigation }) {
  const [duration, setDuration] = useState(null);
  const [parts, setParts] = useState([]);

  const togglePart = (p) => {
    setParts((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    );
  };

  const handleContinue = async () => {
    const user = await getUser();
    await saveUser({ ...user, duration, parts });
    navigation.navigate("Home");
  };

  return (
    <View style={{ padding: 30 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Daily Mobility Setup
      </Text>

      <Text style={{ marginTop: 20, fontSize: 16 }}>Duration:</Text>

      {[5, 10, 15].map((d) => (
        <Button
          key={d}
          title={`${d} minutes`}
          onPress={() => setDuration(d)}
          color={duration === d ? "green" : undefined}
        />
      ))}

      <Text style={{ marginTop: 20, fontSize: 16 }}>
        Which areas do you want to improve?
      </Text>

      {["Back", "Hips", "Ankles", "Shoulders"].map((p) => (
        <TouchableOpacity key={p} onPress={() => togglePart(p)}>
          <Text
            style={{
              padding: 10,
              backgroundColor: parts.includes(p) ? "#a0e6a0" : "#eee",
              borderRadius: 6,
              marginTop: 8,
            }}
          >
            {p}
          </Text>
        </TouchableOpacity>
      ))}

      <Button
        title="Finish setup"
        onPress={handleContinue}
        disabled={!duration || parts.length === 0}
      />
    </View>
  );
}
