import {Link} from "react-router-dom";
import {FiChevronLeft} from "react-icons/fi";

const View_all_parking_video = () => {
  return (
      <div className="col-12 col-xxl-8">
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
                {/* parking button tab */}
                <li className="nav-item" role="presentation">
                  <button className="nav-link bg_list_parking_all_views" id="parking-img-b-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#parking-img-b" type="button" role="tab"
                          aria-controls="parking-img-b" aria-selected="false"> پارکینگ B
                  </button>
                </li>
                {/* parking button tab */}
                <li className="nav-item" role="presentation">
                  <button className="nav-link bg_list_parking_all_views" id="parking-img-c-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#parking-img-c" type="button" role="tab"
                          aria-controls="parking-img-c" aria-selected="false"> پارکینگ C
                  </button>
                </li>
                {/* parking button tab */}
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
              <div className="tab-pane fade show active" id="parking-img-a" role="tabpanel" aria-labelledby="parking-img-a-tab" tabIndex="0">
                <div className="card mt-4 bg-transparent border-0 shadow-none">
                  <div className='row align-items-center'>
                    <div className="card col-xl-3 col-12 col-md-4 mb-3 bg-transparent border-0 shadow-none">
                      <img src={require('../../Assets/images/main/camera-4.png')} alt=""
                           className='img_all_parking_view'/>
                      <div className="badge bg-true-blue text_all_parking_view">راهرو اول
                      </div>
                    </div>
                    {/* parking view item video */}
                    <div className="card col-xl-3 col-12 col-md-4 mb-3 bg-transparent border-0 shadow-none">
                      <img src={require('../../Assets/images/main/camera-2.png')} alt=""
                           className='img_all_parking_view'/>
                      <div className="badge bg-true-blue text_all_parking_view">راهرو دوم
                      </div>
                    </div>
                    {/* parking view item video */}
                    <div className="card col-xl-3 col-12 col-md-4 mb-3 bg-transparent border-0 shadow-none">
                      <img src={require('../../Assets/images/main/camera-3.png')} alt=""
                           className='img_all_parking_view'/>
                      <div className="badge bg-true-blue text_all_parking_view">راهرو سوم
                      </div>
                    </div>
                    {/* parking view item video */}
                    <div className="card col-xl-3 col-12 col-md-4 mb-3 bg-transparent border-0 shadow-none">
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
                    {/* parking add view item video */}
                    <div className="card col-xl-3 col-12 col-md-4 mb-3 bg-transparent border-0 shadow-none">
                      <img src={require('../../Assets/images/main/camera-3.png')} alt=""
                           className='img_all_parking_view'/>
                      <div className="badge bg-true-blue text_all_parking_view">راهرو چهارم
                      </div>
                    </div>
                    {/* parking view item video */}
                    <div className="card col-xl-3 col-12 col-md-4 mb-3 bg-transparent border-0 shadow-none">
                      <img src={require('../../Assets/images/main/camera-4.png')} alt=""
                           className='img_all_parking_view'/>
                      <div className="badge bg-true-blue text_all_parking_view">راهرو پنجم
                      </div>
                    </div>
                    {/* parking view item video */}
                    <div className="card col-xl-3 col-12 col-md-4 mb-3 bg-transparent border-0 shadow-none">
                      <img src={require('../../Assets/images/main/camera-2.png')} alt=""
                           className='img_all_parking_view'/>
                      <div className="badge bg-true-blue text_all_parking_view">راهرو ششم</div>
                    </div>
                    {/* parking add view item video */}
                    <div className="card col-xl-3 col-12 col-md-4 mb-3 bg-transparent border-0 shadow-none">
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
              {/* tab view all video parking */}
              <div className="tab-pane fade" id="parking-img-b" role="tabpanel" aria-labelledby="parking-img-b-tab" tabIndex="0"></div>
              {/* tab view all video parking */}
              <div className="tab-pane fade" id="parking-img-d" role="tabpanel" aria-labelledby="parking-img-d-tab" tabIndex="0"></div>
              {/* tab view all video parking */}
              <div className="tab-pane fade" id="parking-img-c" role="tabpanel" aria-labelledby="parking-img-c-tab" tabIndex="0"></div>
            </div>
          </div>
        </div>
      </div>
  )
}
export default View_all_parking_video