import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAmountYears,
  selectCurrentSavings,
  selectMonthlyInvestments,
  setCurrentSavings,
  setMonthlyInvestments,
  setAmountYears,
} from '../slices/infoSlice';
const HomeScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className='flex-1'>
      <View className='flex-1'>
        <View className='m-5 p-5 bg-gray-900 rounded-lg'>
          <Text className='text-white text-2xl font-bold'>
            SÅ MEGET KAN DU TJENE
          </Text>
          <Text className='text-md text-gray-400'>
            Indsæt dine tal og se hvor meget DIN formue kan vokse!
          </Text>
        </View>
      </View>
      <View className='m-5 space-y-4'>
        <LinearGradient
          start={[0, 1]}
          end={[1, 0]}
          colors={['#6366F1', '#EC4899']}
          style={{
            shadowColor: '#171717',
            shadowOffset: { width: -2, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}
          className='rounded-lg'
        >
          <View className='p-7 flex-row'>
            <Text className='text-white text-sm tracking-wider flex-1'>
              NUVÆRENDE OPSPARING
            </Text>
            <TextInput
              placeholder='DKK'
              onChangeText={(text) => dispatch(setCurrentSavings(Number(text)))}
              keyboardType='numeric'
              className='bg-white rounded-md p-2'
            />
          </View>
        </LinearGradient>
        <LinearGradient
          start={[0, 1]}
          end={[1, 0]}
          colors={['#06B6D4', '#3B82F6']}
          style={{
            shadowColor: '#171717',
            shadowOffset: { width: -2, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}
          className='rounded-lg'
        >
          <View className='p-7 flex-row'>
            <Text className='text-white text-sm tracking-wider flex-1'>
              MÅNEDLIG INVESTERING
            </Text>
            <TextInput
              placeholder='DKK'
              onChangeText={(text) =>
                dispatch(setMonthlyInvestments(Number(text)))
              }
              keyboardType='numeric'
              className='bg-white rounded-md p-2'
            />
          </View>
        </LinearGradient>
        <LinearGradient
          start={[0, 1]}
          end={[1, 0]}
          colors={['#EAB308', '#A855F7']}
          style={{
            shadowColor: '#171717',
            shadowOffset: { width: -2, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}
          className='rounded-lg'
        >
          <View className='p-7 flex-row items-center'>
            <Text className='text-white text-sm tracking-wider flex-1'>
              ANTAL ÅR
            </Text>
            <TextInput
              placeholder='DKK'
              onChangeText={(text) => dispatch(setAmountYears(Number(text)))}
              keyboardType='numeric'
              className='bg-white rounded-md p-2'
            />
          </View>
        </LinearGradient>
      </View>
      <View className='flex-1'>
        <Text className='text-gray-500 text-sm mx-5'>
          Afkast er baseret på det gns. årlige afkast for globale aktier over de
          sidste 10 år. Afkast vil variere og al investering medfører risiko.
          Der er ikke medregnet skat og beløbet herunder er summen af dine
          indskud og afkastet.
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Preload')}
        className='bg-[#22C55E] p-5 m-5 rounded-lg items-center'
      >
        <Text className='text-white text-lg font-bold'>BEREGN</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
