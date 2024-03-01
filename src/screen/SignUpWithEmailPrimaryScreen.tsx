import React from "react";
import { SafeAreaView, View, Text } from "react-native";;
import { useNavigation } from "@react-navigation/native";
import { getFont, getText } from "../constant/screen/SignUpWithEmailPrimaryScreenText";
import Style from "../style/screen/SignUpWithEmailPrimaryScreenStyle";


import HeadBar100 from "../component/HeadBar100"
import Button100 from "../component/Button100";
import InputEmail from "../component/InputEmail";
const SignUpWithEmailPrimaryScreen = () => {
    const style = Style(getFont as any);
    const navigation = useNavigation<any>();

    const backButton = () => {
        navigation.navigate('SignUpIndexScreen');
    }

    return (
        <SafeAreaView style={style.container}>
            <HeadBar100 onPress={backButton} />
            <View style={style.titleTextContainer}>
                <Text style={style.titleText}>{getText('titleText')}</Text>
            </View>
            <View style={style.emailInputContainer}>
                <InputEmail isError={false} errorMessage={"Invalid Email"} />
            </View>
            <View style={style.continueButtonContainer}>
                <Button100 title={getText('continueButtonText')} />
            </View>
        </SafeAreaView>
    );
}

export default SignUpWithEmailPrimaryScreen;