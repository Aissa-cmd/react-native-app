import React from 'react';
import {View, Text, Button, Heading, KeyboardAvoidingView} from 'native-base';

import {ImageBackground, Platform, StyleSheet} from "react-native";
import {Formik} from 'formik';
import {
    VStack,
    Input,
    FormControl,
} from 'native-base';

const image = {uri: "https://image.freepik.com/free-vector/abstract-city-map-with-pins-navigation-app_95169-1513.jpg"};

const validate = (values) => {
  const errors = {};

  if (!values.email) {
      errors.email = 'Required';
  }
  if (!values.password) {
      errors.password = 'Required';
  }
  return errors;
};


function LoginView({navigation}) {
  const onSubmit = (data) => {
      console.log('submiting with ', data);
  };

  return (
    <View flex={1}>
      {/* Page header */}
      <View flex={2} style={styles.headCardView}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View pl={6} pr={6}>
              <Heading fontSize="34" color={"#001260"} mb={3} fontWeight={600}>Create better
                  with us
                  always.</Heading>
              <Text fontSize="18" color={"#757785"} fontWeight={500}>Welcome back.</Text>
          </View>
        </ImageBackground>
      </View>
      {/* /End Page header */}

      {/* Page body */}

      <View mt={-30} p={6} style={styles.bodyCardView}>
        <Heading fontSize={20} color={"#001260"} mt={2} mb={5} fontWeight={700}>Login</Heading>

        <View>
            <Formik initialValues={{email: '', password: ''}} onSubmit={onSubmit}
                    validate={validate}>
                {({handleChange, handleBlur, handleSubmit, values, errors}) => (
                    <VStack width="100%" space={4}>
                        <FormControl isRequired isInvalid={'email' in errors}>
                            {console.log("errors", errors)}
                            <Input
                                isFullWidth={true}
                                onBlur={handleBlur('email')}
                                placeholder="Username/Email"
                                onChangeText={handleChange('email')}
                                value={values.email}
                            />
                            <FormControl.ErrorMessage>
                                {errors.email}
                            </FormControl.ErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={'password' in errors}>
                            <Input
                                isFullWidth={true}
                                onBlur={handleBlur('password')}
                                placeholder="Password"
                                onChangeText={handleChange('password')}
                                value={values.password}
                            />
                            <FormControl.ErrorMessage>
                                {errors.password}
                            </FormControl.ErrorMessage>
                        </FormControl>
                        <View style={styles.submitBtn}>
                          <Button
                              p={15}
                              colorScheme={"secondary"}
                              backgroundColor={"#021B9C"}
                              onPress={handleSubmit}
                          >Login</Button>
                        </View>

                    </VStack>
                )}
            </Formik>
          </View>
      </View>
      {/* /End Page body */}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height:"100%",
    justifyContent: "center",
    width:"100%",
    backgroundPosition: "center top"
  },
  headCardView: {
    minHeight: 100,
  },
  bodyCardView: {
    flex:3,
    backgroundColor: "white",
    borderRadius: 30,
    width: "100%"
  },
  submitBtn: {
    justifyContent: "center",
    borderRadius: 100,
    overflow: "hidden",
    marginTop: 13      
  }
});

export default LoginView;
