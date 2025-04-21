import React from 'react';
import { Image, ImageBackground, ImageSourcePropType, Text, View } from 'react-native';

type TabIconProps = {
  focused: boolean;
  icon: ImageSourcePropType;
  title: string;
};

export const TabIcon = ({ focused, icon, title }: TabIconProps) => {
  if (focused) {
    return (
        <View
          className='flex flex-row bg-white/5 w-full flex-1 min-w-[112px] min-h-[52px] mt-4 justify-center items-center rounded-full overflow-hidden gap-2'
        >
          <Image
            source={icon}
            tintColor="#c4b5fd"
            className='size-5'
          />
          <Text className='text-violet-300 text-xs'>{title}</Text>
        </View>
    )
  } else {
    return (
      <View className='size-full justify-center items-center mt-4 rounded-full'>
        <Image source={icon} tintColor='#a8b5db' className='size-5' />
      </View>
    )
  }
}