"use client"
import { Box, Flex, HStack, Heading, IconButton,  Image,  useColorMode } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import {BsFillSunFill , BsMoonStarsFill} from 'react-icons/bs';



export default function Header() {
  const { colorMode , toggleColorMode } = useColorMode()
  
  return (
    <Box w={'full'}  >
      <Flex w={'full'} h={20} alignItems={'center'} justifyContent={'space-between'} bg={'gray.700'}  px={'25px'}>
        <Link href={'/'}> 
         <Image w={'100px'}  src='https://static.vecteezy.com/system/resources/thumbnails/023/870/103/small/gyoza-japanese-traditional-food-asian-dumpling-poster-illustration-png.png' alt='home page' />
        </Link>
      <HStack gap={8}>
      <Link href={'/abaout'}>Home</Link>
      <Link href={'/blog'}>About</Link>
      <Link href={'/hero'}>Contact</Link>
      <IconButton aria-label='color-mode' onClick={toggleColorMode} icon={colorMode === 'light' ? <BsMoonStarsFill  /> : <BsFillSunFill />} bg={'gray.700'} variant={'solid'} color={'white'} />
      </HStack>
      </Flex>
    </Box>
  )
}
