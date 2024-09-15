import { Text, View, Image, StyleSheet } from 'react-native';

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
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text 
                    style={{ 
                        color: textColor, 
                        fontSize: 24, 
                        fontWeight: 'bold'
                    }}
                >
                    ˗ˋˏ
                </Text>
                <Text 
                    style={{ 
                        color: textColor, 
                        fontSize: 24, 
                        fontWeight: 'bold', 
                        marginHorizontal: 8 
                    }}
                >
                    {label}
                </Text>
            </View>
            <View style={styles.imageWrapper}>
                <Image
                    source={imageSource}
                    style={styles.image}
                />
            </View>
            <View style={[styles.shadowLine, { backgroundColor: textColor, shadowColor: textColor }]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginBottom: 10,
        flexDirection: 'row', // Align text and image horizontally
        alignItems: 'center', // Center vertically
        position: 'relative',
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageWrapper: {
        marginLeft: 8, // Space between text and image
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        transform: [{ rotate: '10deg' }],
    },
    shadowLine: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 2,
        elevation: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
});
