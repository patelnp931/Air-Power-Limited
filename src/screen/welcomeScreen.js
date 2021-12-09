import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image, StatusBar } from 'react-native';
import { useDispatch } from 'react-redux';
import { heightPercentageToDP, widthPercentageToDP } from '../helpers/lib';
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLORS } from '../theme/colors';
import { CONSTANTS } from '../constants/AppConst';


const welcomeScreen = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        StatusBar.setHidden(false);
    }, [])

    const renderNextButton = () => {
        return (
            <View style={styles.nextView}>
                <Text style={styles.nextLabel}>Next</Text>
            </View>
        );
    }

    const renderDoneButton = () => {
        return (
            <View style={styles.nextView}>
                <Text style={styles.nextLabel}>Done</Text>
            </View>
        );
    }

    const _renderItem = ({ item }) => {
        return (
            <View style={styles.slide}>
                {/* <View> */}
                <Image source={item.image} resizeMode='cover' style={styles.imageView} />
                <View>
                    <Text style={styles.text}>{item.text}</Text>
                    <Text style={styles.Desc}>{item.desc}</Text>
                </View>
                {/* </View> */}
            </View>
        );
    }

    const _onDone = () => {
        dispatch({ type: CONSTANTS.WELCOME_SCREEN_VIEW_REQUEST })
    }

    return <AppIntroSlider
        activeDotStyle={styles.activeDotStyle}
        // dotStyle={styles.dotStyle}
        renderItem={_renderItem} data={Slides} onDone={_onDone}
        renderNextButton={renderNextButton}
        renderDoneButton={renderDoneButton} />;
}


export default welcomeScreen;

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: 'center'
    },

    activeDotStyle: {
        backgroundColor: COLORS.black,
    },

    text: {
        fontSize: widthPercentageToDP(6.5),
        color: COLORS.black,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
        marginBottom: 40,
        marginTop: 10
    },
    imageView: {
        width: widthPercentageToDP(97),
        height: heightPercentageToDP(50),
        alignSelf: 'center',
    },
    Desc: {
        textAlign: 'center',
        color: COLORS.black,
        fontSize: heightPercentageToDP(3),
        width: widthPercentageToDP(88),
        alignSelf: 'center'
    },
    nextView: {
        width: 60,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextLabel: {
        color: COLORS.black,
        fontSize: heightPercentageToDP(2.3),
        fontWeight: 'bold'
    }
});


const Slides = [
    {
        key: 'one',
        text: 'Search',
        desc: 'Searching through our inventories made easy.',
        image: require('../images/search.png'),
    },
    {
        key: 'two',
        text: 'Book',
        desc: 'Get the right exposure by booking your favourite ad space.',
        image: require('../images/book.png'),
    },
    {
        key: 'three',
        text: 'Go Live',
        desc: 'Your campaign goes live to the right audience.',
        image: require('../images/live.jpg'),
    },
];
