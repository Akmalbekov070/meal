import { Hero } from '@/components';
import React from 'react';
import Seo from './seo';
import HomePage from '@/components/hero/hero';

export default function HeroPage() {
	return (
		<Seo
			metaTitle='Meall Category'
			metaDecription={'Portfolio web sayt'}
			author={'Ahmadjonov Akmal '}
			metaKeyworsd={'school,Akmal'}
			ogImage={
				'https://static.vecteezy.com/system/resources/thumbnails/023/870/103/small/gyoza-japanese-traditional-food-asian-dumpling-poster-illustration-png.png'
			}
		>
			<HomePage />
		</Seo>
	);
}
