import React, {useState, useRef} from 'react'
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  NativeSyntheticEvent,
} from 'react-native'
import * as UI from 'shared/ui'
import {useNavigationActions} from 'shared/lib'
import {useMeal} from 'entities/meal'
import {useStyles} from 'shared/theme'
import PagerView from 'react-native-pager-view'
import Slider from 'rn-range-slider'
import {Rating} from 'react-native-ratings'
import {FistIcon} from 'shared/assets/icons'
import {useMealForm} from '../model'

export function MealForm() {
  const pagerViewRef = useRef<PagerView>(null)
  const [currentPage, setCurrentPage] = useState(0)
  const {goBack} = useNavigationActions()
  const {
    ate,
    drank,
    contect,
    evaluation,
    volume,
    setAte,
    setDrank,
    setContect,
    setEvaluation,
    setVolume,
    saveActive,
  } = useMealForm()
  const {addNewMeal} = useMeal()
  const {styles, theme} = useStyles(createStyles)

  function save() {
    addNewMeal({
      mealDate: new Date().toISOString(),
      ate,
      drank,
      contect,
      evaluation,
      volume,
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

  function onPageSelected(
    event: NativeSyntheticEvent<
      Readonly<{
        position: number
      }>
    >,
  ) {
    setCurrentPage(event.nativeEvent.position)
  }

  const renderThumb = () => <View style={styles.lap} />

  const onSliderValueChanged = (low: number, high: number) => {
    setEvaluation(`От ${low} до ${high}`)
  }

  const onFinishRating = (f: number) => {
    setVolume(`${f} кул.`)
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      keyboardVerticalOffset={50}
      behavior="padding">
      <PagerView
        ref={pagerViewRef}
        style={styles.pager}
        initialPage={currentPage}
        scrollEnabled={false}
        onPageSelected={onPageSelected}>
        <View key="ate">
          <UI.Font size="xxLarge">{'Что ели?'}</UI.Font>
          <UI.TextInput value={ate} onChangeText={setAte} />
        </View>
        <View key="drank">
          <UI.Font size="xxLarge">{'Что пили?'}</UI.Font>
          <UI.TextInput size="xLarge" value={drank} onChangeText={setDrank} />
        </View>
        <View key="contect">
          <UI.Font size="xxLarge">{'Контекст'}</UI.Font>
          <UI.TextInput value={contect} onChangeText={setContect} />
        </View>
        <View key="evaluation">
          <UI.Font size="xxLarge">{'Оценка голода и насыщения'}</UI.Font>
          <UI.Font>{evaluation}</UI.Font>
          <Slider
            min={1}
            max={10}
            step={1}
            floatingLabel
            renderThumb={renderThumb}
            renderRail={renderView}
            renderRailSelected={renderView}
            onValueChanged={onSliderValueChanged}
          />
        </View>
        <View key="volume">
          <UI.Font size="xxLarge">{'Пищевые группы, объем'}</UI.Font>
          <UI.Font>{volume}</UI.Font>
          <Rating
            type="custom"
            ratingImage={FistIcon}
            ratingColor="pink"
            ratingBackgroundColor={theme.colors.background}
            ratingCount={10}
            startingValue={1}
            imageSize={30}
            onFinishRating={onFinishRating}
          />
        </View>
      </PagerView>
      <View style={styles.footer}>
        {currentPage !== 0 ? (
          <UI.TextButton title="Назад" onPress={previous} />
        ) : (
          <View />
        )}
        {saveActive && <UI.TextButton title="Сохранить" onPress={save} />}
        {currentPage !== 4 ? (
          <UI.TextButton title="Дальше" onPress={next} />
        ) : (
          <View />
        )}
      </View>
    </KeyboardAvoidingView>
  )
}

const renderView = () => <View />

const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 24,
      paddingHorizontal: 12,
    },
    pager: {
      flex: 1,
    },
    lap: {
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: 'pink',
    },
    footer: {
      paddingBottom: 34,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  })
