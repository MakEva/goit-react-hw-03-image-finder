import { Component } from 'react';
import { createPortal } from 'react-dom';

import css from './styles.module.css';

const modalRoot = document.getElementById('modal-root');

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    document.addEventListener('keydown', this.closeModal);
  }

  closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.close();
    }
  };

  render() {
    const { children } = this.props;

    return createPortal(
      <div className={css.overlay} onClick={this.closeModal}>
        <div className={css.modal}>{children}</div>
      </div>,
      modalRoot
    );
  }
}
