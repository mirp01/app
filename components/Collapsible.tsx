import Ionicons from '@expo/vector-icons/Ionicons';
import { PropsWithChildren, useState } from 'react';
import { TouchableOpacity, useColorScheme, View, Text } from 'react-native';


export function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);


  const contentStyle = {
    marginBottom: 6,
    marginLeft: 12,
  };

  return (
    <View>
      <TouchableOpacity
        className='flex-row items-center my-2 p-4 bg-yellow border-black border-2 rounded-md'
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}
      >
        <Ionicons
          name={isOpen ? 'chevron-down' : 'chevron-forward-outline'}
          size={18}
          color={'#dd1155'}
        />
        <Text style={{ fontWeight: '600' }} className='text-lg'>{title}</Text>
      </TouchableOpacity>
      {isOpen && <View style={contentStyle}>{children}</View>}
    </View>
  );
}
