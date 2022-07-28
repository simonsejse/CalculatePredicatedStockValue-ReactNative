import { View, Text, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
const PreloadScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('FinalStep');
    }, 3000);
  }, []);

  return (
    <SafeAreaView className='flex-1 justify-center items-center'>
      <Animatable.Image
        source={require('../assets/preloader.gif')}
        animation='slideInUp'
        iterationCount={1}
        className='h-48 w-48'
      ></Animatable.Image>
      <Animatable.Text
        animation='slideInUp'
        iterationCount={1}
        className='text-xl my-20 text-gray-900 font-bold text-center'
      >
        Vent venligst! Beregner indkomst!
      </Animatable.Text>
      <Animatable.View animation='slideInUp' iterationCount={1}>
        <Progress.Bar
          size={50}
          color='purple'
          indeterminate={true}
          width={200}
        />
      </Animatable.View>
    </SafeAreaView>
  );
};

export default PreloadScreen;
