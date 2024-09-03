import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";

const SCREEN_WIDTH = Dimensions.get("window").width;

const Profile = () => {
  const data = [
    {
      key: "Profile",
      content: "Profile Content",
    },
    {
      key: "Help & Support",
      content: "Help & Support",
    },
    {
      key: "Privacy Policy",
      content: "Support Content",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={{ width: SCREEN_WIDTH }}>
      <Text>{item.content}</Text>
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
        paddingVertical: "20%",
        paddingHorizontal: 24,
      }}
    >
      {/* header */}
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: 1,
          borderBottomColor: "gray",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              paddingBottom: 10,
            }}
          >
            <Text
              style={{
                fontWeight: "600",
                fontSize: 17,
                lineHeight: 21,
              }}
            >
              {item.key}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Flat List */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Profile;
