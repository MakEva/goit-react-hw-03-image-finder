import css from '../../styles.module.css';

export const ImageGalleryItem = ({
  id,
  showModal,
  webformatURL,
  tags,
  largeImageURL,
}) => {
  return (
    <li
      key={id}
      onClick={() => showModal({ largeImageURL })}
      className={css.gallery_item}
    >
      <img className={css.galleryItem_image} src={webformatURL} alt={tags} />
    </li>
  );
};
