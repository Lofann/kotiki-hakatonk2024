import { Container, Row, Col} from "react-bootstrap"
import { Helmet } from "react-helmet-async"
import './side-bar.css'



// Компонент главной страницы
export default function ProfilePage(): JSX.Element {
    return (
        <>
            <Helmet>
                <title>Profile</title>
            </Helmet>

            <div className="container">
                <div className="row ">
                <div className="col-4 side-bar text-center">
                    
                    <div>
                    <img src ="../../photos/kotik.png"></img>
                    </div>
                    <div>
                    <h4>Шешукова Арина Андреевна</h4>
                    </div>
                    <div>
                    <p>Крестьянское ополочение</p>
                    </div>
                </div>
                

                <div className="col-8">
                     
                     <div className="card">
                            <h1>
                                Header
                            </h1>
                     </div>

                </div>
                </div>
            </div>
            
        </>
    )
}
