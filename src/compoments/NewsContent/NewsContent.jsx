/* eslint-disable react/prop-types */
import { useState } from 'react';
import './NewsContent.css';
import NewsModal from '../NewsModal/NewsModal';

// import topLeft from "../../assets/images/ajnew/p1.1.jpg"
// import torRight from "../../assets/images/ajnew/p1.3.jpg"
// import bottomLeft from "../../assets/images/ajnew/p1.2.jpg"
// import bottomRight from "../../assets/images/ajnew/p1.4.jpg"


const NewsContent = ({paper}) => {
    
     const {topLeft, bottomLeft, torRight, bottomRight} = paper;
     const [modalShow, setModalShow] = useState(false);
     const [data, setData] = useState("");

     const handleClick = (imgData)=>{
        setModalShow(true);
        setData(imgData);
     }
    
    
     return (
        <section >
             <div className='d-flex'>
                <div className='imgContainer'>
                  <img src={topLeft} alt="topLeft" />
                  <div className='overlay'  onClick={() =>handleClick(topLeft) }></div>
               </div>
                <div className='imgContainer'>
                  <img src={torRight} alt="topLeft" />
                  <div className='overlay'  onClick={() => handleClick(torRight)}></div>
               </div>
             </div>
             <div className='d-flex'>
               <div className='imgContainer'>
                  <img src={bottomLeft} alt="topLeft"  />
                  <div className='overlay' onClick={() => handleClick(bottomLeft)}></div>
               </div>
               <div className='imgContainer'>
                  <img src={bottomRight} alt="topLeft" />
                  <div className='overlay' onClick={() => handleClick(bottomRight)}></div>
               </div>
             </div>

             <NewsModal   show={modalShow} data={data}  onHide={() => setModalShow(false)}/>

             
        </section>
        
    

    );
};

export default NewsContent;

