import React, { useRef, useState } from "react";
import { TextInput, TextInputProps, View, Text } from "react-native";
import { getFont, getText } from "../constant/component/InputEmailText";
import { Style } from "../style/component/InputEmailStyle";

interface InputEmailProps extends TextInputProps {
    isError: boolean;
    errorMessage: string;
}

const InputEmail: React.FC<InputEmailProps> = ({ onChangeText, isError, errorMessage, ...rest }) => {

    const style = Style(getFont as any);

    const textInputRef = useRef<TextInput | null>(null);
    const [value, setValue] = useState<string>('');
    const [isFocus, setIsFocus] = useState<boolean>(false);

    const handleFocus = () => {
        if (textInputRef.current) {
            textInputRef.current.focus();
        }
        setIsFocus(true);
    }
    const handleBlur = () => {
        if (value === '') {
            setIsFocus(false);
        } else {
            setIsFocus(true);
        }
    }
    const handleChangeText = (text: string) => {
        setValue(text);
    };

    return (
        <View style={style.container}>
            <View style={style.titleTextContainer}>
                <Text style={style.titleText}>{getText('titleText')}</Text>
            </View>
            <TextInput
                ref={textInputRef}
                style={[style.inputField, isFocus === true ? style.inputFocus : style.inputNoFocus, isError === true ? style.inputError : null]}
                onChangeText={(text) => handleChangeText(text)} value={value}
                autoCapitalize='none'
                autoCorrect={false}
                onFocus={handleFocus}
                onBlur={handleBlur}
                {...rest}
            />
            {isError && (
                <View style={style.errorMessageTextContainer}>
                    <Text style={style.errorMessageText} >{errorMessage}</Text>
                </View>
            )}
        </View>
    );
}
export default InputEmail;