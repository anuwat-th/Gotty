import React,{ useState, useEffect, useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { ApplicationStack } from './src/route/ApplicationStack';
/* Import Fonts */
import { FontLoader } from './src/helper/FontLoader';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();


export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                // Pre-load fonts, make any API calls you need to do here
                // await Font.loadAsync(Entypo.font);
                // Artificially delay for two seconds to simulate a slow loading
                await FontLoader();
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            // This tells the splash screen to hide immediately! If we call this after
            // `setAppIsReady`, then we may see a blank screen while the app is
            // loading its initial state and rendering its first pixels. So instead,
            // we hide the splash screen once we know the root view has already
            // performed layout.
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }
    
    onLayoutRootView();
    return (
        <ApplicationStack></ApplicationStack>
    );
}