import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	MediaPlaceholder,
	BlockControls,
} from '@wordpress/block-editor';
import {
	TextControl,
	PanelBody,
	SelectControl,
	Button,
	ComboboxControl,
	ToolbarButton,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { useState } from '@wordpress/element';
import './editor.scss';

const triggerTypeOptions = [
	{
		label: __('Button mit Text', 'twyn-modal'),
		value: 'text',
	},
	{
		label: __('Button mit Bild', 'twyn-modal'),
		value: 'image',
	},
];

export default function Edit({ attributes, setAttributes }) {
	const { content, ariaLabel, triggerType, modalId, imageId, imageSize } =
		attributes;

	const [modalSearch, setModalSearch] = useState('');

	const props = {
		...(ariaLabel !== '' && { 'aria-label': ariaLabel }),
		'data-twyn-modal-trigger-type': triggerType,
	};

	const blockProps = useBlockProps(props);

	const image = useSelect(
		(select) => {
			if (!imageId) {
				return null;
			}

			return select(coreStore).getMedia(imageId);
		},
		[imageId],
	);

	const { modals, isResolving } = useSelect(
		(select) => {
			const query = {
				per_page: 20,
				status: 'publish',
				orderby: modalSearch ? 'relevance' : 'title',
				order: 'asc',
			};

			if (modalSearch) {
				query.search = modalSearch;
			}

			return {
				modals: select(coreStore).getEntityRecords(
					'postType',
					'twyn_modal',
					query,
				),
				isResolving: select(coreStore).isResolving('getEntityRecords', [
					'postType',
					'twyn_modal',
					query,
				]),
			};
		},
		[modalSearch],
	);

	const modalOptions = (modals ?? []).map((modal) => ({
		label: modal.title.rendered,
		value: String(modal.id),
	}));

	console.log('modalSearch:', modalSearch);
	console.log('modals:', modals);

	const imageSizes = image?.media_details?.sizes ?? {};

	const imageSizeOptions = [
		{
			label: __('Originalgröße', 'twyn-modal'),
			value: 'full',
		},
		...Object.entries(imageSizes).map(([name, size]) => ({
			label: `${name} (${size.width} × ${size.height})`,
			value: name,
		})),
	];

	const imageUrl =
		imageSize === 'full'
			? image?.source_url
			: (imageSizes[imageSize]?.source_url ?? image?.source_url);

	const onChangeContent = (newContent) => {
		setAttributes({ content: newContent });
	};

	const onChangeAriaLabel = (newAriaLabel) => {
		setAttributes({ ariaLabel: newAriaLabel });
	};

	const onChangeTriggerType = (newTriggerType) => {
		setAttributes({ triggerType: newTriggerType });
	};

	const onChangeImageSize = (newImageSize) => {
		setAttributes({ imageSize: newImageSize });
	};

	const onChangeModalId = (newModalId) => {
		setAttributes({ modalId: newModalId ? Number(newModalId) : 0 });
	};

	const onSelectImage = (media) => {
		setAttributes({
			imageId: media.id,
			imageSize: 'full',
		});
	};

	const onRemoveImage = () => {
		setAttributes({
			imageId: undefined,
			imageSize: 'full',
		});
	};

	return (
		<>
			{triggerType === 'image' && imageId && (
				<BlockControls>
					<MediaUploadCheck>
						<MediaUpload
							allowedTypes={['image']}
							value={imageId}
							onSelect={onSelectImage}
							render={({ open }) => (
								<ToolbarButton
									icon="edit"
									label={__('Bild ersetzen', 'twyn-modal')}
									onClick={open}
								/>
							)}
						/>
					</MediaUploadCheck>
				</BlockControls>
			)}
			<InspectorControls>
				<PanelBody title={__('Modal-Einstellungen', 'twyn-modal')}>
					<SelectControl
						label={__('Modal öffnen über', 'twyn-modal')}
						value={triggerType}
						options={triggerTypeOptions}
						onChange={onChangeTriggerType}
					/>

					{triggerType === 'image' && imageId && (
						<>
							<SelectControl
								label={__('Bildgröße', 'twyn-modal')}
								value={imageSize}
								options={imageSizeOptions}
								onChange={onChangeImageSize}
							/>
						</>
					)}

					<ComboboxControl
						label={__('Modal auswählen', 'twyn-modal')}
						value={modalId ? String(modalId) : null}
						options={modalOptions}
						isLoading={isResolving}
						onFilterValueChange={setModalSearch}
						onChange={(value) =>
							setAttributes({
								modalId: value ? Number(value) : 0,
							})
						}
					/>
				</PanelBody>
			</InspectorControls>

			<InspectorControls group="advanced">
				<TextControl
					label={__('ARIA-Label', 'twyn-modal')}
					value={ariaLabel}
					onChange={onChangeAriaLabel}
					help={__(
						'Optional. Describe the button action for screen readers.',
						'twyn-modal',
					)}
				/>
			</InspectorControls>

			<button {...blockProps}>
				{triggerType === 'text' && (
					<RichText
						tagName="span"
						value={content}
						allowedFormats={['core/bold', 'core/italic']}
						onChange={onChangeContent}
					/>
				)}

				{triggerType === 'image' && (
					<MediaUploadCheck>
						<MediaUpload
							allowedTypes={['image']}
							value={imageId}
							onSelect={onSelectImage}
							render={({ open }) =>
								imageUrl ? (
									<img
										className={`wp-image-${imageId}`}
										src={imageUrl}
										alt={image?.alt_text ?? ''}
									/>
								) : (
									<Button variant="secondary" onClick={open}>
										{__('Bild auswählen', 'twyn-modal')}
									</Button>
								)
							}
						/>
					</MediaUploadCheck>
				)}
			</button>
		</>
	);
}
