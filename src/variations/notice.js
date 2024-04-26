import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockVariation( 'core/paragraph', {
	name: 'bba-notice',
	title: __( 'Block Bindings API Notice', 'block-bindings-api' ),
	icon: 'book-alt',
	attributes: {
		metadata: {
			bindings: {
				content: {
					source: 'core/post-meta',
					args: {
						key: 'bba_notice',
					},
				},
			},
		},
	},
} );
