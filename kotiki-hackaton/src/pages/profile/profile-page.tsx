import { Container, Row, Col } from "react-bootstrap"
import { Helmet } from "react-helmet-async"
import './side-bar.css'
import './info-panel.css'

import vacancy_discription from "../../data/text"

// Компонент главной страницы
export default function ProfilePage(): JSX.Element {
    return (
        <>
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <main className="">
            <div className="container d-flex">
                <div className="row flex-fill">
                    <div className="col-3 side-bar text-center">

                        <div>
                            <img src="'./img/cat.svg'"></img>
                        </div>
                        <div>
                            <h4>Шешукова Арина Андреевна</h4>
                        </div>
                        <div>
                            <p>Крестьянское ополочение</p>
                        </div>
                    </div>


                    <div className="col-8 rows">
                        <div className="row">
                        <h3 className="title">Мои отклики</h3>
                            <div className="card col">
                                <div className="row">
                                    
                                    <div className="col-8">
                                        <h5>
                                            Разработчик 1С
                                        </h5>
                                        <p>Всего этапов: 3</p>
                                        <p>Текущий этап: 2 — тестовое задание</p>
                                        <p>Статус: ожидает проверки</p>
                                        <button className="btn btn-outline-danger">BUTTON</button>
                                    </div>
                                    <div className="col">
                                        <div className="progres-circle">
                                            <div className="progress-percent mx-auto">33%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card col">
                                <div className="row">
                                    <div className="col-8">
                                        <h4>
                                            Разработчик 1С
                                        </h4>
                                        <p>Всего этапов: 3</p>
                                        <p>Текущий этап: 2 — тестовое задание</p>
                                        <p>Статус: ожидает проверки</p>
                                        <button className="btn btn-outline-danger">BUTTON</button>
                                    </div>
                                    <div className="col">
                                        <div className="progres-circle">
                                            <div className="progress-percent mx-auto">33%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row info-panel gx-2">
                            <div>
                            <ul className="menu-panel row text-center">
                                <li className="col active">Описание</li>
                                <li className="col">Прогресс</li>
                                <li className="col">Чат с рекрутерами</li>
                            </ul>
                            </div>

                          <div className="discription">
                                {vacancy_discription}
                          </div>

                        </div>


                    </div>
                </div>
            </div>
            </main>
        </>
    )
}
