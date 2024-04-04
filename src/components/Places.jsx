import '../styles/Places.css';

const Places = () => {
  return (
    <section className="places-container">
      
      <div className="card-wrapper pit-pizzeria">
        <h3 className="card-title">Pit Pizzeria</h3>
        <div className="card-content">
          <img className="card-image" src="" alt="Pit Pizzeria" />
          <span className="card-stars">
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          <span className="card-distance">100m</span>
        </div>
      </div>

      <div className="card-wrapper haven-bakery">
        <h3 className="card-title">Haven Bakery</h3>
        <div className="card-content">
          <img className="card-image" src="" alt="Haven Bakery" />
          <span className="card-stars">
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          <span className="card-distance">82m</span>
        </div>
      </div>

      <div className="card-wrapper pets4life">
        <h3 className="card-title">Pets4Life</h3>
        <div className="card-content">
          <img className="card-image" src="" alt="Pets4Life" />
          <span className="card-stars">
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          <span className="card-distance">62m</span>
        </div>
      </div>

      <div className="card-wrapper bigz-sports-pub">
        <h3 className="card-title">Bigz Sports Pub</h3>
        <div className="card-content">
          <img className="card-image" src="" alt="Bigz Sports Pub" />
          <span className="card-stars">
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          <span className="card-distance">48m</span>
        </div>
      </div>

      <div className="card-wrapper cloud9">
        <h3 className="card-title">Cloud9</h3>
        <div className="card-content">
          <img className="card-image" src="" alt="Cloud9" />
          <span className="card-stars">
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          <span className="card-distance">10m</span>
        </div>
      </div>

      <div className="card-wrapper karaoke">
        <h3 className="card-title">RedLight Karaoke</h3>
        <div className="card-content">
          <img className="card-image" src="" alt="RedLight Karaoke" />
          <span className="card-stars">
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          <span className="card-distance">-40m</span>
        </div>
      </div>
    </section>
  );
};

export default Places;
