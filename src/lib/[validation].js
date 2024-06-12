'use client';

import { z } from 'zod';

export const formSchema = z.object({
	name: z.string(),
	number: z.number(),
	message: z.string().min(10).max(100),
});
