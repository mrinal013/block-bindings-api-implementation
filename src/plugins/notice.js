import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { TextControl } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

const NoticeMetaField = () => {
	const noticeValue = useSelect( ( select ) => {
		return select( 'core/editor' ).getEditedPostAttribute( 'meta' )
			.bba_notice;
	} );

	const { editPost } = useDispatch( 'core/editor' );

	return (
		<TextControl
			aria-label={ __( 'Notice', 'block-bindings-api' ) }
			value={ noticeValue }
			onChange={ ( value ) => {
				editPost( { meta: { bba_notice: value } } );
			} }
		/>
	);
};

registerPlugin( 'bba-notice', {
	render: () => {
		return (
			<PluginDocumentSettingPanel
				name="bba-notice"
				title={ __( 'Block Bindings API', 'block-bindings-api' ) }
			>
				<NoticeMetaField />
			</PluginDocumentSettingPanel>
		);
	},
} );
