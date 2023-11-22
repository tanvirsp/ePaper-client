import { usePaper } from "../context/ContentProvider";
import HomeTopLogo from "../compoments/HomeTopLogo/HomeTopLogo";
import NewsContent from "../compoments/NewsContent/NewsContent";


const LastPage = () => {
    const {paper, loading} = usePaper();
    

    if(loading) {
        return <h4>Loading</h4>
    }
    
    return (
        <div>
            <HomeTopLogo />
            <NewsContent paper={paper["lastPage"]} />
            
        </div>
    );
};

export default LastPage;