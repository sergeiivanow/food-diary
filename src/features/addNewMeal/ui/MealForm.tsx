import React, {useState, useRef} from 'react'
import {StyleSheet, View} from 'react-native'
import * as UI from 'shared/ui'
import {useNavigationActions} from 'shared/lib'
import {useMeal} from 'entities/meal'
import {useStyles} from 'shared/theme'
import PagerView from 'react-native-pager-view'

export function MealForm() {
  const pagerViewRef = useRef<PagerView>(null)
  const [currentPage, setCurrentPage] = useState(0)
  const {goBack} = useNavigationActions()
  const [ate, setAte] = useState('')
  const [drank, setDrank] = useState('')
  const [contect, setContect] = useState('')
  const {addNewMeal} = useMeal()
  const {styles} = useStyles(createStyles)
  const saveActive = ate && drank && contect

  function save() {
    addNewMeal({
      mealDate: new Date().toISOString(),
      ate,
      drank,
      contect,
      evaluation: 'От 5 до 7',
      volume: '5 кулаков',
    })
    goBack()
  }

  function scrollToPage(page: number) {
    if (pagerViewRef.current) {
      pagerViewRef.current.setPage(page)
      setCurrentPage(page)
    }
  }

  function previous() {
    scrollToPage(currentPage - 1)
  }

  function next() {
    scrollToPage(currentPage + 1)
  }

  return (
    <>
      <PagerView
        ref={pagerViewRef}
        style={styles.container}
        initialPage={currentPage}
        scrollEnabled={false}
        onPageSelected={event => setCurrentPage(event.nativeEvent.position)}>
        <View key="ate">
          <UI.TextInput value={ate} onChangeText={setAte} />
        </View>
        <View key="drank">
          <UI.TextInput value={drank} onChangeText={setDrank} />
        </View>
        <View key="contect">
          <UI.TextInput value={contect} onChangeText={setContect} />
        </View>
      </PagerView>
      <UI.TextButton title="Назад" onPress={previous} />
      <UI.TextButton title="Дальше" onPress={next} />
      {saveActive && <UI.TextButton title="Сохранить" onPress={save} />}
    </>
  )
}

const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
  })
