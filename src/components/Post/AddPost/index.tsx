import React, {useState} from 'react';
import profileImg from '../../../assets/images/profile-white.png';
import St from './style';
import PortalModal from '../../Common/portalModal';
import AddPostModal from './AddModal';

const AddPost = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <div>
        <St.InputDiv>
          <St.InputImg src={profileImg} />
          <St.Input onClick={handleModal} />
          <PortalModal>{openModal && <AddPostModal handleModal={handleModal} />}</PortalModal>
        </St.InputDiv>
      </div>
    </>
  );
};

export default AddPost;
