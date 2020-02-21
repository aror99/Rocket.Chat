import { Box, Flex, Margins, ScrollableArea } from '@rocket.chat/fuselage';
import React, { useMemo } from 'react';

import { BurgerMenuButton } from './BurgerMenuButton';

export function Page(props) {
	return <Flex.Container direction='column'>
		<Box is='section' style={useMemo(() => ({ height: '100%' }), [])} {...props} />
	</Flex.Container>;
}

export function PageHeader({ children, title, ...props }) {
	return <Margins all='x16'>
		<Flex.Container wrap='no-wrap' alignItems='center'>
			<Box style={{ minHeight: '2.75rem' }} {...props}>
				<Margins inlineEnd='x8'>
					<BurgerMenuButton />
				</Margins>
				<Flex.Item grow={1}>
					<Box is='h1' textStyle='h1' textColor='default'>{title}</Box>
				</Flex.Item>
				{children}
			</Box>
		</Flex.Container>
	</Margins>;
}

export function PageContent(props) {
	return <ScrollableArea >
		<Box style={useMemo(() => ({ padding: '1rem' }), [])} {...props} />
	</ScrollableArea>;
}

Page.Header = PageHeader;
Page.Content = PageContent;
