import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import { AppRoute } from '../../consts';
import ProfilePage from '../../pages/profile/profile-page';


// eslint-disable-next-line @typescript-eslint/no-redeclare
export default function App(): JSX.Element {
    // const authorizationStatus = AuthorizationStatus.Auth;
   
     return (
       <HelmetProvider>
         <BrowserRouter>
           <Routes>
             
             <Route
               path={AppRoute.Profile}
               element={<ProfilePage/>} 
             />  
           </Routes>
         </BrowserRouter>
       </HelmetProvider>
     )
   }
   