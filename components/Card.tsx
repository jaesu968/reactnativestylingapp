import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Avatar from "./Avatar";

type CardProps = {
  avatar: string;
  name: string;
};

const Card = (props: CardProps) => (
  <View style={styles.container}>
    {/* Outer wrapper provides shadow/elevation (Android-safe) */}
    <View style={styles.shadowWrapper}>
      {/* Inner card handles background, borderRadius and clipping */}
      <View style={styles.cardInner}>
        <View style={styles.avatarWrapper}>
          <Avatar url={props.avatar} />
        </View>
        <Text style={styles.username} numberOfLines={1}>{props.name}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8,
        marginVertical: 6,
    },
    layout: {
      width: 70,
    },
    shadowWrapper: {
      // outer shadow container — allows inner content to be clipped on Android
      width: 70,
      height: 100,
      borderRadius: 10,
      // shadow for iOS
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.12,
      shadowRadius: 6,
      // elevation for Android / web
      elevation: 3,
      // use a solid background to avoid Android drawing artifacts where elevation
      // can appear to cover sibling content when the wrapper is transparent
      backgroundColor: '#ffffff',
    },
    cardInner: {
      flex: 1,
      backgroundColor: '#ffffff',
      borderRadius: 10,
      paddingVertical: 10,
      alignItems: 'center',
      justifyContent: 'center',
      // ensure children are clipped to rounded corners
      overflow: 'hidden',
    },
  /*styling for the usernames */ 
  username: {
      marginTop: 8,
      fontWeight: '600',
      fontSize: 14,
      color: '#333',
      textAlign: 'center'
  }
  ,
  avatarWrapper: {
    alignItems: 'center',
    justifyContent: 'center'
  }
}); 

export default Card;
