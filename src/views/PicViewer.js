import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

function ImageModal(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  console.log(props.arrtest)
  
  return (
    <div>
        
      <Button color="primary" onClick={toggle}>
        
      </Button>
      <Modal isOpen={modal} toggle={toggle} size="lg" className="modal-dialog-centered" fullscreen="true">
        <ModalHeader toggle={toggle}>이미지</ModalHeader>
        <ModalBody>
          <img src={props.imageSrc} alt="이미지" />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            닫기
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ImageModal;