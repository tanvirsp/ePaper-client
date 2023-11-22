import HomeTopLogo from "../compoments/HomeTopLogo/HomeTopLogo";
import NewsContent from "../compoments/NewsContent/NewsContent";
import { usePaper } from "../context/ContentProvider";

const Home = () => {
    const {paper, loading} = usePaper();
    

    if(loading) {
        return <h4>Loading</h4>
    }
    

    return (
        <div>
            <HomeTopLogo />
            <NewsContent paper={paper["pageOne"]} />
            
        </div>
    );
};

export default Home;