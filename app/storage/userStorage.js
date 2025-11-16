import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveUser(data) {
  await AsyncStorage.setItem("user", JSON.stringify(data));
}

export async function getUser() {
  const result = await AsyncStorage.getItem("user");
  return result ? JSON.parse(result) : null;
}
