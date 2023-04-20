import React, {useState, useRef} from 'react'
import {StyleSheet, View} from 'react-native'
import * as UI from 'shared/ui'
// import {useNavigationActions} from 'shared/lib'
// import {useMeal} from 'entities/meal'
import {useStyles} from 'shared/theme'
import PagerView from 'react-native-pager-view'

export function MealForm() {
  const pagerViewRef = useRef<PagerView>(null)
  const [currentPage, setCurrentPage] = useState(0)
  // const {goBack} = useNavigationActions()
  const [value, setValue] = useState('')
  const [value1, setValue1] = useState('')
  // const {addNewMeal} = useMeal()
  const {styles} = useStyles(createStyles)

  // function save() {
  //   addNewMeal({
  //     mealDate: new Date().toISOString(),
  //     ate: value,
  //     drank: 'Апельсиновый сок',
  //     contect: 'Забежал в столовку',
  //     evaluation: 'От 5 до 7',
  //     volume: '5 кулаков',
  //   })
  //   goBack()
  // }

  function scrollToPage(page: number) {
    return () => {
      if (pagerViewRef.current) {
        pagerViewRef.current.setPage(page)
        setCurrentPage(page)
      }
    }
  }

  return (
    <>
      <PagerView
        ref={pagerViewRef}
        style={styles.container}
        initialPage={currentPage}
        scrollEnabled={false}
        onPageSelected={event => setCurrentPage(event.nativeEvent.position)}>
        <View key="1">
          <UI.TextInput value={value} onChangeText={setValue} />
        </View>
        <View key="2">
          <UI.TextInput value={value1} onChangeText={setValue1} />
        </View>
      </PagerView>
      <UI.TextButton title="Save" onPress={scrollToPage(1)} />
    </>
  )
}

const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
  })
