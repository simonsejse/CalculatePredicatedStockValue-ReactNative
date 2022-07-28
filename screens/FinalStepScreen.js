import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectCurrentSavings,
  selectMonthlyInvestments,
  selectAmountYears,
} from '../slices/infoSlice';
import { useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import CurrencyFormat from 'react-currency-format';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

const FinalStepScreen = () => {
  const navigation = useNavigation();

  const currentSavings = useSelector(selectCurrentSavings);
  const monthlyInvestments = useSelector(selectMonthlyInvestments);
  const amountYears = useSelector(selectAmountYears);

  const [result, setResult] = useState(0);

  useEffect(() => {
    const result =
      currentSavings * (1 + 10 / 100 / 12) ** (12 * amountYears) +
      monthlyInvestments *
        (((1 + 10 / 100 / 12) ** (12 * amountYears) - 1) / (10 / 100 / 12));
    setResult(result);
  }, []);

  return (
    <>
      <View className='bg-gray-900 rounded-bl-3xl rounded-br-3xl py-10 px-5 space-y-4'>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          className='w-8 h-8 justify-center items-center bg-white rounded-full'
        >
          <ArrowLeftIcon color='#00CCBB' />
        </TouchableOpacity>
        <View>
          <Text className='font-bold text-lg text-white'>
            Din formue er blevet beregnet!
          </Text>
          <Text className='text-gray-200 text-sm'>
            Herunder kan du se et estimeret bud på, hvad din indtjening kunne
            være med et årlig afkast på 8 procent.
          </Text>
        </View>
      </View>
      <SafeAreaView className='flex-1'>
        <View className='flex-1 justify-center'>
          <LinearGradient
            start={[0, 1]}
            end={[1, 0]}
            colors={['#ef4444', '#8b5cf6']}
            style={{
              shadowColor: '#171717',
              shadowOffset: { width: -2, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
            }}
            className='mx-10 rounded-lg'
          >
            <View className='p-5'>
              <Text className='text-lg tracking-widest font-bold text-center text-white'>
                Estimeret formue
              </Text>
              <Text className='text-2xl text-white text-center'>
                <Text className='text-green-500'>{result.toFixed()}</Text> kr.
              </Text>
            </View>
          </LinearGradient>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          className='bg-green-500 rounded-lg m-5 p-5'
        >
          <Text className='text-center text-white text-2xl font-bold'>
            Beregn ny
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default FinalStepScreen;
