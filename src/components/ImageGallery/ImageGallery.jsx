import css from '../styles.module.css';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ items = [] }) => {
  const element = items.map(({ id, webformatURL, tags }) => (
    <ImageGalleryItem key={id} webformatURL={webformatURL} tags={tags} />
  ));
  return <ul className={css.image_gallery}>{element}</ul>;
};
