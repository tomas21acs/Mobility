import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import { getUser } from "../storage/userStorage";

export default function HomeScreen() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser().then(setUser);
  }, []);

  if (!user) return null;

  return (
    <View style={{ padding: 30 }}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>
        Hello {user.name} 👋
      </Text>

      <Text style={{ marginTop: 10 }}>
        Your mobility: {user.duration} min daily
      </Text>

      <Text style={{ marginTop: 10 }}>
        Focus areas: {user.parts.join(", ")}
      </Text>
    </View>
  );
}
