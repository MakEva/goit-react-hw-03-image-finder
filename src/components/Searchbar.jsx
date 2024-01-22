import css from './styles.module.css';
import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState({
      search: '',
    });
  };
  render() {
    const { handleChange, handleSubmit } = this;
    const { search } = this.state;

    return (
      <header className={css.searchbar}>
        <form onSubmit={handleSubmit} className={css.search_form}>
          <button type="submit" className={css.search_button}>
            <span className={css.search_button_label}>Search</span>
          </button>

          <input
            value={search}
            onChange={handleChange}
            className={css.search_input}
            type="text"
            name="search"
            autoComplete="off"
            placeholder="Search images and photos"
            required
          />
        </form>
      </header>
    );
  }
}
