import { Box, Container, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

export default function Blog() {
	return (
		<Box w={'full'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} py={'20'}>
			<Box w={{ base: '100%', xl: '50%' }} border={'1px'} borderColor={'white'} p={10} boxShadow={'dark-lg'} borderRadius={'10'}>
				<Text>
					On this site you can get your favorite food recipes and cook it and the plus side of this site is that you can cook it
					via video.If you want to get more information about the site, contact us
				</Text>
				<Text color={'green.400'} py={2}>
					MERN stack & Web Developer.
				</Text>
				<Box w={'full'} bg={'red.800'} h={'2px'} my={2}></Box>
				<Box w={'full'} display={{ base: 'block', xl: 'flex' }} px={10} pt={2}>
					<Box w={'full'} display={{ base: 'block', xl: 'flex' }} flexDirection={'column'}>
						<HStack w={'full'}>
							<FaChevronRight color='red' />
							<Text> Country: Uzbekistan </Text>
						</HStack>
						<HStack>
							<FaChevronRight color='red' />
							<Text> City: Samarkand </Text>
						</HStack>
					</Box>
					<Box w={'full'} display={'flex'} flexDirection={'column'}>
						<HStack>
							<FaChevronRight color='red' />
							<Text> Phone: +99891 313 89 89</Text>
						</HStack>
						<HStack>
							<FaChevronRight color='red' />
							<Text> Organized: Ahmadjonov Akmal</Text>
						</HStack>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
