import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

import Card from "./components/Card";
import Post from "./components/Post";
import data from "./data/data";
import type { User, Post as PostType, Featured } from "./data/data";

const HomeScreen = () => (
  <ScrollView>
    <Text style={{ fontFamily: 'Comic Sans MS', fontWeight: 'bold', marginTop: 10}}>Stories</Text>
    <ScrollView
      horizontal
      contentContainerStyle={{ paddingHorizontal: 12, paddingVertical: 12, alignItems: 'center' }}
      style={{ marginBottom: 6 }}
    >
      {(data.users as User[]).map((user) => (
        <Card key={user.id} avatar={user.avatar} name={user.name} />
      ))}
    </ScrollView>
    <Text style={[styles.heading, styles.headingModified]}>Featured</Text>
    {(data.featured as Featured[]).map((post) => (
      <Post
        key={post.id}
        image={post.image}
        title={post.title}
        description={post.description}
        friend={!!post.friend}
      />
    ))}

    <Text style={styles.heading}>My Feed</Text>
    {(data.posts as PostType[]).map((post) => (
      <Post
        key={post.id}
        image={post.image}
        title={post.title}
        description={post.description}
        friend={!!post.friend}
      />
    ))}
  </ScrollView>
);

const App = () => (
  <View style={{ flex: 1, backgroundColor: '#f2f4f7' }}>
    <HomeScreen />
  </View>
);

// styles object 
const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 15, 
    paddingBottom: 15,
    marginTop: 10, 
    marginLeft: 16,
    textTransform: 'uppercase',
    color: '#588bcdff',
    backgroundColor: 'transparent'
  },
  headingModified: {
    color: '#2561B0',
    fontSize: 30,
  }
}); 

export default App;
