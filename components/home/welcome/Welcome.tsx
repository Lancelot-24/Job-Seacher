import React from 'react'
import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { tab, tabText } from './welcome.style'
import { icons, SIZES } from '../../../constants'

const jobTypes = ["Full-time", "Part-time", "Contractor"]

type WelcomeProps = {searchTerm: any, setSearchTerm: any, handleClick: any};

const Welcome: React.FC<WelcomeProps> = ({searchTerm, setSearchTerm, handleClick}) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Daniel</Text>
        <Text style={styles.welcomeMessage}>Welcome to JobFinder</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text as any)}
            placeholder="Search for jobs"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image 
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList 
          data={jobTypes}  
          renderItem={({ item }) => (
            <TouchableOpacity
              style={tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                if(searchTerm)
                  router.push(`/search/${item + " " + searchTerm}` as any)
                else
                  router.push(`/search/${item}` as any)
              }}
            >
              <Text style={tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
              keyExtractor={item => item}
              contentContainerStyle={{columnGap: SIZES.small}}
              horizontal
          />
      </View>

    </View>
  )
}

export default Welcome