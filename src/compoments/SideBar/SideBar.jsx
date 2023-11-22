import { usePaper } from '../../context/ContentProvider';
import './SideBar.css';
import banner from '../../assets/images/banners/sideBanner.jpg'
import banner2 from '../../assets/images/banners/sideBanner2.jpg'

import { Link  } from 'react-router-dom';

const SideBar = () => {
    const {paper, loading} = usePaper();

    

    if(loading){
        return <h2>Loading...</h2>;
    }
    const {thumbNail} = paper;
    


    return (
        <aside>
            <div>
                <h5 className="title">সকল পাতা</h5>
                <div className='thumbnail-container'>
                    {
                        thumbNail.map( (item, index) => <Link key={index} to={item.url}> <img className='thumbnail' src={item.img} alt=""  /> </Link>  )
                    }
                </div>
            </div>

            <div>
                <img className='banner-two' src={banner} alt="Banner" />
            </div>
            <div>
                <img className='banner-three' src={banner2} alt="Banner" />
            </div>
            
        </aside>
    );
};

export default SideBar;