import { Image, LinkBox, LinkOverlay } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Logo(props) {
	return (
		<LinkBox
			display='flex'
			alignItems='center'
			textTransform='uppercase'
			cursor='pointer'
			{...props}
		>
			<NextLink href='/' passHref>
				<LinkOverlay
					bgGradient='linear(to-r, #495057, #D00000, #495057)'
					bgClip='text'
					fontSize={18}
					fontWeight='extrabold'
				>
					Urbanants{' '}
				</LinkOverlay>
			</NextLink>
			<Image src='images/urbanants_logo.png' w='48px' h='48px' ml={2} />
		</LinkBox>
	);
}
