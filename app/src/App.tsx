import React from 'react';
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
//import LandingPage from './pages/LandingPage';
import EthLockdropPage from './pages/EthLockdropPage';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonRouterOutlet>
                {/* <Route path="/welcome" component={LandingPage} exact={true} /> */}
                <Route path="/" component={EthLockdropPage} exact={true} />
                {/* <Route path="/" render={() => <Redirect to={'/eth-lockdrop'} />} exact={true} /> */}
            </IonRouterOutlet>
        </IonReactRouter>
    </IonApp>
);

export default App;
