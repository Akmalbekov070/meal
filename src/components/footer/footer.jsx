'use client';
import { Box, Divider, HStack, Heading, Image, Link, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { TbCircleLetterC } from 'react-icons/tb';
import { FaTelegram } from 'react-icons/fa';
import { BiLogoGithub } from 'react-icons/bi';
import { BsInstagram } from 'react-icons/bs';

export default function FooterPage() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<>
			<Box
				w={'full'}
				h={'240px'}
				bg={colorMode === 'light' ? 'white' : 'gray.900'}
				display={'flex'}
				flexDirection={'column'}
				alignItems={'center'}
				pt={{ Base: 2, lg: 10 }}
			>
				<HStack pt={4}>
					<Link href={'/'}>
						<Image
							w={'60px'}
							src='https://static.vecteezy.com/system/resources/thumbnails/023/870/103/small/gyoza-japanese-traditional-food-asian-dumpling-poster-illustration-png.png'
							alt='home page'
						/>
					</Link>
					<Text fontFamily={'sans-serif'} fontStyle={'revert'} fontSize={'2xl'}>
						Mealdb.uz
					</Text>
				</HStack>
				<Box pt={8}>
					<HStack
						gap={{ base: 2, lg: 12, xl: 16 }}
						display={{ base: 'none', xl: 'flex' }}
						fontSize={'lg'}
						textDecoration={'none'}
					>
						<Link href={'/'}>Home</Link>
						<Link href={'/abaout'}>Category</Link>
						<Link href={'/blog'}>AllCategory</Link>
					</HStack>
				</Box>
				<Box w={'full'} h={'1.5px'} bg={'gray.600'} mt={8}></Box>
				<Box
					w={'full'}
					display={'flex'}
					flexDirection={{ base: 'column' }}
					alignItems={'center'}
					justifyContent={'space-between'}
					py={4}
					px={{ base: 8, xl: 8 }}
				>
					<Box w={'full'} display={'flex'} alignItems={'center'} gap={1}>
						<TbCircleLetterC />
						<Text w={'full'}>2023 Mealdb released. All rights reserved</Text>
					</Box>
					<Box
						w={{ base: '100%' }}
						display={'flex'}
						alignItems={'center'}
						justifyContent={{ base: 'center', xl: 'end' }}
						gap={{ base: 5, xl: 8 }}
						py={{ base: 5, xl: '0px' }}
					>
						<Link href={'https://t.me/akmalbekov'}>
							<FaTelegram size={'26'} />
						</Link>
						<Link href={'https://github.com/Akmalbekov070'}>
							<BiLogoGithub size={'26'} />
						</Link>
						<Link href={'https://instagram.com/akhmedov_313__?igshid=MWRxaGNlOWV3cm9iZg%3D%3D&utm_source=qr'}>
							<BsInstagram size={'25'} />
						</Link>
					</Box>
				</Box>
			</Box>
		</>
	);
}
