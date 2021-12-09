import React, { useEffect } from 'react';
import { View, Text, Image, StatusBar, StyleSheet } from 'react-native';
import { CONSTANTS } from '../constants/AppConst';
import { COLORS } from '../theme/colors';
import { useDispatch, useSelector } from 'react-redux';
import { heightPercentageToDP, widthPercentageToDP } from '../helpers/lib';


const Splashscreen = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: CONSTANTS.SPLASH_SCREEN_HIDE_REQUEST })
        }, 4500);
    }, [])

    return (
        <View style={styles.mainView}>
            <StatusBar hidden />
            <Image source={require('../images/logo.gif')} resizeMode='contain' style={styles.imageView} />
        </View>
    )
}

export default Splashscreen

const styles = StyleSheet.create({

    mainView: {
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    imageView: {
        width: widthPercentageToDP(80),
        height: heightPercentageToDP(80),
    },


});