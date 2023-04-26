import React from 'react'
import {SectionList, StyleSheet} from 'react-native'
import * as UI from 'shared/ui'
import {MealItem} from '../MealItem'
import {useMeal, Meal} from '../../model'
import {fluidSize} from 'shared/lib'
import {Date} from '../Date'

const renderItem = ({item}: {item: Meal}) => {
  return <MealItem item={item} />
}

const SeparatorComponent = () => <UI.Spacer size={fluidSize(12)} />

const SectionHeader = ({section: {title}}: {section: {title: string}}) => (
  <Date dateString={title} />
)

export const MealSectionList = () => {
  const {mealSectionList} = useMeal()
  return (
    <SectionList
      showsVerticalScrollIndicator={false}
      sections={mealSectionList}
      contentContainerStyle={styles.list}
      keyExtractor={(item, index) => `meal-key-${index}`}
      renderItem={renderItem}
      SectionSeparatorComponent={SeparatorComponent}
      ItemSeparatorComponent={SeparatorComponent}
      renderSectionHeader={SectionHeader}
      stickySectionHeadersEnabled={false}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    paddingBottom: fluidSize(60),
  },
})
