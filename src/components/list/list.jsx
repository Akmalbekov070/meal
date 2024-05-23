import { Box, Grid, GridItem } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Listcategory from './list-category';

export default function List({ name }) {
	const [meal, setMeal] = useState([]);
	useEffect(() => {
		fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
			.then(res => res.json())
			.then(data => setMeal(data.meals));
	}, []);
	return (
		<Box px={4}>
			<Grid
				templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)' }}
				gap={6}
			>
				{meal.map(item => (
					<GridItem key={item.idMeal}>
						<Listcategory {...item} />
					</GridItem>
				))}
			</Grid>
		</Box>
	);
}
