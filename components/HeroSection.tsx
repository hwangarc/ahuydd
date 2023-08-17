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
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Xin chào{' '}
          <Text as={'span'} color={'orange.400'}>
            tất cả các bạn
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Cảm ơn tất cả mọi người đã ủng hộ chúng mình.
        </Text> 
        <Text color={'gray.500'} maxW={'3xl'}>
          Donate của các bạn là động lực để chúng mình phát triển nhiều seri mới cũng như ra video nhanh hơn.
        </Text> 
        <a href="https://ibb.co/KsZnmtC"><img src="https://i.ibb.co/qgG6xHb/84128b032226f078a937.jpg" alt="84128b032226f078a937" border="0" /></a>
        <Stack spacing={6} direction={'row'}>
        </Stack>
        <Flex w={'full'}>
          <Illustration height={{ sm: '24rem', lg: '28rem' }} mt={{ base: 12, sm: 16 }} />
        </Flex>
      </Stack>
    </Container>
  )
}