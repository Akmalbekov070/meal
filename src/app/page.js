import HomePage from '@/components/hero/hero';
import { Toaster } from 'sonner';

export default function Home() {
	return (
		<>
			<HomePage />
			<Toaster position='top' />
		</>
	);
}
