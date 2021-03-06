import { Formik } from "formik";
import { Button, Input, Item, Label, Text } from "native-base";
import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import FirebaseApp from '../../Util/Auth';
const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    password: Yup.string()
    .required('No password provided.') 
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
  });
const SignUp = ({ navigation }) => {
  const goTo = path => {
    navigation.navigate(path);
  };
  const signUp = async (values) => {
      try {
          await FirebaseApp.register(values)
          await FirebaseApp.saveUserInfo(values)
      } catch (e) {
      console.log(e)
      }
    // alert(user)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignUp</Text>
      <Formik
        validationSchema={SignupSchema}
        initialValues={{ email: "" ,name: '', password: null }}
        onSubmit={signUp}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched  }) => (
          <View>
            <Item style={styles.inputWrapper} floatingLabel>
              <Label>Name</Label>
              <Input
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />
            </Item>
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
        <Text>Already have an account?</Text>
        <Button transparent onPress={() => goTo("Login")}>
          <Text style={styles.signInText}>Sign in</Text>
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
export default SignUp;
