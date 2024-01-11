'use client';
import {
	Box,
	Button,
	Divider,
	Heading,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Table,
	TableCaption,
	TableContainer,
	Tbody,
	Td,
	Text,
	Tfoot,
	Th,
	Thead,
	Tr,
	useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import CategoryList from '../category-list/category-list';

export default function HomePage() {
	const [meal, setMeal] = useState([]);
	const { isOpen, onOpen, onClose } = useDisclosure();
	useEffect(() => {
		fetch('https://www.themealdb.com/api/json/v1/1/random.php?key=1')
			.then(res => res.json())
			.then(data => setMeal(data.meals));
	}, []);

	return (
		<Box w={'full'}>
			{meal.map(el => (
				<Box key={el.idMeal} w={'full'} h={{ base: '88%', lg: '90%', xl: '600px' }} position={'relative'}>
					<Image
						w={'full'}
						h={{ base: '88%', lg: '90%', xl: '100%' }}
						objectFit={'cover'}
						src={el.strMealThumb}
						alt='home image'
					/>
					<Box
						position={'absolute'}
						top={0}
						left={0}
						bg={'blackAlpha.600'}
						w={'full'}
						h={{ base: '100%', lg: '90%', xl: '600px' }}
					></Box>
					<Box position={'absolute'} top={{ base: '30px', sm: '200px', lg: '130px', xl: '150px' }} left={20}>
						<Heading>{el.strMeal}</Heading>
						<Text w={{ base: '80%', lg: '66%', xl: '50%' }} py={5}>
							{el.strInstructions.slice(0, 150)}...
						</Text>
						<Button onClick={onOpen} mt={4} variant={'solid'}>
							Watch Details
						</Button>
					</Box>
					<Modal size={'5xl'} isOpen={isOpen} onClose={onClose}>
						<ModalOverlay />
						<ModalContent>
							<ModalHeader>
								{el.strMeal}
								<Image w={'full'} h={'400px'} objectFit={'cover'} src={el.strMealThumb} mt={3} />
							</ModalHeader>
							<ModalCloseButton size={'lg'} />
							<ModalBody>
								<Text fontWeight={'bold'}>Category: {el.strCategory}</Text>
								<Text>{el.strInstructions}</Text>
								<Text fontWeight={'bold'}>Country: {el.strArea}</Text>
								{/* table list */}
								<TableContainer>
									<Table variant='striped' colorScheme='teal'>
										<TableCaption>Imperial to metric conversion factors</TableCaption>
										<Thead>
											<Tr>
												<Th>To convert</Th>
												<Th>into</Th>
												<Th isNumeric>multiply by</Th>
											</Tr>
										</Thead>
										<Tbody>
											{el.strIngredient1 ? (
												<Tr>
													<Td>{el.strIngredient1}</Td>
													<Td></Td>
													<Td isNumeric>{el.strMeasure1}</Td>
												</Tr>
											) : null}
											{el.strIngredient2 ? (
												<Tr>
													<Td>{el.strIngredient2}</Td>
													<Td></Td>
													<Td isNumeric>{el.strMeasure2}</Td>
												</Tr>
											) : null}
											{el.strIngredient3 ? (
												<Tr>
													<Td>{el.strIngredient3}</Td>
													<Td></Td>
													<Td isNumeric>{el.strMeasure3}</Td>
												</Tr>
											) : null}
											{el.strIngredient4 ? (
												<Tr>
													<Td>{el.strIngredient4}</Td>
													<Td></Td>
													<Td isNumeric>{el.strMeasure4}</Td>
												</Tr>
											) : null}
											{el.strIngredient5 ? (
												<Tr>
													<Td>{el.strIngredient5}</Td>
													<Td></Td>
													<Td isNumeric>{el.strMeasure5}</Td>
												</Tr>
											) : null}
											{el.strIngredient6 ? (
												<Tr>
													<Td>{el.strIngredient6}</Td>
													<Td></Td>
													<Td isNumeric>{el.strMeasure6}</Td>
												</Tr>
											) : null}
											{el.strIngredient7 ? (
												<Tr>
													<Td>{el.strIngredient7}</Td>
													<Td></Td>
													<Td isNumeric>{el.strMeasure7}</Td>
												</Tr>
											) : null}
											{el.strIngredient8 ? (
												<Tr>
													<Td>{el.strIngredient8}</Td>
													<Td></Td>
													<Td isNumeric>{el.strMeasure8}</Td>
												</Tr>
											) : null}
											{el.strIngredient9 ? (
												<Tr>
													<Td>{el.strIngredient9}</Td>
													<Td></Td>
													<Td isNumeric>{el.strMeasure9}</Td>
												</Tr>
											) : null}
											{el.strIngredient10 ? (
												<Tr>
													<Td>{el.strIngredient10}</Td>
													<Td></Td>
													<Td isNumeric>{el.strMeasure10}</Td>
												</Tr>
											) : null}
											{el.strIngredient11 ? (
												<Tr>
													<Td>{el.strIngredient11}</Td>
													<Td></Td>
													<Td isNumeric>{el.strMeasure11}</Td>
												</Tr>
											) : null}
											{el.strIngredient12 ? (
												<Tr>
													<Td>{el.strIngredient12}</Td>
													<Td></Td>
													<Td isNumeric>{el.strMeasure12}</Td>
												</Tr>
											) : null}
											{el.strIngredient13 ? (
												<Tr>
													<Td>{el.strIngredient13}</Td>
													<Td></Td>
													<Td isNumeric>{el.strMeasure13}</Td>
												</Tr>
											) : null}
											{el.strIngredient14 ? (
												<Tr>
													<Td>{el.strIngredient14}</Td>
													<Td></Td>
													<Td isNumeric>{el.strMeasure14}</Td>
												</Tr>
											) : null}
											{el.strIngredient15 ? (
												<Tr>
													<Td>{el.strIngredient15}</Td>
													<Td></Td>
													<Td isNumeric>{el.strMeasure15}</Td>
												</Tr>
											) : null}
											{el.strIngredient16 ? (
												<Tr>
													<Td>{el.strIngredient16}</Td>
													<Td></Td>
													<Td isNumeric>{el.strMeasure16}</Td>
												</Tr>
											) : null}
											{el.strIngredient17 ? (
												<Tr>
													<Td>{el.strIngredient17}</Td>
													<Td></Td>
													<Td isNumeric>{el.strMeasure17}</Td>
												</Tr>
											) : null}
											{el.strIngredient18 ? (
												<Tr>
													<Td>{el.strIngredient18}</Td>
													<Td></Td>
													<Td isNumeric>{el.strMeasure18}</Td>
												</Tr>
											) : null}
											{el.strIngredient19 ? (
												<Tr>
													<Td>{el.strIngredient19}</Td>
													<Td></Td>
													<Td isNumeric>{el.strMeasure19}</Td>
												</Tr>
											) : null}
											{el.strIngredient20 ? (
												<Tr>
													<Td>{el.strIngredient20}</Td>
													<Td></Td>
													<Td isNumeric>{el.strMeasure20}</Td>
												</Tr>
											) : null}
										</Tbody>
										<Tfoot>
											<Tr>
												<Th>To convert</Th>
												<Th>into</Th>
												<Th isNumeric>multiply by</Th>
											</Tr>
										</Tfoot>
									</Table>
								</TableContainer>
								<Box>
									<iframe
										width='100%'
										height='380'
										src={`https://www.youtube.com/embed/${el.strYoutube.slice(-11)}`}
										title='Jah Khalib – Искал-Нашёл | Премьера клипа'
										frameBorder='0'
										allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
										allowfullscreen
									></iframe>
								</Box>
							</ModalBody>
							<ModalFooter>
								<Button colorScheme='blue' mr={3} onClick={onClose}>
									Close
								</Button>
							</ModalFooter>
						</ModalContent>
					</Modal>
				</Box>
			))}
			<Box py={1} px={{ base: 4, lg: 10, xl: '20' }}>
				<Heading py={4} fontSize={{ base: 'xl', lg: '3xl', xl: '' }}>
					Meal Categories
				</Heading>
			</Box>
			<CategoryList />
		</Box>
	);
}
