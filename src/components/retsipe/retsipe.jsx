'use client';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import RetsipeCategory from './retsipeCategory';
import BuyBlog from '../BuyBlogs/BuyBlog';

export default function Retsipe({ id }) {
	const [retsipe, setRetsipe] = useState([]);

	useEffect(() => {
		fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
			.then(res => res.json())
			.then(item => setRetsipe(item.meals));
	}, []);
	console.log(retsipe);

	return (
		<Box px={4}>
			{retsipe.map(data => (
				<>
					<RetsipeCategory data={data} key={data.idMeal} />
				</>
			))}
		</Box>
	);
}
