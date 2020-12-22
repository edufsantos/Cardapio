import React from 'react';
import Drawer  from '@material-ui/core/Drawer';

// import { Container } from './styles';

function Modal(props) {
  function handleClose(){

  }
  return(
    <>
      <Drawer className={props.classe} anchor={props.tipo} open={props.open} onClose={props.close}>
        {props.children}
      </Drawer>
    </>
  );
}

export default Modal;