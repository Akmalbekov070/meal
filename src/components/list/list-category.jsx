import React from 'react';
import {
	Box,
	Button,
	ButtonGroup,
	Card,
	CardBody,
	CardFooter,
	Divider,
	Flex,
	Heading,
	Image,
	Stack,
	Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { BsFillEyeFill } from 'react-icons/bs';

export default function Listcategory({ idMeal, strMeal, strMealThumb }) {
	return (
		<Link href={`/category/retsipe/${idMeal}`}>
			<Card maxW='sm' mx={'auto'} mt={6}>
				<CardBody p={0}>
					<Image
						w={'100%'}
						h={'250'}
						objectFit={'cover'}
						src={strMealThumb}
						alt='Green double couch with wooden legs'
						borderRadius='lg'
					/>
					<Stack p={4} mt='6' spacing='3'>
						<Heading size='md'>{strMeal.slice(0, 20)}</Heading>
					</Stack>
				</CardBody>
				<Divider />
				<CardFooter>
					<ButtonGroup spacing='2'>
						<Button variant='solid' colorScheme='blue'>
							Watch Category
							<Flex p={2} pb={'2px'}>
								<BsFillEyeFill />
							</Flex>
						</Button>
					</ButtonGroup>
				</CardFooter>
			</Card>
		</Link>
	);
}
