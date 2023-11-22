import HomeTopLogo from "../compoments/HomeTopLogo/HomeTopLogo";
import NewsContent from "../compoments/NewsContent/NewsContent";
import { usePaper } from "../context/ContentProvider";

const PageThree = () => {
    const {paper, loading} = usePaper();
    

    if(loading) {
        return <h4>Loading</h4>
    }
    
    return (
        <div>
            <HomeTopLogo />
            <NewsContent paper={paper["pageThree"]} />
            
        </div>
    );
};

export default PageThree;