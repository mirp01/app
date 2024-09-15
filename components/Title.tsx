import React from 'react';
import { Text, View, Image } from 'react-native';

const imageMap: { [key: string]: any } = {
    main: require('../assets/images/title-cat-main.png'),
    mint: require('../assets/images/title-cat-mint.png'),
    yellow: require('../assets/images/title-cat-yellow.png'),
    darker: require('../assets/images/title-cat-darker.png'),
    lighter: require('../assets/images/title-cat-lighter.png'),
};

const colorMap: { [key: string]: string } = {
    main: '#aa1155',
    darker: '#880044',
    lighter: '#dd1155',
    yellow: '#ffee88',
    mint: '#00cc99',
};

export default function Title({ label, color = 'main' }: { label: string; color?: string }) {
    const textColor = colorMap[color] || colorMap.main;
    const imageSource = imageMap[color] || imageMap.main;

    return (
        <View style={{ marginTop: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: textColor, fontSize: 24, fontWeight: 'bold' }}>˗ˋˏ</Text>
                <Text style={{ color: textColor, fontSize: 24, fontWeight: 'bold', marginHorizontal: 8 }}>{label}</Text>
            </View>
            <View style={{ width: 80, height: 80, marginTop: -32 }}>
                <Image
                    source={imageSource}
                    style={{ 
                        width: '100%', 
                        height: '100%', 
                        resizeMode: 'contain', 
                        transform: [{ rotate: '10deg' }] 
                    }}
                />
            </View>
        </View>
    );
}