import Head from 'next/head';
import React from 'react';

export default function Seo({ metaTitle, metaDecription, author, metaKeyworsd, ogImage }) {
	return (
		<Head>
			<meta charSet='utf-8' />
			<meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=5' />
			<title>{metaTitle}</title>

			<meta httpEquiv='X-UA-Compatible' content='ie=edge' />
			<meta name='keyword' content={metaKeyworsd} />
			<meta name='author' content={author} />
			<meta name='description' content={metaDecription} />

			<meta property='og:title' content={metaTitle} />
			<meta property='og:description' content={metaDecription} />
			<meta property='og:image' content={ogImage} />
			<meta property='og:image:height' content='630' />
			<meta property='og:image:width' content='1200' />
			<meta property='og:locale' content='uz_UZ' />

			<meta name='twitter:title' content={metaTitle} />
			<meta name='twitter:image' content={ogImage} />
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:description' content={metaDecription} />
			<link rel='shortcut icon' href={ogImage} type='image/x-icon' />
		</Head>
	);
}
