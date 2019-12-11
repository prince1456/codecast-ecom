import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Input, Item, Label, Button, Text } from "native-base";
import { Formik } from "formik";
import * as Yup from "yup";
const SignupSchema = Yup.object().shape({
    password: Yup.string()
    .required('No password provided.') 
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
  });
const Login = ({ navigation }) => {
  const goTo = path => {
    navigation.navigate(path);
  };
  const Login = (values) => {
    console.log(values)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Formik
        validationSchema={SignupSchema}
        initialValues={{ email: "" , password: null }}
        onSubmit={Login}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched  }) => (
          <View>
            <Item style={styles.inputWrapper} floatingLabel>
              <Label>Email</Label>
              <Input
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </Item >
            <Item error={errors.password ? true : false} style={styles.inputWrapper} floatingLabel>
              <Label>Password</Label>
              <Input
                secureTextEntry
                placeholder={errors.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </Item>
            <Button onPress={handleSubmit} primary block>
              <Text>Sign Up</Text>
            </Button>
          </View>
        )}
      </Formik>
      <View style={styles.btnContainer}>
        <Text>Don't have an account?</Text>
        <Button transparent onPress={() => goTo("Login")}>
          <Text style={styles.signInText}>Sign Up</Text>
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 40
  },
  title: {
    fontSize: 35,
    marginBottom: 40
  },
  inputWrapper: {
    marginTop: 15,
    marginBottom: 20
  },
  btnContainer: {
    paddingLeft: 40,
    paddingRight: 40,
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  signInText: {
    fontWeight: "500",
    fontSize: 16,
    color: "black"
  }
});
export default Login;
