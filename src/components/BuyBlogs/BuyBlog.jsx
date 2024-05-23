'use client';
import React, { useEffect, useState } from 'react';
import { Textarea } from '../ui/textarea';
import { useColorMode, Box, Image } from '@chakra-ui/react';
// const data = require('../retsipe/retsipeCategory');
export default function BuyBlog() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Box color={colorMode === 'light' ? 'black' : 'white'}>
			{/* <Image  /> */}
			<Textarea placeholder='Type your message here.' className={'bg-gray.700'} />
		</Box>
	);
}
