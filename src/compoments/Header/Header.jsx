import './Header.css';
import logo from '../../assets/images/logo.png'
import banner1 from '../../assets/images/banner.gif'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { usePaper } from '../../context/ContentProvider';


const Header = () => {
    const [startDate, setStartDate] = useState(new Date());

    const {paper, loading} = usePaper();

    if(loading) {
        return <p>Loading...</p>
    }

    return (
        <header>
            <div className="row justify-content-between align-items-center">
                <div className="col-md-4">
                    <div>
                        <img className="logo" src={logo} alt="Logo" />
                    </div>
                </div>
                <div className="col-md-7">
                    <div>
                        <img className="banner1" src={banner1} alt="Logo" />
                    </div>
                    
                </div>
            </div>
            <nav>
                <ul className='nav-bar'>
                    <li> <NavLink to="/" className={({ isActive }) =>  isActive ? "active" : ""}   >১ম পৃষ্ঠা</NavLink></li>
                    <li> <NavLink to="/page-two" className={({ isActive }) =>  isActive ? "active" : ""} >২য় পৃষ্ঠা</NavLink> </li>
                    <li> <NavLink to="/page-three" className={({ isActive }) =>  isActive ? "active" : ""} >৩য় পৃষ্ঠা</NavLink> </li>
                    {
                       paper["totalPage"] == 8 && <>
                            <li> <NavLink to="/page-four" className={({ isActive }) =>  isActive ? "active" : ""} >৪র্থ পৃষ্ঠা</NavLink> </li>
                            <li> <NavLink to="/page-five" className={({ isActive }) =>  isActive ? "active" : ""} >৫ম পৃষ্ঠা</NavLink> </li>
                            <li> <NavLink to="/page-six" className={({ isActive }) =>  isActive ? "active" : ""} >৬ষ্ঠ পৃষ্ঠা</NavLink> </li>
                            <li> <NavLink to="/page-seven" className={({ isActive }) =>  isActive ? "active" : ""} >৭ম পৃষ্ঠা</NavLink> </li>
                       </>

                    }
                    
                    
                    <li> <NavLink to="/last-page" className={({ isActive }) =>  isActive ? "active" : ""} >শেষ পৃষ্ঠা</NavLink> </li>
                </ul>
                <div className='date-section'>
                        <h5 className="title2">পুরনো সংখ্যা</h5>
                        <DatePicker
                            showIcon
                            dateFormat="dd/MM/yyyy"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                        />
                       
                        {/* <input type="date" onChange={(e) => setSelected(e.target.value)} />  */}
                </div>
            </nav>

        </header>
    );
};

export default Header;

