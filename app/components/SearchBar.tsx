import { icons } from '@/constants/icons';
import React from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';

interface SearchBarProps {
  placeholder: string,
  onPress?: () => void
}

export const SearchBar = ({ placeholder, onPress }: SearchBarProps) => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-1 gap-2'>
      <Image source={icons.search} className='size-5' resizeMode='contain' tintColor='ab8bff' />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=''
        onChangeText={() => { }}
        placeholderTextColor='#a8b5db80'
        className='flex-1 text-white'
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});