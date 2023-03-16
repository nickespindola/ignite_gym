import React, { useState } from 'react'
import { SectionList } from 'react-native'
import { VStack } from 'native-base'

import { ScreenHeader } from '@components/ScreenHeader'
import { HistoryCard } from '@components/HistoryCard'

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: "16.03.2023",
      data: ["Puxada frontal", "Remada Unilateral"]
    },
    {
      title: "17.03.2023",
      data: ["Puxada frontal"]
    },
  ])

  return (
    <VStack flex={1}>
      <ScreenHeader title='Histórico de Exercícios' />

      <SectionList
        sections={exercises}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <HistoryCard />
        )}
      />

    </VStack>
  )
}