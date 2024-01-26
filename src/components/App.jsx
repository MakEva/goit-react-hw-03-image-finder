import { Component } from 'react';
import { Searchbar } from './Searchbar';
import { Modal } from './Modal';
import { Button } from './Button';
import { Loader } from './Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { searchImage } from '../api/image';

export class App extends Component {
  state = {
    search: '',
    images: [],
    page: 1,
    loading: false,
    error: null,
    modalImage: '',
    openModal: false,
    loadMoreBnt: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (search !== prevState.search || page !== prevState.page) {
      this.setState({
        loading: true,
      });
      try {
        const { data } = await searchImage(search, page);
        this.setState(({ images }) => ({
          images: data.hits?.length ? [...images, ...data.hits] : images,
          // loadMoreBtn: page < Math.ceil(data.totalHits / 12),
        }));

        // if (page < Math.ceil(data.totalHits / 12)) {
        //   this.setState({
        //     loadMoreBnt: true,
        //   });
        // }
        console.log(this.state.loadMoreBnt);
      } catch (error) {
        this.setState({
          error: error.message,
        });
      } finally {
        this.setState({
          loading: false,
        });
      }
    }
  }

  handleSearch = ({ search }) => {
    if (this.state.search === search) {
      return alert(`Ви вже здійснили пошук за  ${search}`);
    }
    this.setState({
      search,
      images: [],
      page: 1,
    });
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  showModal = ({ largeImageURL }) => {
    this.setState({
      openModal: true,
      modalImage: largeImageURL,
    });
  };

  closeModal = () => {
    this.setState({
      openModal: false,
      modalImage: '',
    });
  };

  render() {
    const { handleSearch, loadMore, showModal, closeModal } = this;
    const { images, loading, modalImage, openModal, loadMoreBnt } = this.state;

    const isImage = Boolean(images.length);

    // const isMoreImages = Boolean(images.length % 12 === 0);

    return (
      <>
        <Searchbar onSubmit={handleSearch} />
        {isImage && <ImageGallery showModal={showModal} items={images} />}
        {loading && <Loader />}
        {isImage && !loadMoreBnt && <Button onClick={loadMore} type="button" />}
        {openModal && (
          <Modal modalImage={modalImage} close={closeModal}>
            <img src={modalImage} alt="" />
          </Modal>
        )}
      </>
    );
  }
}
