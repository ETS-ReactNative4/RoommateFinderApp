import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Avatar, Icon, Divider } from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";

const ProfileScreen = ({ route, navigation }) => {
  //const [personalityTestTaken, setPersonalityTestTaken] = React.useState(false)

  const personalityTestTaken = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image
              source={require("../src/assets/profile-pic.jpg")}
              style={styles.image}
              resizeMode="center"
            ></Image>
          </View>

          <View style={styles.active}></View>
          <View style={styles.add}>
            <Ionicons
              name="ios-add"
              size={48}
              color="#DFD8C8"
              style={{ marginTop: 6, marginLeft: 2 }}
            ></Ionicons>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
            Bob Smith
          </Text>
          <Text style={[styles.text, { color: "#ffffffb2", fontSize: 14 }]}>
            Los Angeles, CA
          </Text>
        </View>

        <Divider
          orientation="horizontal"
          style={{ marginTop: 10, marginHorizontal: 25 }}
        />
        <View style={{ margin: 25 }}>
          <View style={[styles.rowLineUp, { marginBottom: 10 }]}>
            <Text style={[styles.text, { fontSize: 25 }]}>Personality</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("PersonalityTest")}
            >
              <Ionicons name="newspaper-outline" size={22} color="#dae4d6" />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 10 }} />
          {personalityTestTaken ? (
            <View style={{ alignSelf: "center" }}>
              <Text style={[styles.text, { fontSize: 45, color: "#ffffffb2" }]}>
                The Architect
              </Text>
              <View style={[styles.personalityImage, { marginLeft: 75 }]}>
                <Image
                  source={require("../src/assets/ProfileScreen/theArchitect.png")}
                  resizeMode="center"
                  style={styles.image}
                ></Image>
              </View>
            </View>
          ) : (
            <Text style={[styles.text, styles.subText]}>
              Take the personality test to find out your personality type and
              match with others!
            </Text>
          )}
        </View>

        <Divider
          orientation="horizontal"
          style={{ marginTop: 10, marginHorizontal: 25 }}
        />
        <View style={{ margin: 25 }}>
          <View style={[styles.rowLineUp, { marginBottom: 10 }]}>
            <Text style={[styles.text, { fontSize: 25 }]}>About me</Text>
            <TouchableOpacity onPress={() => console.log("editing about me")}>
              <FontAwesome5 name="edit" size={22} color="#dae4d6" />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 15 }} />
          <Text style={[styles.text, styles.subText]}>
            I am a new user who is learning to use the roommate finder app!
          </Text>
        </View>
        <Divider
          orientation="horizontal"
          style={{ marginTop: 5, marginHorizontal: 25 }}
        />
        <View style={{ margin: 25 }}>
          <View style={[styles.rowLineUp, { marginBottom: 10 }]}>
            <Text style={[styles.text, { fontSize: 25 }]}>Questionnaire</Text>
          </View>
          <View style={{ marginTop: 15 }} />
          <View style={styles.QuestionnaireAnswers}>
            <FontAwesome5
              name="location-arrow"
              size={24}
              color="#dae4d6"
              style={{ marginRight: 10 }}
            />
            <Text style={[styles.text, styles.subText]}>Location: </Text>
            <Text style={[styles.text, styles.subTextRight]}>Los Angeles</Text>
          </View>
          <View style={styles.QuestionnaireAnswers}>
            <FontAwesome5
              name="money-bill"
              size={24}
              color="#dae4d6"
              style={{ marginRight: 10 }}
            />
            <Text style={[styles.text, styles.subText]}>Budget: </Text>
            <Text style={[styles.text, styles.subTextRight]}>1500$</Text>
          </View>
          <View style={styles.QuestionnaireAnswers}>
            <FontAwesome5
              name="user-friends"
              size={24}
              color="#dae4d6"
              style={{ marginRight: 10 }}
            />
            <Text style={[styles.text, styles.subText]}>Roommate Status: </Text>
            <Text style={[styles.text, styles.subTextRight]}>Seeking</Text>
          </View>
          <View style={styles.QuestionnaireAnswers}>
            <FontAwesome5
              name="smoking"
              size={24}
              color="#dae4d6"
              style={{ marginRight: 10 }}
            />
            <Text style={[styles.text, styles.subText]}>Smoking Status: </Text>
            <Text style={[styles.text, styles.subTextRight]}>Non-Smoker</Text>
          </View>
          <View style={styles.QuestionnaireAnswers}>
            <FontAwesome5
              name="hands-wash"
              size={24}
              color="#dae4d6"
              style={{ marginRight: 10 }}
            />
            <Text style={[styles.text, styles.subText]}>Cleanliness: </Text>
            <Text style={[styles.text, styles.subTextRight]}>8/10</Text>
          </View>
          <View style={styles.QuestionnaireAnswers}>
            <FontAwesome5
              name="desktop"
              size={24}
              color="#dae4d6"
              style={{ marginRight: 10 }}
            />
            <Text style={[styles.text, styles.subText]}>Zoom preference: </Text>
            <Text style={[styles.text, styles.subTextRight]}>Friendly</Text>
          </View>
          <View style={styles.QuestionnaireAnswers}>
            <FontAwesome5
              name="dog"
              size={24}
              color="#dae4d6"
              style={{ marginRight: 10 }}
            />
            <Text style={[styles.text, styles.subText]}>Pet preference:</Text>{" "}
            <Text style={[styles.text, styles.subTextRight]}> Friendly</Text>
          </View>
        </View>
        <Divider
          orientation="horizontal"
          style={{ marginTop: 5, marginHorizontal: 25 }}
        />
        {/*<View style={{ marginTop: 32 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.mediaImageContainer}>
              <Image
                source={require("../src/assets/media1.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </View>
            <View style={styles.mediaImageContainer}>
              <Image
                source={require("../src/assets/media2.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </View>
            <View style={styles.mediaImageContainer}>
              <Image
                source={require("../src/assets/media3.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </View>
          </ScrollView>
          <View style={styles.mediaCount}>
            <Text
              style={[
                styles.text,
                { fontSize: 24, color: "#DFD8C8", fontWeight: "300" },
              ]}
            >
              70
            </Text>
            <Text
              style={[
                styles.text,
                { fontSize: 12, color: "#DFD8C8", textTransform: "uppercase" },
              ]}
            >
              Photos
            </Text>
          </View>
        </View>*/}
        <Divider
          orientation="horizontal"
          style={{ marginTop: 10, marginHorizontal: 25 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  text: {
    fontFamily: "HelveticaNeue",
    color: "#fff",
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginBottom: 10,
    marginHorizontal: 16,
  },
  subText: {
    fontSize: 18,
    color: "#dae4d6",
    fontWeight: "500",
  },
  subTextRight: {
    fontSize: 18,
    color: "#ecf1ea",
    fontWeight: "750",
  },
  personalityImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    overflow: "hidden",
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },
  dm: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    backgroundColor: "#34FFB9",
    position: "absolute",
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  add: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32,
  },
  statsBox: {
    alignItems: "left",
    flex: 1,
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  mediaCount: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10,
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  activityIndicator: {
    backgroundColor: "#CABFAB",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20,
  },
  rowLineUp: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  QuestionnaireAnswers: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
});
