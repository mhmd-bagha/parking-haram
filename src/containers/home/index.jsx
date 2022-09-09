import {Box, Button} from "@mui/material";
import './home.css';
import {FiChevronLeft} from "react-icons/fi";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <Box className='home container-fluid'>
            <div className="row container-fluid mb-4">
                <div className="col-lg-8">
                    <div className="card bg-white rounded-2 border-0 shadow-sm">
                        <div className="card-header bg-white border_bottom_spanish_gray">
                            <div className="d-flex justify-content-between align-items-center py-2">
                                <h6 className="h6 fs-16p fw-bold">نمای کلی پارکینگ</h6>
                                <Link to='/' className="text-primary text-nowrap">مشاهده همه <FiChevronLeft/></Link>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="d-flex">
                                <ul className="nav nav-pills mb-3 w-100" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link bg_list_parking_all_views active" id="parking-a-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#parking-a" type="button" role="tab"
                                                aria-controls="parking-a" aria-selected="true"> پارکینگ A
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link bg_list_parking_all_views" id="parking-b-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#parking-b" type="button" role="tab"
                                                aria-controls="parking-b" aria-selected="false"> پارکینگ B
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link bg_list_parking_all_views" id="parking-c-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#parking-c" type="button" role="tab"
                                                aria-controls="parking-c" aria-selected="false"> پارکینگ C
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link bg_list_parking_all_views" id="parking-d-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#parking-d" type="button" role="tab"
                                                aria-controls="parking-d" aria-selected="false"> پارکینگ D
                                        </button>
                                    </li>
                                </ul>
                                <div className='text-nowrap'>
                                    <Button variant='contained' className='btn_science_blue py-2'><img
                                        src={require('../../Assets/images/main/video_on.png')} alt=""/> <span
                                        className='me-2'>نمایش دوربین</span></Button>
                                </div>
                            </div>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="parking-a" role="tabpanel"
                                     aria-labelledby="parking-a-tab" tabIndex="0">
                                    <div className="d-flex my-5 container-fluid">
                                        <div className="ms-auto">
                                            <ul className='nav d-flex justify-content-start align-items-center parkings mb-6'>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""/>
                                                        <div className="border_number_parking">B 24</div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_null"><p
                                                            className='mt-3 fw-bold fs-5'>B 11</p></div>
                                                        <div className="parking_border_null_after"></div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_null"><p
                                                            className='mt-3 fw-bold fs-5'>B 10</p></div>
                                                        <div className="parking_border_null_after"></div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""/>
                                                        <div className="border_number_parking">B 9</div>
                                                    </div>

                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""/>
                                                        <div className="border_number_parking">B 8</div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_null"><p
                                                            className='mt-3 fw-bold fs-5'>B 7</p></div>
                                                        <div className="parking_border_null_after"></div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul className='nav d-flex justify-content-start align-items-center parkings'>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="border_number_parking_bottom">B 25</div>
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""
                                                             className='car_bottom'/>
                                                    </div>

                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_border_null_after_bottom"></div>
                                                        <div className="parking_null_red"><p
                                                            className='mt-3 fw-bold fs-5'>B 23</p></div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_border_null_after_bottom"></div>
                                                        <div className="parking_null"><p
                                                            className='mt-3 fw-bold fs-5'>B 22</p></div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="border_number_parking_bottom">B 21</div>
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""
                                                             className='car_bottom'/>
                                                    </div>

                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="border_number_parking_bottom">B 20</div>
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""
                                                             className='car_bottom'/>
                                                    </div>

                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="border_number_parking_bottom">B 19</div>
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""
                                                             className='car_bottom'/>
                                                    </div>

                                                </li>
                                            </ul>
                                        </div>
                                        <div className="me-auto">
                                            <ul className='nav d-flex justify-content-start align-items-center parkings mb-6'>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""/>
                                                        <div className="border_number_parking">B 1</div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_null"><p
                                                            className='mt-3 fw-bold fs-5'>B 2</p></div>
                                                        <div className="parking_border_null_after"></div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_null"><p
                                                            className='mt-3 fw-bold fs-5'>B 3</p></div>
                                                        <div className="parking_border_null_after"></div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""/>
                                                        <div className="border_number_parking">B 4</div>
                                                    </div>

                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""/>
                                                        <div className="border_number_parking">B 5</div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_null"><p
                                                            className='mt-3 fw-bold fs-5'>B 6</p></div>
                                                        <div className="parking_border_null_after"></div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul className='nav d-flex justify-content-start align-items-center parkings'>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="border_number_parking_bottom">B 10</div>
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""
                                                             className='car_bottom'/>
                                                    </div>

                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_border_null_after_bottom"></div>
                                                        <div className="parking_null_red"><p
                                                            className='mt-3 fw-bold fs-5'>B 11</p></div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_border_null_after_bottom"></div>
                                                        <div className="parking_null"><p
                                                            className='mt-3 fw-bold fs-5'>B 12</p></div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="border_number_parking_bottom">B 13</div>
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""
                                                             className='car_bottom'/>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="border_number_parking_bottom">B 14</div>
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""
                                                             className='car_bottom'/>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="border_number_parking_bottom">B 15</div>
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""
                                                             className='car_bottom'/>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="parking-b" role="tabpanel"
                                     aria-labelledby="parking-b-tab" tabIndex="0">
                                    <div className="d-flex my-5 container-fluid">
                                        <div className="ms-auto">
                                            <ul className='nav d-flex justify-content-start align-items-center parkings mb-6'>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""/>
                                                        <div className="border_number_parking">B 24</div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_null"><p
                                                            className='mt-3 fw-bold fs-5'>B 11</p></div>
                                                        <div className="parking_border_null_after"></div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_null"><p
                                                            className='mt-3 fw-bold fs-5'>B 10</p></div>
                                                        <div className="parking_border_null_after"></div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""/>
                                                        <div className="border_number_parking">B 9</div>
                                                    </div>

                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""/>
                                                        <div className="border_number_parking">B 8</div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_null"><p
                                                            className='mt-3 fw-bold fs-5'>B 7</p></div>
                                                        <div className="parking_border_null_after"></div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul className='nav d-flex justify-content-start align-items-center parkings'>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="border_number_parking_bottom">B 25</div>
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""
                                                             className='car_bottom'/>
                                                    </div>

                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_border_null_after_bottom"></div>
                                                        <div className="parking_null_red"><p
                                                            className='mt-3 fw-bold fs-5'>B 23</p></div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_border_null_after_bottom"></div>
                                                        <div className="parking_null"><p
                                                            className='mt-3 fw-bold fs-5'>B 22</p></div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="border_number_parking_bottom">B 21</div>
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""
                                                             className='car_bottom'/>
                                                    </div>

                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="border_number_parking_bottom">B 20</div>
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""
                                                             className='car_bottom'/>
                                                    </div>

                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="border_number_parking_bottom">B 19</div>
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""
                                                             className='car_bottom'/>
                                                    </div>

                                                </li>
                                            </ul>
                                        </div>
                                        <div className="me-auto">
                                            <ul className='nav d-flex justify-content-start align-items-center parkings mb-6'>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""/>
                                                        <div className="border_number_parking">B 1</div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_null"><p
                                                            className='mt-3 fw-bold fs-5'>B 2</p></div>
                                                        <div className="parking_border_null_after"></div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_null"><p
                                                            className='mt-3 fw-bold fs-5'>B 3</p></div>
                                                        <div className="parking_border_null_after"></div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""/>
                                                        <div className="border_number_parking">B 4</div>
                                                    </div>

                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""/>
                                                        <div className="border_number_parking">B 5</div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_null"><p
                                                            className='mt-3 fw-bold fs-5'>B 6</p></div>
                                                        <div className="parking_border_null_after"></div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul className='nav d-flex justify-content-start align-items-center parkings'>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="border_number_parking_bottom">B 10</div>
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""
                                                             className='car_bottom'/>
                                                    </div>

                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_border_null_after_bottom"></div>
                                                        <div className="parking_null_red"><p
                                                            className='mt-3 fw-bold fs-5'>B 11</p></div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_border_null_after_bottom"></div>
                                                        <div className="parking_null"><p
                                                            className='mt-3 fw-bold fs-5'>B 12</p></div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="border_number_parking_bottom">B 13</div>
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""
                                                             className='car_bottom'/>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="border_number_parking_bottom">B 14</div>
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""
                                                             className='car_bottom'/>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="border_number_parking_bottom">B 15</div>
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""
                                                             className='car_bottom'/>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="parking-d" role="tabpanel"
                                     aria-labelledby="parking-d-tab" tabIndex="0">
                                    <div className="d-flex my-5 container-fluid">
                                        <div className="ms-auto">
                                            <ul className='nav d-flex justify-content-start align-items-center parkings mb-6'>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""/>
                                                        <div className="border_number_parking">B 24</div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_null"><p
                                                            className='mt-3 fw-bold fs-5'>B 11</p></div>
                                                        <div className="parking_border_null_after"></div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_null"><p
                                                            className='mt-3 fw-bold fs-5'>B 10</p></div>
                                                        <div className="parking_border_null_after"></div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""/>
                                                        <div className="border_number_parking">B 9</div>
                                                    </div>

                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""/>
                                                        <div className="border_number_parking">B 8</div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_null"><p
                                                            className='mt-3 fw-bold fs-5'>B 7</p></div>
                                                        <div className="parking_border_null_after"></div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul className='nav d-flex justify-content-start align-items-center parkings'>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="border_number_parking_bottom">B 25</div>
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""
                                                             className='car_bottom'/>
                                                    </div>

                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_border_null_after_bottom"></div>
                                                        <div className="parking_null_red"><p
                                                            className='mt-3 fw-bold fs-5'>B 23</p></div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_border_null_after_bottom"></div>
                                                        <div className="parking_null"><p
                                                            className='mt-3 fw-bold fs-5'>B 22</p></div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="border_number_parking_bottom">B 21</div>
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""
                                                             className='car_bottom'/>
                                                    </div>

                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="border_number_parking_bottom">B 20</div>
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""
                                                             className='car_bottom'/>
                                                    </div>

                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="border_number_parking_bottom">B 19</div>
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""
                                                             className='car_bottom'/>
                                                    </div>

                                                </li>
                                            </ul>
                                        </div>
                                        <div className="me-auto">
                                            <ul className='nav d-flex justify-content-start align-items-center parkings mb-6'>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""/>
                                                        <div className="border_number_parking">B 1</div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_null"><p
                                                            className='mt-3 fw-bold fs-5'>B 2</p></div>
                                                        <div className="parking_border_null_after"></div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_null"><p
                                                            className='mt-3 fw-bold fs-5'>B 3</p></div>
                                                        <div className="parking_border_null_after"></div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""/>
                                                        <div className="border_number_parking">B 4</div>
                                                    </div>

                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""/>
                                                        <div className="border_number_parking">B 5</div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_null"><p
                                                            className='mt-3 fw-bold fs-5'>B 6</p></div>
                                                        <div className="parking_border_null_after"></div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul className='nav d-flex justify-content-start align-items-center parkings'>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="border_number_parking_bottom">B 10</div>
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""
                                                             className='car_bottom'/>
                                                    </div>

                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_border_null_after_bottom"></div>
                                                        <div className="parking_null_red"><p
                                                            className='mt-3 fw-bold fs-5'>B 11</p></div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_border_null_after_bottom"></div>
                                                        <div className="parking_null"><p
                                                            className='mt-3 fw-bold fs-5'>B 12</p></div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="border_number_parking_bottom">B 13</div>
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""
                                                             className='car_bottom'/>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="border_number_parking_bottom">B 14</div>
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""
                                                             className='car_bottom'/>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="border_number_parking_bottom">B 15</div>
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""
                                                             className='car_bottom'/>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="parking-c" role="tabpanel"
                                     aria-labelledby="parking-c-tab" tabIndex="0">
                                    <div className="d-flex my-5 container-fluid">
                                        <div className="ms-auto">
                                            <ul className='nav d-flex justify-content-start align-items-center parkings mb-6'>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""/>
                                                        <div className="border_number_parking">B 24</div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_null"><p
                                                            className='mt-3 fw-bold fs-5'>B 11</p></div>
                                                        <div className="parking_border_null_after"></div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_null"><p
                                                            className='mt-3 fw-bold fs-5'>B 10</p></div>
                                                        <div className="parking_border_null_after"></div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""/>
                                                        <div className="border_number_parking">B 9</div>
                                                    </div>

                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""/>
                                                        <div className="border_number_parking">B 8</div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_null"><p
                                                            className='mt-3 fw-bold fs-5'>B 7</p></div>
                                                        <div className="parking_border_null_after"></div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul className='nav d-flex justify-content-start align-items-center parkings'>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="border_number_parking_bottom">B 25</div>
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""
                                                             className='car_bottom'/>
                                                    </div>

                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_border_null_after_bottom"></div>
                                                        <div className="parking_null_red"><p
                                                            className='mt-3 fw-bold fs-5'>B 23</p></div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_border_null_after_bottom"></div>
                                                        <div className="parking_null"><p
                                                            className='mt-3 fw-bold fs-5'>B 22</p></div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="border_number_parking_bottom">B 21</div>
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""
                                                             className='car_bottom'/>
                                                    </div>

                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="border_number_parking_bottom">B 20</div>
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""
                                                             className='car_bottom'/>
                                                    </div>

                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="border_number_parking_bottom">B 19</div>
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""
                                                             className='car_bottom'/>
                                                    </div>

                                                </li>
                                            </ul>
                                        </div>
                                        <div className="me-auto">
                                            <ul className='nav d-flex justify-content-start align-items-center parkings mb-6'>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""/>
                                                        <div className="border_number_parking">B 1</div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_null"><p
                                                            className='mt-3 fw-bold fs-5'>B 2</p></div>
                                                        <div className="parking_border_null_after"></div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_null"><p
                                                            className='mt-3 fw-bold fs-5'>B 3</p></div>
                                                        <div className="parking_border_null_after"></div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""/>
                                                        <div className="border_number_parking">B 4</div>
                                                    </div>

                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""/>
                                                        <div className="border_number_parking">B 5</div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_null"><p
                                                            className='mt-3 fw-bold fs-5'>B 6</p></div>
                                                        <div className="parking_border_null_after"></div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul className='nav d-flex justify-content-start align-items-center parkings'>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="border_number_parking_bottom">B 10</div>
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""
                                                             className='car_bottom'/>
                                                    </div>

                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_border_null_after_bottom"></div>
                                                        <div className="parking_null_red"><p
                                                            className='mt-3 fw-bold fs-5'>B 11</p></div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="parking_border_null_after_bottom"></div>
                                                        <div className="parking_null"><p
                                                            className='mt-3 fw-bold fs-5'>B 12</p></div>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="border_number_parking_bottom">B 13</div>
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""
                                                             className='car_bottom'/>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="border_number_parking_bottom">B 14</div>
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""
                                                             className='car_bottom'/>
                                                    </div>
                                                </li>
                                                <li className='nav-item'>
                                                    <div className="border_parking">
                                                        <div className="border_number_parking_bottom">B 15</div>
                                                        <img src={require('../../Assets/images/main/car.png')} alt=""
                                                             className='car_bottom'/>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-4 mt-lg-0">
                    <div className="card bg-white rounded-2 border-0 shadow-sm">
                        <div className="card-header bg-white border_bottom_spanish_gray">
                            <div className="d-flex justify-content-between align-items-center py-2">
                                <h6 className="h6 fs-16p fw-bold">توقف‌های نامتعارف</h6>
                                <Link to='/' className="text-primary text-nowrap">مشاهده همه <FiChevronLeft/></Link>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="card border-0 align-items-center">
                                <div
                                    className="col-10 card bg_tab_stops d-flex justify-content-center align-items-center py-1 border-0">
                                    <ul className="nav nav-pills border-0" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="stop-car-tab" data-bs-toggle="pill"
                                                    data-bs-target="#stop-car" type="button" role="tab"
                                                    aria-controls="stop-car" aria-selected="true">توقف خودرو
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="human-stop-tab" data-bs-toggle="pill"
                                                    data-bs-target="#human-stop" type="button" role="tab"
                                                    aria-controls="human-stop" aria-selected="false">توقف انسان
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content col-10 mt-3" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="stop-car" role="tabpanel"
                                         aria-labelledby="stop-car-tab" tabIndex="0">
                                        <div className="card bg-transparent border-0">
                                            <div
                                                className="card-header border-0 m-0 p-0 justify-content-start bg-transparent">
                                                <p className='fs-6 m-0 p-0'><span className='fw-bold'>25</span> توقف
                                                    نامتعارف خودرو</p></div>
                                            <div className="card-body">
                                                {/* card stop's */}
                                                <div className="card bg-transparent rounded-4 mb-3 border_spanish_gray">
                                                    <div className="d-flex align-items-center py-3 px-2">
                                                        <div className="bg_stop_card_number">B 5</div>
                                                        <div className='me-3 text-truncate'>
                                                            <h6 className="h6 fw-bold text-truncate">توقف به مدت 25
                                                                دقیقه</h6>
                                                            <p className="color-dark-gray p-0 m-0 text-truncate fw-bold">ورود
                                                                ساعت 13:45</p>
                                                        </div>
                                                        <Link to='/'
                                                              className="bg-true-blue p-1 rounded-3 text-white me-auto">دوربین <FiChevronLeft/></Link>
                                                    </div>
                                                </div>
                                                {/* card stop's */}
                                                <div className="card bg-transparent rounded-4 mb-3 border_spanish_gray">
                                                    <div className="d-flex align-items-center py-3 px-2">
                                                        <div className="bg_stop_card_number">B 5</div>
                                                        <div className='me-3 text-truncate'>
                                                            <h6 className="h6 fw-bold text-truncate">توقف به مدت 25
                                                                دقیقه</h6>
                                                            <p className="color-dark-gray p-0 m-0 text-truncate fw-bold">ورود
                                                                ساعت 13:45</p>
                                                        </div>
                                                        <Link to='/'
                                                              className="bg-true-blue p-1 rounded-3 text-white me-auto">دوربین <FiChevronLeft/></Link>
                                                    </div>
                                                </div>
                                                {/* card stop's */}
                                                <div className="card bg-transparent rounded-4 border_spanish_gray">
                                                    <div className="d-flex align-items-center py-3 px-2">
                                                        <div className="bg_stop_card_number">B 5</div>
                                                        <div className='me-3 text-truncate'>
                                                            <h6 className="h6 fw-bold text-truncate">توقف به مدت 25
                                                                دقیقه</h6>
                                                            <p className="color-dark-gray p-0 m-0 text-truncate fw-bold">ورود
                                                                ساعت 13:45</p>
                                                        </div>
                                                        <Link to='/'
                                                              className="bg-true-blue p-1 rounded-3 text-white me-auto">دوربین <FiChevronLeft/></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="human-stop" role="tabpanel"
                                         aria-labelledby="human-stop-tab" tabIndex="0">
                                        <div className="card bg-transparent border-0">
                                            <div
                                                className="card-header border-0 m-0 p-0 justify-content-start bg-transparent">
                                                <p className='fs-6 m-0 p-0'><span className='fw-bold'>25</span> توقف
                                                    نامتعارف خودرو</p></div>
                                            <div className="card-body">
                                                {/* card stop's */}
                                                <div className="card bg-transparent rounded-4 mb-3 border_spanish_gray">
                                                    <div className="d-flex align-items-center py-3 px-2">
                                                        <div className="bg_stop_card_number">B 5</div>
                                                        <div className='me-3 text-truncate'>
                                                            <h6 className="h6 fw-bold text-truncate">توقف به مدت 25
                                                                دقیقه</h6>
                                                            <p className="color-dark-gray p-0 m-0 text-truncate fw-bold">ورود
                                                                ساعت 13:45</p>
                                                        </div>
                                                        <Link to='/'
                                                              className="bg-true-blue p-1 rounded-3 text-white me-auto">دوربین <FiChevronLeft/></Link>
                                                    </div>
                                                </div>
                                                {/* card stop's */}
                                                <div className="card bg-transparent rounded-4 mb-3 border_spanish_gray">
                                                    <div className="d-flex align-items-center py-3 px-2">
                                                        <div className="bg_stop_card_number">B 5</div>
                                                        <div className='me-3 text-truncate'>
                                                            <h6 className="h6 fw-bold text-truncate">توقف به مدت 25
                                                                دقیقه</h6>
                                                            <p className="color-dark-gray p-0 m-0 text-truncate fw-bold">ورود
                                                                ساعت 13:45</p>
                                                        </div>
                                                        <Link to='/'
                                                              className="bg-true-blue p-1 rounded-3 text-white me-auto">دوربین <FiChevronLeft/></Link>
                                                    </div>
                                                </div>
                                                {/* card stop's */}
                                                <div className="card bg-transparent rounded-4 border_spanish_gray">
                                                    <div className="d-flex align-items-center py-3 px-2">
                                                        <div className="bg_stop_card_number">B 5</div>
                                                        <div className='me-3 text-truncate'>
                                                            <h6 className="h6 fw-bold text-truncate">توقف به مدت 25
                                                                دقیقه</h6>
                                                            <p className="color-dark-gray p-0 m-0 text-truncate fw-bold">ورود
                                                                ساعت 13:45</p>
                                                        </div>
                                                        <Link to='/'
                                                              className="bg-true-blue p-1 rounded-3 text-white me-auto">دوربین <FiChevronLeft/></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="row container-fluid mb-4">
                <div className="col-lg-4">
                    <div className="card bg-white rounded-2 border-0 shadow-sm">
                        <div className="card-header bg-white border_bottom_spanish_gray">
                            <div className="d-flex justify-content-between align-items-center py-2">
                                <h6 className="h6 fs-16p fw-bold">ظرفیت پارکینگ</h6>
                                <Link to='/' className="text-primary text-nowrap">مشاهده همه <FiChevronLeft/></Link>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="card bg-transparent border-0 shadow-none">
                                <div className="card-header bg-transparent border-0 shadow-none row">
                                    <div className="col-lg-6">
                                        <p className="color-dark-gray fs-7 fw-bold m-0 mb-2">خودرو‌های پارک شده</p>
                                        <p className="fs-6 fw-bold">تاکنون 86 خودرو</p>
                                    </div>
                                    <div className="col-lg-6 text-start"><Button
                                        className='btn_science_blue py-2 text-white'>ثبت مورد جدید</Button></div>
                                </div>
                                <div className="card-body my-4 py-5 row">
                                    <div className="col-lg-2 chart_parking">
                                        <div className="progress">
                                            <div className="progress-bar w-25" role="progressbar"
                                                 aria-label="Basic example" aria-valuenow="0" aria-valuemin="0"
                                                 aria-valuemax="100"><span>25</span></div>
                                        </div>
                                        <p className="chart_parking_text color-dark-gray text-nowrap">A پارکینگ</p>
                                    </div>
                                    <div className="col-lg-2 chart_parking">
                                        <div className="progress">
                                            <div className="progress-bar w-75" role="progressbar"
                                                 aria-label="Basic example" aria-valuenow="0" aria-valuemin="0"
                                                 aria-valuemax="100"><span>75</span></div>
                                        </div>
                                        <p className="chart_parking_text color-dark-gray text-nowrap">B پارکینگ</p>
                                    </div>
                                    <div className="col-lg-2 chart_parking">
                                        <div className="progress">
                                            <div className="progress-bar w-50" role="progressbar"
                                                 aria-label="Basic example" aria-valuenow="0" aria-valuemin="0"
                                                 aria-valuemax="100"><span>50</span></div>
                                        </div>
                                        <p className="chart_parking_text color-dark-gray text-nowrap">C پارکینگ</p>
                                    </div>
                                    <div className="col-lg-2 chart_parking">
                                        <div className="progress">
                                            <div className="progress-bar w-100" role="progressbar"
                                                 aria-label="Basic example" aria-valuenow="0" aria-valuemin="0"
                                                 aria-valuemax="100"><span>100</span></div>
                                        </div>
                                        <p className="chart_parking_text color-dark-gray text-nowrap">D پارکینگ</p>
                                    </div>
                                    <div className="col-lg-2 chart_parking">
                                        <div className="progress">
                                            <div className="progress-bar w-25" role="progressbar"
                                                 aria-label="Basic example" aria-valuenow="0" aria-valuemin="0"
                                                 aria-valuemax="100"><span>25</span></div>
                                        </div>
                                        <p className="chart_parking_text color-dark-gray text-nowrap">E پارکینگ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="card bg-white rounded-2 border-0 shadow-sm">
                        <div className="card-header bg-white border_bottom_spanish_gray">
                            <div className="d-flex justify-content-between align-items-center py-2">
                                <h6 className="h6 fs-16p fw-bold">نمای کلی پارکینگ</h6>
                                <Link to='/' className="text-primary text-nowrap">مشاهده همه <FiChevronLeft/></Link>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="d-flex">
                                <ul className="nav nav-pills mb-3 w-100" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link bg_list_parking_all_views active"
                                                id="parking-img-a-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#parking-img-a" type="button" role="tab"
                                                aria-controls="parking-img-a" aria-selected="true"> پارکینگ A
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link bg_list_parking_all_views" id="parking-img-b-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#parking-img-b" type="button" role="tab"
                                                aria-controls="parking-img-b" aria-selected="false"> پارکینگ B
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link bg_list_parking_all_views" id="parking-img-c-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#parking-img-c" type="button" role="tab"
                                                aria-controls="parking-img-c" aria-selected="false"> پارکینگ C
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link bg_list_parking_all_views" id="parking-img-d-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#parking-img-d" type="button" role="tab"
                                                aria-controls="parking-img-d" aria-selected="false"> پارکینگ D
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="parking-img-a" role="tabpanel"
                                     aria-labelledby="parking-img-a-tab" tabIndex="0">
                                    <div className="card mt-4 bg-transparent border-0 shadow-none">
                                        <div className='row align-items-center'>
                                            <div className="card col-lg-3 mb-3 bg-transparent border-0 shadow-none">
                                                <img src={require('../../Assets/images/main/camera-1')} alt=""
                                                     className='img_all_parking_view'/>
                                                <div className="badge bg-true-blue text_all_parking_view">راهرو اول
                                                </div>
                                            </div>
                                            <div className="card col-lg-3 mb-3 bg-transparent border-0 shadow-none">
                                                <img src={require('../../Assets/images/main/camera-2')} alt=""
                                                     className='img_all_parking_view'/>
                                                <div className="badge bg-true-blue text_all_parking_view">راهرو اول
                                                </div>
                                            </div>
                                            <div className="card col-lg-3 mb-3 bg-transparent border-0 shadow-none">
                                                <img src={require('../../Assets/images/main/camera-3')} alt=""
                                                     className='img_all_parking_view'/>
                                                <div className="badge bg-true-blue text_all_parking_view">راهرو اول
                                                </div>
                                            </div>
                                            <div className="card col-lg-3 mb-3 bg-transparent border-0 shadow-none">
                                                <div className="add_camera">
                                                    <div className="add_camera_img">
                                                        <Link to='/'><img
                                                            src={require('../../Assets/images/main/plus.png')} alt=""/>
                                                            <img
                                                                src={require('../../Assets/images/main/camera-add.png')}
                                                                alt=""/></Link>
                                                    </div>
                                                    <p className="fs-6 color-dark-gray">افزودن دوربین</p>
                                                </div>
                                            </div>
                                            <div className="card col-lg-3 mb-3 bg-transparent border-0 shadow-none">
                                                <img src={require('../../Assets/images/main/camera-3')} alt=""
                                                     className='img_all_parking_view'/>
                                                <div className="badge bg-true-blue text_all_parking_view">راهرو اول
                                                </div>
                                            </div>
                                            <div className="card col-lg-3 mb-3 bg-transparent border-0 shadow-none">
                                                <img src={require('../../Assets/images/main/camera-4')} alt=""
                                                     className='img_all_parking_view'/>
                                                <div className="badge bg-true-blue text_all_parking_view">راهرو اول
                                                </div>
                                            </div>
                                            <div className="card col-lg-3 mb-3 bg-transparent border-0 shadow-none">
                                                <img src={require('../../Assets/images/main/camera-5')} alt=""
                                                     className='img_all_parking_view'/>
                                                <div className="badge bg-true-blue text_all_parking_view">راهرو اول
                                                </div>
                                            </div>
                                            <div className="card col-lg-3 mb-3 bg-transparent border-0 shadow-none">
                                                <div className="add_camera">
                                                    <div className="add_camera_img">
                                                        <Link to='/'><img
                                                            src={require('../../Assets/images/main/plus.png')} alt=""/>
                                                            <img
                                                                src={require('../../Assets/images/main/camera-add.png')}
                                                                alt=""/></Link>
                                                    </div>
                                                    <p className="fs-6 color-dark-gray">افزودن دوربین</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="parking-img-b" role="tabpanel"
                                     aria-labelledby="parking-img-b-tab" tabIndex="0">
                                </div>
                                <div className="tab-pane fade" id="parking-img-d" role="tabpanel"
                                     aria-labelledby="parking-img-d-tab" tabIndex="0">
                                </div>
                                <div className="tab-pane fade" id="parking-img-c" role="tabpanel"
                                     aria-labelledby="parking-img-c-tab" tabIndex="0">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default Home