import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Heading, HStack, Image, Text, VStack, Icon } from 'native-base'
import { Entypo 
} from '@expo/vector-icons'

type Props = TouchableOpacityProps & {

}

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack bg="gray.500" alignItems="center" p={2} pr={4} rounded={"md"} mb={3} >
        <Image
          source={{ uri: 'https://blog.gsuplementos.com.br/wp-content/uploads/2022/09/Serrote-exercicio.jpg' }}
          alt="Imagem do exercício"
          w={16}
          h={16}
          rounded={'md'}
          mr={4}
          // resizeMode="center"
        />

        <VStack>
          <Heading fontSize={"lg"} color="white">
            Remada Unilateral
          </Heading>

          <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>

      </HStack>
    </TouchableOpacity>
  )
}