import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import './NewsModel.css';
import { AiOutlineClose } from "react-icons/ai";
import {

    FacebookIcon,
    FacebookShareButton,
    TwitterIcon,
    TwitterShareButton,
    
  } from "react-share";


const NewsModal = (props) => {
    const picture = props["data"]
    return (
        <Modal 
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
        
            <Modal.Body>
                <img className="model-image" src={picture} alt="image" />
            
                
            </Modal.Body>
            <button onClick={()=>props.onHide(false)} className="close-modal"> <AiOutlineClose /> </button>
           
            <Modal.Footer>
                <span className="share-text">Share On:</span>
                 <FacebookShareButton url={picture}>
                    <FacebookIcon size={40} round={true} />
                 </FacebookShareButton>
                 <TwitterShareButton url={picture}>
                    <TwitterIcon size={40} round={true}  />
                 </TwitterShareButton>
                 
            </Modal.Footer>
          
            
            </Modal>
    );
};

export default NewsModal;