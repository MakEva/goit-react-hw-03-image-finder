import css from '../../styles.module.css';

export const ImageGalleryItem = ({ webformatURL, tags }) => {
  return (
    <li className={css.gallery_item}>
      <img className={css.galleryItem_image} src={webformatURL} alt={tags} />
    </li>
  );
};
