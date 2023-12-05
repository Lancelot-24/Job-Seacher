import { useState, useEffect } from 'react';
import {Keyboard, View, Text, ScrollView, SafeAreaView} from 'react-native';
import {Stack, useRouter} from 'expo-router';

import { COLORS, icons, images, SIZES} from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components'


const Home = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");


    const onPress = () => { console.log("pressed")};

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen 
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" handlePress={onPress}/>
                    ),
                   /* headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" handlePress={onPress}/>
                    ),*/
                    headerTitle: ""
                }}
            />

            <ScrollView 
                showsVerticalScrollIndicator={false}
                >
                <View
                style={{
                    flex: 1,
                    padding: SIZES.medium
                }}>
                    <Welcome 
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleClick={() => {
                            if(searchTerm) {
                                router.push(`/search/${searchTerm}` as any);
                            }
                        }}
                    />

                    <Popularjobs 
                    />

                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;