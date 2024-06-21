'use client';

import { formSchema } from '@/lib/validation';
import { Box, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

const BlogId = () => {
	const toast = useToast();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: '',
			phone: '',
			message: '',
		},
	});
	const [load, setLoad] = useState(false);

	const onSubmit = data => {
		setLoad(true);
		const telegramBotId = process.env.NEXT_PUBLIC_TELEGRAM_API;
		const telegramBotKey = process.env.NEXT_PUBLIC_TELEGRAM_KEY_API;

		const promise = fetch(`https://api.telegram.org/bot${telegramBotId}/sendMessage`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Cache-Control': 'no-cache',
			},
			body: JSON.stringify({
				chat_id: telegramBotKey,
				text: `MealName: ${data.username},\nPhoneNumber: ${data.phone},\nMessage: ${data.message}`,
			}),
		})
			.then(response => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then(() => reset())
			.finally(() => setLoad(false));

		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Successfully sent',
			error: 'Error occurred',
		});
	};

	return (
		<Box pt={0}>
			<div className='min-h-screen bg-gray-800 py-12 flex flex-col justify-center sm:py-16 px-3'>
				<div className='relative py-3 sm:max-w-xl sm:mx-auto'>
					<div className='absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-12 sm:rounded-3xl'></div>
					<div className='text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20'>
						<div className='text-center pb-6'>
							<h1 className='text-3xl'>Contact Us!</h1>
							<p className='text-gray-300'>Fill up the form below to send us a message.</p>
						</div>
						<form onSubmit={handleSubmit(onSubmit)}>
							<Input
								type='text'
								className='bg-slate-950 shadow mb-4 appearance-none border rounded-lg w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline'
								disabled={load}
								placeholder='send meal name'
								{...register('username')}
							/>
							{errors.username && <p className='text-xl text-red-700 py-2'>{errors.username.message}</p>}
							<Input
								type='number'
								className='bg-slate-950 shadow mb-4 appearance-none border rounded-lg w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline'
								disabled={load}
								placeholder='Phone Number'
								{...register('phone')}
							/>
							{errors.phone && <p className='text-xl text-red-700 py-2'>{errors.phone.message}</p>}
							<Textarea
								className='bg-slate-950 shadow mb-4 appearance-none border rounded-lg w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline'
								disabled={load}
								placeholder='whether to make a change to the selected food'
								{...register('message')}
							/>
							{errors.message && <p className='text-xl text-red-700 py-2'>{errors.message.message}</p>}
							<input
								type='submit'
								className='shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
								value='Send'
								disabled={load}
							/>
						</form>
					</div>
				</div>
			</div>
		</Box>
	);
};

export default BlogId;
