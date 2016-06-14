import React, { PropTypes } from 'react'
import styles from './cats.css';
import Cat from './Cat'
import NumSelector from '../NumSelector'


const CatsContainer = ({cats, changeNumCatsToShow, numCatsToShow, catsToShowOptions }) => (
    <div className={styles.catList}>
      <header>
        <span>Random Categories</span>
        <nav>
          <NumSelector
              numToShow={numCatsToShow}
              numToShowOptions={catsToShowOptions}
              changeNumToShow={changeNumCatsToShow}
          />
        </nav>
      </header>
      <div>
        {cats.map((cat) =>
            <Cat key={cat.category_id} cat={cat} />
        )}
      </div>
    </div>
);

export default CatsContainer;


CatsContainer.propTypes = {
  cats: PropTypes.arrayOf(React.PropTypes.object).isRequired,
  changeNumCatsToShow: PropTypes.func.isRequired,
  catsToShowOptions: PropTypes.arrayOf(React.PropTypes.string).isRequired,
  numCatsToShow: PropTypes.number
};


CatsContainer.defaultProps = {
  cats: [{category_id: 1, category_name: "history"}, {category_id: 2, category_name: "math"}],
  changeNumCatsToShow: (()  => {console.log("Change!")}),
  catsToShowOptions: ["5", "10", "50"],
  numCatsToShow: 5
};
