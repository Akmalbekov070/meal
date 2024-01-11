'use client';
import { Grid, GridItem } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import CategoryItem from '../category-item/category-item';

export default function CategoryList() {
	const [list, setList] = useState([]);
	useEffect(() => {
		fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
			.then(res => res.json())
			.then(data => setList(data.categories));
	}, []);
	console.log(list);
	return (
		<Grid
			templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)' }}
			gap={6}
			px={{ base: 0, lg: 3, xl: 5 }}
			py={3}
		>
			{list.map(item => (
				<GridItem key={item.idCategory}>
					<CategoryItem {...item} />
				</GridItem>
			))}
		</Grid>
	);
}
