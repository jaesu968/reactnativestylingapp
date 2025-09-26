import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

type PostProps = {
  friend: boolean;
  image: string;
  title: string;
  description: string;
};

const Post = (props: PostProps) => (
  <View style={styles.container}>
    {/* Outer wrapper for shadow (Android-safe) */}
    <View style={[styles.shadowWrapper, props.friend ? styles.friendShadow : null]}>
      {/* Inner card — handles rounding and clipping */}
      <View style={[styles.cardInner, props.friend ? styles.friendBackground : styles.defaultBackground]}>
        <Image style={styles.image} source={{ uri: props.image }} />
        <View style={styles.content}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.description}>{props.description}</Text>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 12,
  },
  shadowWrapper: {
    borderRadius: 16,
    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    // Android elevation
    elevation: 2,
    // use a solid background to avoid Android overlay artifacts
    backgroundColor: '#ffffff',
  },
  friendShadow: {
    // slightly stronger shadow for friend posts (optional)
    shadowColor: '#0b84ff',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardInner: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  friendBackground: {},
  defaultBackground: {},
  image: {
    width: "100%",
    height: 180,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    resizeMode: "cover",
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  title: {
    marginBottom: 6,
    /* Add additional styling below */
  },
  description: {
    lineHeight: 20,
    /* Add additional styling below */
  },
});

export default Post;
