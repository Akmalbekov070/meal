'use client';
import Retsipe from '@/components/retsipe/retsipe';
import { useParams } from 'next/navigation';
import React from 'react';

export default function RetsipePage() {
	const param = useParams();
	return <Retsipe {...param} />;
}
