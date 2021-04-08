import React from "react";
import { useState } from "react";
import { View, Button, TextInput } from "react-native";

function Register() {
  const [value, setValue] = useState({
    email: "",
    password: "",
    name: "",
  });

  const singUp = () => {
    console.log(value);
  };
  
  return (
    <View>
      <TextInput
        placeholder="name"
        onChangeText={(name) => setValue({ ...value, name })}
      />
      <TextInput
        placeholder="email"
        onChangeText={(email) => setValue({ ...value, email })}
      />
      <TextInput
        placeholder="password"
        secureTextEntry={true}
        onChangeText={(password) => setValue({ ...value, password })}
      />
      <Button onPress={singUp}></Button>
    </View>
  );
}

export default Register;
