import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'

import styles, { btnText, btn } from './tabs.style'
import { SIZES } from '../../../constants'

type TabsProps = { tabs: any, activeTab: any, setActiveTab: any};
type TabButtonProps = { name: any, activeTab: any, onHandleSearchType: any};

const TabButton: React.FC<TabButtonProps> = ({name, activeTab, onHandleSearchType}) => (
  <TouchableOpacity 
    style={btn(name, activeTab)}
    onPress={onHandleSearchType}
  > 
    <Text style={btnText(name, activeTab)}>
      {name}
    </Text>
  </TouchableOpacity>
)

const Tabs: React.FC<TabsProps> = ({tabs, activeTab, setActiveTab}) => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={tabs}
        renderItem={({ item }) => (
          <TabButton 
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item: any) => item}
      contentContainerStyle={{columnGap: SIZES.small /2}}
      />
    </View>
  )
}

export default Tabs