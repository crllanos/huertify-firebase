import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Alert from "react-native-awesome-alerts";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showAlert: false };
  }

  showAlert = () => {
    this.setState({
      showAlert: true,
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false,
    });
  };

  render() {
    const { showAlert } = this.state;

    return (
      <View style={styles.container}>
        <Text>Practice App</Text>
        <Text style={{ padding: 10 }}>
          Open up App.js to start working on your app!
        </Text>
        <TouchableOpacity
          onPress={() => {
            this.showAlert();
          }}
        >
          <View style={styles.button}>
            <Text style={styles.text}>Greet Me</Text>
          </View>
        </TouchableOpacity>

        <Alert
          show={showAlert}
          message="Hello, Nice To Meet You  :"
          closeOnTouchOutside={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  button: {
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
    backgroundColor: "#AEDEF4",
  },
  text: {
    color: "#fff",
    fontSize: 15,
  },
});