'use client';

import { z } from 'zod';

export const formSchema = z.object({
	username: z.string(),
	phone: z.string(),
	message: z.string().min(10).max(100),
});
