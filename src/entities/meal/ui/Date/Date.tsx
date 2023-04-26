import React from 'react'
import * as UI from 'shared/ui'
import {View, StyleSheet} from 'react-native'
import {parseISO, format} from 'date-fns'
import {ru} from 'date-fns/locale'
import {useStyles} from 'shared/theme'

export function Date({dateString}: {dateString: string}) {
  const {styles} = useStyles(createStyles)
  const date = parseISO(dateString)
  return (
    <View style={styles.container}>
      <UI.Font size="xLarge">
        {format(date, 'd LLL yyyy', {locale: ru})}
      </UI.Font>
    </View>
  )
}

const createStyles = () =>
  StyleSheet.create({
    container: {
      //
    },
  })
