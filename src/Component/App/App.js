import React, {useState} from 'react';
import './App.css';
import NavBar from '../NavBar/navbar';
import Jumbotron from '../Jumbotron/jumbotron';
import Cards from '../Cards/cards';
import Footer from '../Footer/footer';
import ContextToImport from '../Context/context'

function App() {

    const [state,
        kpopNewState] = useState({
        kPop: [
            {
                name: "Girl's Generation, I got a boy",
                youTubeEmbeddedVideoLink: "https://www.youtube.com/embed/wq7ftOZBy0E"
            }, {
                name: "BlackPink, Boombayah",
                youTubeEmbeddedVideoLink: "https://www.youtube.com/embed/bwmSjveL3Lc"
            }, {
                name: "Exid, Up & Down",
                youTubeEmbeddedVideoLink: "https://www.youtube.com/embed/hfXZ6ydgZyo"
            }, {
                name: "Red Velvet, Red Flavor",
                youTubeEmbeddedVideoLink: "https://www.youtube.com/embed/WyiIGEHQP8o"
            }, {
                name: "Girl's Day, Darling",
                youTubeEmbeddedVideoLink: "https://www.youtube.com/embed/QB4dQcxgJPY"
            }, {
                name: "Miss A, Hush",
                youTubeEmbeddedVideoLink: "https://www.youtube.com/embed/dp0F18FFCTE"
            }, {
                name: "Red Light",
                youTubeEmbeddedVideoLink: "https://www.youtube.com/embed/iv-8-EgPEY0"
            }, {
                name: "Come back home",
                youTubeEmbeddedVideoLink: "https://www.youtube.com/embed/vLbfv-AAyvQ"
            }, {
                name: "Twice, Fancy,",
                youTubeEmbeddedVideoLink: "https://www.youtube.com/embed/kOHB85vDuow"
            }, {
                name: "Miniskirt",
                youTubeEmbeddedVideoLink: "https://www.youtube.com/embed/q6f-LLM1H6U"
            }
        ]
    });

    const handleDeletion = index => {
        const newState = {
            ...state
        };
        newState
            .kPop
            .splice(index, 1);
        kpopNewState(newState);
    }

    return (
        <div className='web'>
            <div className="row m-0">
                <NavBar/>
            </div>
            <div className="row m-0">
                <Jumbotron/>
            </div>
            <div className="row cardsContainer m-0">
                <ContextToImport.Provider
                    value={{
                    ...state
                }}>
                    <Cards arrOfKpopVideos={state.kPop} delete={handleDeletion}/>
                </ContextToImport.Provider>
            </div>
            <div className="row rowFooter m-0">
                <Footer/>
            </div>
        </div>
    )
}

export default App;
