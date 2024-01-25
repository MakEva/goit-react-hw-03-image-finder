import css from '../styles.module.css';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ showModal, items = [] }) => {
  const element = items.map(({ id, webformatURL, tags, largeImageURL }) => (
    <ImageGalleryItem
      key={id}
      showModal={showModal}
      webformatURL={webformatURL}
      tags={tags}
      largeImageURL={largeImageURL}
    />
  ));
  return <ul className={css.image_gallery}>{element}</ul>;
};
