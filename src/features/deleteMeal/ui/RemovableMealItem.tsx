import React from 'react'
import {Animated, StyleSheet, View, Text} from 'react-native'
import {RectButton} from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import {MealItem, Meal, useMeal} from 'entities/meal'

const AnimatedView = Animated.createAnimatedComponent(View)

export function RemovableMealItem({item}: {item: Meal}) {
  const {removeMealByDate} = useMeal()

  function removeItem() {
    removeMealByDate(item.mealDate)
  }

  function renderLeftActions(
    progress: Animated.AnimatedInterpolation<string | number>,
    dragX: Animated.AnimatedInterpolation<string | number>,
  ) {
    const scale = dragX.interpolate({
      inputRange: [-80, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    })
    return (
      <RectButton style={styles.rightAction} onPress={removeItem}>
        <AnimatedView style={[styles.actionIcon, {transform: [{scale}]}]}>
          <Text>{'D'}</Text>
        </AnimatedView>
      </RectButton>
    )
  }

  return (
    <Swipeable renderRightActions={renderLeftActions}>
      <MealItem item={item} />
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  rightAction: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  actionIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
