import { Box } from '@chakra-ui/react';
import React from 'react';
import { Input } from '../ui/input';

export default function BlogId() {
	return (
		<Box w={'full'} h={'50vh'} bg={'gray.800'} py={10}>
			<Input placeholder='Type your Meal name.' className={'w-[500px] bg-slate-600'} />
		</Box>
	);
}
