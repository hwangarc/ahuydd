'use client'

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
} from '@chakra-ui/react'

const Illustration = (props: IconProps) => {
    
}

export default function CallToActionWithIllustration() {
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <a href="https://ibb.co/gdpcbjd"><img src="https://i.ibb.co/T1SNDv1/huymomo.jpg" alt="huymomo" border="0" /></a>
        <Stack spacing={6} direction={'row'}>
        </Stack>
        <Flex w={'full'}>
          <Illustration height={{ sm: '24rem', lg: '28rem' }} mt={{ base: 12, sm: 16 }} />
        </Flex>
      </Stack>
    </Container>
  )
}