'use client';
import { Box, Button, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from '../ui/form';
import { formSchema } from '@/lib/[validation]';

export default function BlogId() {
	const { colorMode, toggleColorMode } = useColorMode();
	const [load, setLoad] = useState(false);
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

	const onSubmit = values => {
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
				text: `Name: ${values.username},\nPhone: ${values.phone},\nMessage: ${values.message}`,
			}),
		})
			.then(() => reset())
			.finally(() => setLoad(false));

		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Successfully sent',
			error: 'Error occurred',
		});
	};
	function onSubmit(values) {
		console.log(values);
	}
	return <>salom</>;
}
