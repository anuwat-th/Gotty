import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { getFont, getText } from "../constant/screen/SignUpIndexScreenText";
import Style from "../style/screen/SignUpIndexScreenStyle";

import HeadBar100 from "../component/HeadBar100";
import GoogleIcon100 from "../asset/svg/GoogleIcon100";
import ButtonSignUp from "../component/ButtonSignUp";
import ButtonContinue from "../component/ButtonContinue";

const SignUpIndexScreen = () => {

    const style = Style(getFont as any);

    const navigation = useNavigation<any>();
    const backButton = () => {
        navigation.navigate('IntroductionScreen');
    }

    const signUpWithGoogle = () => {

    }

    const signUpWithApple = () => {

    }
    
    const continueWithEmailButton = () => {
        navigation.navigate('SignUpWithEmailPrimaryScreen');
    }
    return (
        <SafeAreaView style={style.container}>
            <HeadBar100 onPress={backButton} />
            <View style={style.titleTextContainer}>
                <Text style={style.titleText}>{getText('titleText')}</Text>
            </View>
            <View style={style.googleButtonContainer}>
                <ButtonSignUp iconName={"Google"} title={getText('signUpWithGoogleButtonText')} />
            </View>
            <View style={style.appleButtonContainer}>
                <ButtonSignUp iconName={"Apple"} title={getText('signUpWithAppleButtonText')} />
            </View>
            <View style={style.lineContainer}>
                <View style={style.lineTextContainer}>
                    <Text style={style.lineText}>{getText('lineText')}</Text>
                </View>
                <View style={style.line} />
            </View>
            <View style={style.continueButtonContainer}>
                <ButtonContinue title={getText('continueWithEmailButtonText')} onPress={continueWithEmailButton} />
            </View>
        </SafeAreaView>
    );
}
export default SignUpIndexScreen;