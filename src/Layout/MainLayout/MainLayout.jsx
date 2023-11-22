import './MainLayout.css'
import { Outlet } from "react-router-dom";
import Header from "../../compoments/Header/Header";
import Footer from "../../compoments/Footer/Footer";
import SideBar from "../../compoments/SideBar/SideBar";



const MainLayout = () => {
    return (
    
        <main >
            <div >
               
                <Header />
                <div className='content-grid'>
                    <Outlet />
                    <SideBar />
                </div>
                
                        
                    
                <Footer />
            </div>

            
        </main>
   
    );
};

export default MainLayout;