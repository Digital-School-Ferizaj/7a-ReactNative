import react from "react";
import { View, Text, StyleSheet } from "react-native";

class ApiScreen extends react.Component {

    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    async componentDidMount() {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        const dataJson = await data.json();
        this.setState({ posts: dataJson });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>ApiScreen</Text>
                <FlatList
                    data={this.state.posts}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default ApiScreen;