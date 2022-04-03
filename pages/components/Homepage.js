import { FaChevronRight } from "react-icons/fa";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="poptrailers">
        <h1>Popular Movies</h1>
        <ul className="pop">
          <li>
            <h2>ANOTHER BANGER</h2>
            <h3>MOVIE NAME</h3>
            <p>ratings: /10</p>
            <a className="details">
              <p>
                view details
                <FaChevronRight className="colors" />
              </p>
            </a>
          </li>
          <li>
            <h2>ANOTHER BANGER</h2>
            <h3>MOVIE NAME</h3>
            <p>ratings: /10</p>
            <a className="details">
              <p>
                view details
                <FaChevronRight className="colors" />
              </p>
            </a>
          </li>
          <li>
            <h2>ANOTHER BANGER</h2>
            <h3>MOVIE NAME</h3>
            <p>ratings: /10</p>
            <a className="details">
              <p>
                view details
                <FaChevronRight className="colors" />
              </p>
            </a>
          </li>
        </ul>
      </div>
      <div className="upcoming-container">
        <h2>Upcoming Movies</h2>
        <div className="info">
        <div className="big">Big info posterFugiat eiusmod excepteur amet reprehenderit nulla ullamco est sunt veniam do laboris exercitation minim eu. Irure sunt anim voluptate amet et officia ullamco in. Ut incididunt magna et elit officia exercitation veniam officia officia sint aliqua.
        </div>
        <div className="small">small side posterFugiat eiusmod excepteur amet reprehenderit nulla ullamco est sunt veniam do laboris exercitation minim eu. Irure sunt anim voluptate amet et officia ullamco in. Ut incididunt magna et elit officia exercitation veniam officia officia sint aliqua.
        </div>
      </div>
      <div className="info">
        <div className="small-2">small side posterFugiat eiusmod excepteur amet reprehenderit nulla ullamco est sunt veniam do laboris exercitation minim eu. Irure sunt anim voluptate amet et officia ullamco in. Ut incididunt magna et elit officia exercitation veniam officia officia sint aliqua.
        </div>
        <div className="big-2">Big info posterFugiat eiusmod excepteur amet reprehenderit nulla ullamco est sunt veniam do laboris exercitation minim eu. Irure sunt anim voluptate amet et officia ullamco in. Ut incididunt magna et elit officia exercitation veniam officia officia sint aliqua.
        </div>
      </div>
      <div className="info">
        <div className="big">Big info posterFugiat eiusmod excepteur amet reprehenderit nulla ullamco est sunt veniam do laboris exercitation minim eu. Irure sunt anim voluptate amet et officia ullamco in. Ut incididunt magna et elit officia exercitation veniam officia officia sint aliqua.
        </div>
        <div className="small">small side posterFugiat eiusmod excepteur amet reprehenderit nulla ullamco est sunt veniam do laboris exercitation minim eu. Irure sunt anim voluptate amet et officia ullamco in. Ut incididunt magna et elit officia exercitation veniam officia officia sint aliqua.
        </div>
      </div>
      <div className="info">
        <div className="small-2">small side posterFugiat eiusmod excepteur amet reprehenderit nulla ullamco est sunt veniam do laboris exercitation minim eu. Irure sunt anim voluptate amet et officia ullamco in. Ut incididunt magna et elit officia exercitation veniam officia officia sint aliqua.
        </div>
        <div className="big-2">Big info posterFugiat eiusmod excepteur amet reprehenderit nulla ullamco est sunt veniam do laboris exercitation minim eu. Irure sunt anim voluptate amet et officia ullamco in. Ut incididunt magna et elit officia exercitation veniam officia officia sint aliqua.
        </div>
      </div>
      </div>
    </div>
  );
};

export default Homepage;
