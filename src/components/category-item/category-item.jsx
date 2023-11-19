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
import React from 'react';
import { BsFillEyeFill } from 'react-icons/bs';

export default function CategoryItem({ strCategory, strCategoryDescription, strCategoryThumb }) {
	return (
		<Link href={`/category/${strCategory}`}>
			<Card maxW='sm' mx={'auto'}>
				<CardBody p={0}>
					<Image
						w={'100%'}
						h={'250'}
						objectFit={'cover'}
						src={strCategoryThumb}
						alt='Green double couch with wooden legs'
						borderRadius='lg'
					/>
					<Stack p={4} mt='6' spacing='3'>
						<Heading size='md'>{strCategory}</Heading>
						<Text>{strCategoryDescription?.slice(0, 30)}...</Text>
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
