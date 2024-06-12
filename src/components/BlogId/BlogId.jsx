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

	function onSubmit(values) {
		console.log(values);
	}
	return <>salom</>;
}
