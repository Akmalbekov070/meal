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
				<Flex w={'full'} h={20} alignItems={'center'} justifyContent={'space-between'} bg={'gray.700'} px={'25px'}>
					<Link href={'/'}>
						<Image
							w={'100px'}
							src='https://static.vecteezy.com/system/resources/thumbnails/023/870/103/small/gyoza-japanese-traditional-food-asian-dumpling-poster-illustration-png.png'
							alt='home page'
						/>
					</Link>
					<HStack>
						<HStack gap={8} display={{ base: 'none', lg: 'flex' }} justifyContent={'space-between'}>
							<Link href={'/'}>Home</Link>
							<Link href={'/abaout'}>Category</Link>
							<Link href={'/blog'}>AllCategory</Link>
							<HStack w={'full'} display={'flex'}>
								<IconButton
									aria-label='color-mode'
									onClick={toggleColorMode}
									icon={colorMode === 'light' ? <BsMoonStarsFill /> : <BsFillSunFill />}
									bg={'gray.700'}
									variant={'solid'}
									color={'white'}
								/>
							</HStack>
						</HStack>
					</HStack>
					<Box w={'full'} display={{ base: 'flex', lg: 'none' }} justifyContent={'end'} gap={4}>
						<Menu>
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
							<MenuButton>
								<PiListFill size='37' />
							</MenuButton>
							<MenuList>
								<MenuItem>
									<Link href={'/'}>Home</Link>
								</MenuItem>
								<MenuItem>
									<Link href={'/abaout'}>Category</Link>
								</MenuItem>
								<MenuItem>
									{' '}
									<Link href={'/blog'}>AllCategory</Link>
								</MenuItem>
							</MenuList>
						</Menu>
					</Box>
				</Flex>
			</Box>
		</>
	);
}
