import React from 'react';
import ImageGallery, {ReactImageGalleryItem} from 'react-image-gallery';
// import stylesheet if you're not already using CSS @import
import 'react-image-gallery/styles/css/image-gallery.css';
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs';
import s from './Gallery.module.css';
import './Gallery.css';

type Props = {
	images: string | string[];
};
const Gallery: React.FC<Props> = ({images}) => {
	const updatedImages: ReactImageGalleryItem[] = Array.isArray(images)
		? images.map((i: string) => ({
				original: i,
				thumbnail: i,
			}))
		: [{original: images, thumbnail: images}];
	return (
		<div className={s.container}>
			<ImageGallery
				showIndex
				showFullscreenButton
				showPlayButton
				additionalClass={'myGallery'}
				renderLeftNav={(onClick, disabled) => (
					<button
						className={s.leftNavArrow}
						onClick={onClick}
						disabled={disabled}
					>
						<BsArrowLeftCircleFill color={'#F1D246'} size={32} />
					</button>
				)}
				renderRightNav={(onClick, disabled) => (
					<button
						className={s.rightNavArrow}
						onClick={onClick}
						disabled={disabled}
					>
						<BsArrowRightCircleFill color={'#F1D246'} size={32} />
					</button>
				)}
				showThumbnails={false}
				items={updatedImages}
			/>
		</div>
	);
};

export default Gallery;
