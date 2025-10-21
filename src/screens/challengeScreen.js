import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";

class ChallengeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    async componentDidMount() {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const photo = await fetch('https://jsonplaceholder.typicode.com/photos');
        const dataJson = await data.json();
        const photoJson = await photo.json();
        this.setState({ posts: dataJson, photos: photoJson });
    }

    render() {
        const { posts, photos } = this.state;
        return (
            <View style={styles.container}>
                <Text>ApiScreen</Text>
                <FlatList
                    data={posts}
                    keyExtractor={item => item.id.toString()}
                    showsVerticalScrollIndicator={true}
                    style={styles.list}
                    contentContainerStyle={styles.listContent}
                    renderItem={({ item }) => (
                        <View style={styles.postContainer}>
                            <Image source={{ uri: photos[item.id - 1].thumbnailUrl }} style={{ width: 50, height: 50 }} />
                            <Text style={styles.postTitle}>{posts[item.id - 1].name}</Text>
                            <Text style={styles.postBody}>{posts[item.id - 1].email}</Text>
                            <Text style={styles.postBody}>{posts[item.id - 1].phone}</Text>
                            <Text style={styles.postBody}>{posts[item.id - 1].website}</Text>
                        </View>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "stretch",
        padding: 10,
    },
    postContainer: {
        marginBottom: 20,
        padding: 10,
    },
    postTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    postBody: {
        fontSize: 14,
        color: "#666",
    },
    list: {
        flex: 1,
        width: '100%'
    },
    listContent: {
        paddingBottom: 20
    }
});

export default ChallengeScreen;