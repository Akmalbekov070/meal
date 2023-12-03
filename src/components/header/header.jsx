'use client';
import {
	Box,
	Flex,
	HStack,
	Heading,
	IconButton,
	Image,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	useColorMode,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs';
import { PiListFill } from 'react-icons/pi';

export default function Header() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<>
			<Box w={'full'}>
				<Flex w={'full'} h={20} alignItems={'center'} bg={'gray.700'} px={'25px'}>
					<Link href={'/'}>
						<Image
							w={'100px'}
							src='https://static.vecteezy.com/system/resources/thumbnails/023/870/103/small/gyoza-japanese-traditional-food-asian-dumpling-poster-illustration-png.png'
							alt='home page'
						/>
					</Link>
					<HStack gap={8} display={{ base: 'none', lg: 'flex' }}>
						<Link href={'/'}>Home</Link>
						<Link href={'/abaout'}>Category</Link>
						<Link href={'/blog'}>AllCategory</Link>
					</HStack>
					<Box w={'full'} display={{ base: 'flex', lg: 'none' }} justifyContent={'end'} gap={4}>
						<HStack w={'full'} display={'flex'} justifyContent={'end'}>
							<IconButton
								aria-label='color-mode'
								onClick={toggleColorMode}
								icon={colorMode === 'light' ? <BsMoonStarsFill /> : <BsFillSunFill />}
								bg={'gray.700'}
								variant={'solid'}
								color={'white'}
							/>
						</HStack>
						<Menu>
							<MenuButton>
								<PiListFill size='37' />
							</MenuButton>
							<MenuList>
								<MenuItem>Home</MenuItem>
								<MenuItem>Category</MenuItem>
								<MenuItem>AllCategory</MenuItem>
							</MenuList>
						</Menu>
					</Box>
				</Flex>
			</Box>
		</>
	);
}
