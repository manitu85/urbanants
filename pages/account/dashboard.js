import 'react-toastify/dist/ReactToastify.css';

import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { toast } from 'react-toastify';

import DashboardEvent from '@/components/DashboardEvent';
import { getStrapiURL } from '@/config/index';
import { parseCookies } from '@/helpers/index';
import styles from '@/styles/Dashboard.module.scss';

export default function DashboardPage({ events, token }) {
	// console.log(`CURRENT_USER`, events);
	// console.log(`USER_TOKEN`, token);
	const router = useRouter();

	const deleteEvent = async id => {
		const res = await fetch(getStrapiURL(`/events/${id}`), {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const data = await res.json();

		if (!res.ok) {
			toast.error(data.message);
		} else {
			router.reload();
		}
	};

	return (
		<>
			<NextSeo title='User Dashboard' />
			<div className={styles.dash}>
				<h1>Dashboard</h1>
				<h3>My Events</h3>

				{events.map(evt => (
					<DashboardEvent key={evt.id} evt={evt} handleDelete={deleteEvent} />
				))}
			</div>
		</>
	);
}

export async function getServerSideProps({ req }) {
	const { token } = parseCookies(req);

	const res = await fetch(getStrapiURL(`/events/me`), {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const events = await res.json();

	return {
		props: { events, token },
	};
}
