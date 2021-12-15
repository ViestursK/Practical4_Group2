import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View,Image,StyleSheet } from "react-native";

export default function NewsList () {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a3fddf0b2e93475a840fd15dd7d4f61d"
    )
      .then((response) => response.json())
      .then((json) => setData(json.articles))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
        
          renderItem={({ item }) => (
            <View style={styles.box}>
              <View style={styles.titleView}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
              <View style={styles.contentContainer}>
                <Image
                  source={{ uri: item.urlToImage }}
                  style={styles.image}
                />
                <View style={styles.descCont}>
                  <Text style={styles.content}>{item.description}</Text>
                  <Text></Text>
                </View>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  box: {
    color: "blue",
    paddingTop: 10,
  },
  contentContainer: {
    flexDirection: "row",
    backgroundColor: "orange",
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderTopWidth: 0,
    borderColor: "black",
   
  },
  titleView: {
    padding: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "darkorange",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  content: {
    color: "black",
    fontSize: 15,
    margin: 10,
  },
  descCont: {
    alignContent: "center",
    justifyContent: "center",
    width: "50%",
    paddingLeft: 2,
  },
  image:{
    width: 150,
    height: 150,
    borderRadius: 100,
    margin: 10,
  }
});