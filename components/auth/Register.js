import React from "react";
import { useState } from "react";
import { View, Button, TextInput } from "react-native";

import firebase from "firebase";

function Register() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    name: "",
  });

  const singUp = () => {
    const { email, password, name } = values;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="name"
        onChangeText={(name) => setValues({ ...values, name })}
      />
      <TextInput
        placeholder="email"
        onChangeText={(email) => setValues({ ...values, email })}
      />
      <TextInput
        placeholder="password"
        secureTextEntry={true}
        onChangeText={(password) => setValues({ ...values, password })}
      />
      <Button onPress={singUp}></Button>
    </View>
  );
}

export default Register;
