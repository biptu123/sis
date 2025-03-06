import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Svg, Circle } from "react-native-svg";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

const Home = () => {
  const [isDripOn, setIsDripOn] = useState(false);
  const [isSprinklerOn, setIsSprinklerOn] = useState(false);
  const [dripMode, setDripMode] = useState("Manual");
  const [sprinklerMode, setSprinklerMode] = useState("Manual");
  const [dripMoisture, setDripMoisture] = useState(50);
  const [sprinklerMoisture, setSprinklerMoisture] = useState(50);
  const [dripTime, setDripTime] = useState(0);
  const [sprinklerTime, setSprinklerTime] = useState(0);
  const progress = 75;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
          <View style={styles.progressContainer}>
            <Svg height="250" width="250">
              <Circle cx="125" cy="125" r="90" stroke="#333" strokeWidth="14" fill="none" />
              <Circle
                cx="125"
                cy="125"
                r="90"
                stroke={(isDripOn || isSprinklerOn) ? "#66ff99" : "#ff6666"}
                strokeWidth="14"
                strokeDasharray={Math.PI * 180}
                strokeDashoffset={(1 - progress / 100) * Math.PI * 180}
                fill="none"
                strokeLinecap="round"
              />
            </Svg>
            <View style={styles.progressTextContainer}>
              <Text style={styles.progressText}>{progress}%</Text>
              <Text style={styles.progressSubText}>Soil Moisture</Text>
            </View>
          </View>

          <View style={styles.statusCard}>
            <Text style={styles.statusTitle}><MaterialIcon name="water" size={20} color="white" /> Drip Irrigation</Text>
            <View style={styles.switchContainer}>
              <Text style={styles.switchLabel}>{isDripOn ? "ON" : "OFF"}</Text>
              <Switch
                value={isDripOn}
                onValueChange={setIsDripOn}
                trackColor={{ false: "#444", true: "#66ff99" }}
                thumbColor="white"
              />
            </View>
            <View style={styles.modeContainer}>
              <TouchableOpacity onPress={() => setDripMode("Auto")}>
                <Text style={[styles.modeButton, dripMode === "Auto" && styles.activeMode]}>Auto</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setDripMode("Manual")}>
                <Text style={[styles.modeButton, dripMode === "Manual" && styles.activeMode]}>Manual</Text>
              </TouchableOpacity>
            </View>
            {dripMode === "Auto" ? (
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Set Moisture %"
                value={String(dripMoisture)}
                onChangeText={(text) => setDripMoisture(Number(text))}
              />
            ) : (
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Set Time (min)"
                value={String(dripTime)}
                onChangeText={(text) => setDripTime(Number(text))}
              />
            )}
          </View>

          <View style={styles.statusCard}>
            <Text style={styles.statusTitle}><MaterialIcon name="sprinkler" size={20} color="white" /> Sprinkler Irrigation</Text>
            <View style={styles.switchContainer}>
              <Text style={styles.switchLabel}>{isSprinklerOn ? "ON" : "OFF"}</Text>
              <Switch
                value={isSprinklerOn}
                onValueChange={setIsSprinklerOn}
                trackColor={{ false: "#444", true: "#66ff99" }}
                thumbColor="white"
              />
            </View>
            <View style={styles.modeContainer}>
              <TouchableOpacity onPress={() => setSprinklerMode("Auto")}>
                <Text style={[styles.modeButton, sprinklerMode === "Auto" && styles.activeMode]}>Auto</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSprinklerMode("Manual")}>
                <Text style={[styles.modeButton, sprinklerMode === "Manual" && styles.activeMode]}>Manual</Text>
              </TouchableOpacity>
            </View>
            {sprinklerMode === "Auto" ? (
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Set Moisture %"
                value={String(sprinklerMoisture)}
                onChangeText={(text) => setSprinklerMoisture(Number(text))}
              />
            ) : (
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Set Time (min)"
                value={String(sprinklerTime)}
                onChangeText={(text) => setSprinklerTime(Number(text))}
              />
            )}
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  progressContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 0,
    position: "relative",
  },
  progressTextContainer: {
    position: "absolute",
    top: "42%",
    alignItems: "center",
  },
  progressText: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  progressSubText: {
    fontSize: 18,
    color: "gray",
    textAlign: "center",
  },
  statusCard: {
    backgroundColor: "#222",
    padding: 25,
    borderRadius: 12,
    marginBottom: 20,
  },
  statusTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  switchLabel: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  modeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  modeButton: {
    width:"100",
    padding: 10,
    borderRadius: 8,
    color: "white",
    backgroundColor: "#444",
    textAlign: "center",
  },
  activeMode: {
    backgroundColor: "#66ff99",
  },
  input: {
    backgroundColor: "#333",
    color: "white",
    padding: 10,
    marginTop: 10,
    borderRadius: 8,
    textAlign: "center",
  },
});

export default Home;
