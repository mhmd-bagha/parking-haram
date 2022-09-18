import {Link} from "react-router-dom";
import {FiChevronLeft} from "react-icons/fi";

const View_all_parking = () => {
  return (
      <div className="col-xxl-8">
          <div className="card bg-white rounded-2 border-0 shadow-sm">
              <div className="card-header bg-white border_bottom_spanish_gray">
                  <div className="d-flex justify-content-between align-items-center py-2">
                      <h6 className="h6 fs-16p fw-bold">نمای کلی پارکینگ</h6>
                      <Link to='/' className="text-primary text-nowrap">مشاهده همه <FiChevronLeft/></Link>
                  </div>
              </div>
              <div className="card-body">
                  {/* btn tabs parking view all */}
                  <div className="d-flex justify-content-between">
                      <ul className="nav nav-pills mb-3 w-100" id="pills-tab" role="tablist">
                          <li className="nav-item" role="presentation">
                              <button className="nav-link bg_list_parking_all_views active" id="parking-a-tab"
                                      data-bs-toggle="pill"
                                      data-bs-target="#parking-a" type="button" role="tab"
                                      aria-controls="parking-a" aria-selected="true"> پارکینگ A
                              </button>
                          </li>
                          {/* parking type */}
                          <li className="nav-item" role="presentation">
                              <button className="nav-link bg_list_parking_all_views" id="parking-b-tab"
                                      data-bs-toggle="pill"
                                      data-bs-target="#parking-b" type="button" role="tab"
                                      aria-controls="parking-b" aria-selected="false"> پارکینگ B
                              </button>
                          </li>
                          {/* parking type */}
                          <li className="nav-item" role="presentation">
                              <button className="nav-link bg_list_parking_all_views" id="parking-c-tab"
                                      data-bs-toggle="pill"
                                      data-bs-target="#parking-c" type="button" role="tab"
                                      aria-controls="parking-c" aria-selected="false"> پارکینگ C
                              </button>
                          </li>
                          {/* parking type */}
                          <li className="nav-item" role="presentation">
                              <button className="nav-link bg_list_parking_all_views" id="parking-d-tab"
                                      data-bs-toggle="pill"
                                      data-bs-target="#parking-d" type="button" role="tab"
                                      aria-controls="parking-d" aria-selected="false"> پارکینگ D
                              </button>
                          </li>
                      </ul>
                      <div className='text-nowrap'>
                          <button className='btn btn_science_blue py-2'><img
                              src={require('../../Assets/images/main/video_on.png')} alt=""/> <span
                              className='me-2'>نمایش دوربین</span></button>
                      </div>
                  </div>
                  {/* items view all parkings img */}
                  <div className="tab-content" id="pills-tabContent">
                      <div className="tab-pane fade show active" id="parking-a" role="tabpanel"
                           aria-labelledby="parking-a-tab" tabIndex="0">
                          <div className="d-flex my-5">
                              {/* view all parking top */}
                              <div className="ms-auto">
                                  {/* items location parking */}
                                  <ul className='nav d-flex justify-content-start align-items-center parkings mb-6'>
                                      <li className='nav-item'>
                                          <div className="border_parking">
                                              <img src={require('../../Assets/images/main/car.png')} alt=""/>
                                              <div className="border_number_parking">B 24</div>
                                          </div>
                                      </li>
                                      {/* item location parking view */}
                                      <li className='nav-item'>
                                          <div className="border_parking">
                                              <div className="parking_null"><p
                                                  className='mt-3 fw-bold fs-5'>B 11</p></div>
                                              <div className="parking_border_null_after"></div>
                                          </div>
                                      </li>
                                      {/* item location parking view */}
                                      <li className='nav-item'>
                                          <div className="border_parking">
                                              <div className="parking_null"><p
                                                  className='mt-3 fw-bold fs-5'>B 10</p></div>
                                              <div className="parking_border_null_after"></div>
                                          </div>
                                      </li>
                                      {/* item location parking view */}
                                      <li className='nav-item'>
                                          <div className="border_parking">
                                              <img src={require('../../Assets/images/main/car.png')} alt=""/>
                                              <div className="border_number_parking">B 9</div>
                                          </div>

                                      </li>
                                      {/* item location parking view */}
                                      <li className='nav-item'>
                                          <div className="border_parking">
                                              <img src={require('../../Assets/images/main/car.png')} alt=""/>
                                              <div className="border_number_parking">B 8</div>
                                          </div>
                                      </li>
                                      {/* item location parking view */}
                                      <li className='nav-item'>
                                          <div className="border_parking">
                                              <div className="parking_null"><p
                                                  className='mt-3 fw-bold fs-5'>B 7</p></div>
                                              <div className="parking_border_null_after"></div>
                                          </div>
                                      </li>
                                  </ul>
                                  {/* items location parking */}
                                  <ul className='nav d-flex justify-content-start align-items-center parkings'>
                                      <li className='nav-item'>
                                          <div className="border_parking">
                                              <div className="border_number_parking_bottom">B 25</div>
                                              <img src={require('../../Assets/images/main/car.png')} alt=""
                                                   className='car_bottom'/>
                                          </div>
                                      </li>
                                      {/* item location parking view */}
                                      <li className='nav-item'>
                                          <div className="border_parking">
                                              <div className="parking_border_null_after_bottom"></div>
                                              <div className="parking_null_red"><p
                                                  className='mt-3 fw-bold fs-5'>B 23</p></div>
                                          </div>
                                      </li>
                                      {/* item location parking view */}
                                      <li className='nav-item'>
                                          <div className="border_parking">
                                              <div className="parking_border_null_after_bottom"></div>
                                              <div className="parking_null"><p
                                                  className='mt-3 fw-bold fs-5'>B 22</p></div>
                                          </div>
                                      </li>
                                      {/* item location parking view */}
                                      <li className='nav-item'>
                                          <div className="border_parking">
                                              <div className="border_number_parking_bottom">B 21</div>
                                              <img src={require('../../Assets/images/main/car.png')} alt=""
                                                   className='car_bottom'/>
                                          </div>

                                      </li>
                                      {/* item location parking view */}
                                      <li className='nav-item'>
                                          <div className="border_parking">
                                              <div className="border_number_parking_bottom">B 20</div>
                                              <img src={require('../../Assets/images/main/car.png')} alt=""
                                                   className='car_bottom'/>
                                          </div>

                                      </li>
                                      {/* item location parking view */}
                                      <li className='nav-item'>
                                          <div className="border_parking">
                                              <div className="border_number_parking_bottom">B 19</div>
                                              <img src={require('../../Assets/images/main/car.png')} alt=""
                                                   className='car_bottom'/>
                                          </div>

                                      </li>
                                  </ul>
                              </div>
                              {/* view all parking bottom */}
                              <div className="me-auto">
                                  {/* items location parking */}
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
                                  {/* items location parking */}
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
  )
}
export default View_all_parking