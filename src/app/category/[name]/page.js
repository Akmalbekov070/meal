'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import List from '@/components/list/list';

export default function CategoryPage() {
	const param = useParams();
	return <List {...param} />;
}
