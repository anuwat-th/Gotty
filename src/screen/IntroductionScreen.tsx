import React, { useRef } from "react";
import { Animated, FlatList, SafeAreaView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { LanguageState, setLanguage } from "../redux/reducer/LanguageReducer";
import { useNavigation } from "@react-navigation/native";

import { getFont, getText } from "../constant/screen/IntroductionScreenText";
import Style from "../style/screen/IntroductionScreenStyle";

import Button100 from "../component/Button100";
import DashDot1 from "../asset/svg/DashDot1";
import DashDot2 from "../asset/svg/DashDot2";
import DashDot3 from "../asset/svg/DashDot3";
import IntroHeroBackground1 from "../asset/svg/IntroHeroBackground1";
import IntroHeroBackground2 from "../asset/svg/IntroHeroBackground2";
import IntroHeroBackground3 from "../asset/svg/IntroHeroBackground3";
import Button200 from "../component/Button200";

interface RenderProps {
  id: string;
  index: number;
  slideTitle: string;
  slideDescription: string;
  primaryButton: string;
  secondaryButton: string,
}



const IntroductionScreen = () => {
  const language = useSelector((state: { language: LanguageState }) => state.language.language);
  const dispatch = useDispatch();
  const flatListRef = useRef<FlatList<RenderProps> | null>(null);
  const itemOpacity = useRef(new Animated.Value(1)).current;
  const navigation = useNavigation<any>();
  const style = Style(getFont as any);

  const changeLanguage = (newLanguage: string) => {
    dispatch(setLanguage(newLanguage));
  };

  const renderData = [
    {
      id: '1',
      index: 1,
      slideTitle: getText('slideTitle1Text'),
      slideDescription: getText('slideDescription1Text'),
      primaryButton: getText('nextButtonText'),
      secondaryButton: getText('skipButtonText'),
    },
    {
      id: '2',
      index: 2,
      slideTitle: getText('slideTitle2Text'),
      slideDescription: getText('slideDescription3Text'),
      primaryButton: getText('nextButtonText'),
      secondaryButton: getText('skipButtonText'),
    },
    {
      id: '3',
      index: 3,
      slideTitle: getText('slideTitle3Text'),
      slideDescription: getText('slideDescription3Text'),
      primaryButton: getText('signInButtonText'),
      secondaryButton: getText('signUpButtonText'),
    },
  ]

  const IntroductionScreenFlatlist = ({ item }: { item: RenderProps }) => {

    const dashDot = (): React.ReactNode => {
      if (item.index == 1) {
        return <DashDot1 />;
      } else if (item.index == 2) {
        return <DashDot2 />;
      } else {
        return <DashDot3 />;
      }
    }

    const heroBackground = (): React.ReactNode => {
      if (item.index == 1) {
        return <IntroHeroBackground1 />;
      } else if (item.index == 2) {
        return <IntroHeroBackground2 />;
      } else {
        return <IntroHeroBackground3 />;
      }
    }

    const handlePrimaryButtonClick = () => {
      if (flatListRef.current && item.index != 3) {
        const currentIndex = renderData.findIndex((dataItem) => dataItem.id === item.id);
        const nextIndex = (currentIndex + 1) % renderData.length;

        Animated.timing(itemOpacity, {
          toValue: 0,
          duration: 100,
          useNativeDriver: false,
        }).start(() => {
          flatListRef.current?.scrollToIndex({ animated: true, index: nextIndex });
          Animated.timing(itemOpacity, {
            toValue: 1,
            duration: 750,
            useNativeDriver: false,
          }).start();
        });


      } else {
        changeLanguage('english');
        // navigation.navigate('SignInScreen');
      }
    };

    const handleSecondaryButton = () => {
      if (flatListRef.current && item.index != 3) {
        const nextIndex = 2;

        Animated.timing(itemOpacity, {
          toValue: 0,
          duration: 100,
          useNativeDriver: false,
        }).start(() => {
          flatListRef.current?.scrollToIndex({ animated: true, index: nextIndex });
          Animated.timing(itemOpacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
          }).start();
        });
      } else {
        navigation.navigate('SignUpIndexScreen');
      }
    };

    return (
      <SafeAreaView>
        <Animated.View style={[style.heroBackground, { opacity: itemOpacity }]}>
          {heroBackground()}
        </Animated.View>
        <View style={style.actionContainer}>
          <View style={style.dashDotContainer}>
            {dashDot()}
          </View>
          <View style={style.slideTitleContainer}>
            <Text style={style.slideTitleText}>{item.slideTitle}</Text>
          </View>
          <View style={style.slideDescriptionContainer}>
            <Text style={style.slideDescriptionText}>{item.slideDescription}</Text>
          </View>
          <View style={style.primaryButtonContainer}>
            <Button100 title={item.primaryButton} onPress={handlePrimaryButtonClick} />
          </View>
          <View style={style.secondaryButtonContainer}>
            <Button200 title={item.secondaryButton} onPress={handleSecondaryButton} />
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <View style={style.container}>
      <FlatList
        data={renderData}
        ref={flatListRef}
        renderItem={IntroductionScreenFlatlist}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
      />

    </View>
  );
};



export default IntroductionScreen;


