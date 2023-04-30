import React from 'react'
import {SectionList, StyleSheet, SectionListProps} from 'react-native'
import * as UI from 'shared/ui'
import {useMeal, Meal, MealSection} from '../../model'
import {fluidSize} from 'shared/lib'
import {Date} from '../Date'
import {MealItem} from '../MealItem'

const renderItem = ({item}: {item: Meal}) => {
  return <MealItem item={item} />
}

const SeparatorComponent = () => <UI.Spacer size={fluidSize(12)} />

const SectionHeader = ({section: {title}}: {section: {title: string}}) => (
  <Date dateString={title} />
)

export const MealSectionList = (
  props: Partial<SectionListProps<Meal, MealSection>>,
) => {
  const {mealSectionList} = useMeal()
  return (
    <SectionList
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      sections={mealSectionList}
      contentContainerStyle={styles.list}
      keyExtractor={(item, index) => `meal-key-${index}`}
      SectionSeparatorComponent={SeparatorComponent}
      ItemSeparatorComponent={SeparatorComponent}
      renderSectionHeader={SectionHeader}
      stickySectionHeadersEnabled={false}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    paddingBottom: fluidSize(60),
  },
})
