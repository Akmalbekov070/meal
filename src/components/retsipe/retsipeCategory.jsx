import {
	Box,
	Heading,
	Image,
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
} from '@chakra-ui/react';
import React from 'react';

export default function RetsipeCategory({ data }) {
	console.log(data);
	return (
		<Box w={'full'} py={2} px={2}>
			<Box>
				<Heading>{data.strMeal}</Heading>
			</Box>
			<Image w={'full'} h={'600px'} objectFit={'cover'} src={data.strMealThumb} mt={3} />
			<Text fontWeight={'bold'}>Category: {data.strCategory}</Text>
			<Text>{data.strInstructions}</Text>
			<Text fontWeight={'bold'}>Country: {data.strArea}</Text>
			<Box>
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
							{data.strIngredient1 ? (
								<Tr>
									<Td>{data.strIngredient1}</Td>
									<Td></Td>
									<Td isNumeric>{data.strMeasure1}</Td>
								</Tr>
							) : null}
							{data.strIngredient2 ? (
								<Tr>
									<Td>{data.strIngredient2}</Td>
									<Td></Td>
									<Td isNumeric>{data.strMeasure2}</Td>
								</Tr>
							) : null}
							{data.strIngredient3 ? (
								<Tr>
									<Td>{data.strIngredient3}</Td>
									<Td></Td>
									<Td isNumeric>{data.strMeasure3}</Td>
								</Tr>
							) : null}
							{data.strIngredient4 ? (
								<Tr>
									<Td>{data.strIngredient4}</Td>
									<Td></Td>
									<Td isNumeric>{data.strMeasure4}</Td>
								</Tr>
							) : null}
							{data.strIngredient5 ? (
								<Tr>
									<Td>{data.strIngredient5}</Td>
									<Td></Td>
									<Td isNumeric>{data.strMeasure5}</Td>
								</Tr>
							) : null}
							{data.strIngredient6 ? (
								<Tr>
									<Td>{data.strIngredient6}</Td>
									<Td></Td>
									<Td isNumeric>{data.strMeasure6}</Td>
								</Tr>
							) : null}
							{data.strIngredient7 ? (
								<Tr>
									<Td>{data.strIngredient7}</Td>
									<Td></Td>
									<Td isNumeric>{data.strMeasure7}</Td>
								</Tr>
							) : null}
							{data.strIngredient8 ? (
								<Tr>
									<Td>{data.strIngredient8}</Td>
									<Td></Td>
									<Td isNumeric>{data.strMeasure8}</Td>
								</Tr>
							) : null}
							{data.strIngredient9 ? (
								<Tr>
									<Td>{data.strIngredient9}</Td>
									<Td></Td>
									<Td isNumeric>{data.strMeasure9}</Td>
								</Tr>
							) : null}
							{data.strIngredient10 ? (
								<Tr>
									<Td>{data.strIngredient10}</Td>
									<Td></Td>
									<Td isNumeric>{data.strMeasure10}</Td>
								</Tr>
							) : null}
							{data.strIngredient11 ? (
								<Tr>
									<Td>{data.strIngredient11}</Td>
									<Td></Td>
									<Td isNumeric>{data.strMeasure11}</Td>
								</Tr>
							) : null}
							{data.strIngredient12 ? (
								<Tr>
									<Td>{data.strIngredient12}</Td>
									<Td></Td>
									<Td isNumeric>{data.strMeasure12}</Td>
								</Tr>
							) : null}
							{data.strIngredient13 ? (
								<Tr>
									<Td>{data.strIngredient13}</Td>
									<Td></Td>
									<Td isNumeric>{data.strMeasure13}</Td>
								</Tr>
							) : null}
							{data.strIngredient14 ? (
								<Tr>
									<Td>{data.strIngredient14}</Td>
									<Td></Td>
									<Td isNumeric>{data.strMeasure14}</Td>
								</Tr>
							) : null}
							{data.strIngredient15 ? (
								<Tr>
									<Td>{data.strIngredient15}</Td>
									<Td></Td>
									<Td isNumeric>{data.strMeasure15}</Td>
								</Tr>
							) : null}
							{data.strIngredient16 ? (
								<Tr>
									<Td>{data.strIngredient16}</Td>
									<Td></Td>
									<Td isNumeric>{data.strMeasure16}</Td>
								</Tr>
							) : null}
							{data.strIngredient17 ? (
								<Tr>
									<Td>{data.strIngredient17}</Td>
									<Td></Td>
									<Td isNumeric>{data.strMeasure17}</Td>
								</Tr>
							) : null}
							{data.strIngredient18 ? (
								<Tr>
									<Td>{data.strIngredient18}</Td>
									<Td></Td>
									<Td isNumeric>{data.strMeasure18}</Td>
								</Tr>
							) : null}
							{data.strIngredient19 ? (
								<Tr>
									<Td>{data.strIngredient19}</Td>
									<Td></Td>
									<Td isNumeric>{data.strMeasure19}</Td>
								</Tr>
							) : null}
							{data.strIngredient20 ? (
								<Tr>
									<Td>{data.strIngredient20}</Td>
									<Td></Td>
									<Td isNumeric>{data.strMeasure20}</Td>
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
				<iframe
					width='100%'
					height='380'
					src={`https://www.youtube.com/embed/${data.strYoutube.slice(-11)}`}
					title='Jah Khalib – Искал-Нашёл | Премьера клипа'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					allowfullscreen
				></iframe>
			</Box>
		</Box>
	);
}
