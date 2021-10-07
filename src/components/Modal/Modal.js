import { Component } from 'react';
import { createPortal } from 'react-dom';

import ButtonClose from '../Buttons/BtnModalClose/BtnModaleClose';

import s from './Modal.module.css';

const modalRoot = document.getElementById('root-modal');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscape);
  }

  handleEscape = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackDropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
  handleCloseBtnClick = () => {
    this.props.onClose();
  };

  render() {
    return createPortal(
      <div className={s.Overlay} onClick={this.handleBackDropClick}>
        <div className={s.Modal}>
          {this.props.children}
          {this.props.children && (
            <ButtonClose onBtnClick={this.handleCloseBtnClick} />
          )}
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
