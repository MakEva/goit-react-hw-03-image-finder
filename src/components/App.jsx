import { Component } from 'react';
import { Searchbar } from './Searchbar';
// import { Modal } from './Modal';
import { Button } from './Button';
// import { Loader } from './Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { searchImage } from '../api/image';

// const per_page = 12;
export class App extends Component {
  state = {
    search: '',
    images: [],
    page: 1,
    loading: false,
    error: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (search && (search !== prevState.search || page !== prevState.page)) {
      this.setState({
        loading: true,
      });
      try {
        const { data } = await searchImage(search, page);
        this.setState(({ search }) => ({
          images: data.hits?.length ? [...search, ...data.hits] : search,
        }));
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
    this.setState({
      search,
      images: [],
      page: 1,
    });
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };
  render() {
    const { handleSearch, loadMore } = this;
    const { images, loading } = this.state;

    const isImage = Boolean(images.length);

    return (
      <>
        <Searchbar onSubmit={handleSearch} />
        {loading && <p>...Loading</p>}
        {isImage && <ImageGallery items={images} />}
        {/* <Loader /> */}
        {isImage && <Button onClick={loadMore} type="button" />}
        {/* <Modal /> */}
      </>
    );
  }
}
