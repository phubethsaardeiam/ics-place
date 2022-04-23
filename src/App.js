// import logo from './logo.svg';
import "./App.css";
import Placelist from "./components/Placelist";
import PlaceData from "./placedata";


function App() {
  return (
    
    <div className="main-con">
      <div className="col-l">
        <ul className="side-menu">
          <li><img className="logo" src={require('./img/logo.png')}></img></li>
          <li><i class="fa-solid fa-rectangle-list"></i> <br></br>Place </li>
        </ul>
      </div>

      <div className="row">
        <div className="navbar clearfix">
          <ul>
            <li><i class="fa-solid fa-bell"></i></li>
            <li>Akkarapol</li>
          </ul>
        </div>
      </div>

      <div className="col-r">
        <div className="container clearfix">
          <div className="row">
            <div className="col-2">
              <h1 className="title">Place List</h1>
            </div>

            <div className="search col-2">
              <select>
                <option>Restaurant</option>
                <option>Bakery</option>
                <option>Cafe</option>
              </select>
              <input type="text" className="search-box" placeholder="Search name..."></input>
            </div>
          </div>
        </div>

        <div className="container clearfix">
          {PlaceData &&
            PlaceData.map((place) => {
              return (
                <div className="card" key={place.id}>
                  <div className="resimg-con">
                    <img className="resimg" src={place.profile_image_url}></img>
                  </div>
                  <h3>{place.name}</h3>
                  <p className="time">10.00 AM - 15.00 PM</p>
                  <p className="rating"><i class="fa-solid fa-star"></i> {place.rating}</p>

                  <div className="row">
                    <div className="pic-con">
                      <div className="pic clearfix">
                        <img className="pic-img" src={place.images[0]}></img>
                      </div>
                      <div className="pic">
                        <img className="pic-img" src={place.images[1]}></img>
                      </div>
                      <div className="pic">
                        <img className="pic-img" src={place.images[2]}></img>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}


export default App;
