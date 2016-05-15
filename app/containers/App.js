import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../actions/reddit'
import { selectPlant, fetchPlantsIfNeeded, invalidatePlant } from '../actions/plant'
import Picker from '../components/Picker'
import Posts from '../components/Posts'
import Plants from '../components/Plants'
import PlantPicker from '../components/PlantPicker'
import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handlePlantChange = this.handlePlantChange.bind(this);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }

  componentDidMount() {
    const { dispatch, selectedReddit, selectedPlant } = this.props;
    dispatch(fetchPostsIfNeeded(selectedReddit));
    dispatch(fetchPlantsIfNeeded(selectedPlant));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedReddit !== this.props.selectedReddit) {
      const { dispatch, selectedReddit } = nextProps;
      dispatch(fetchPostsIfNeeded(selectedReddit));
    } else if (nextProps.selectedPlant !== this.props.selectedPlant) {
      const { dispatch, selectedPlant } = nextProps;
      dispatch(fetchPlantsIfNeeded(selectedPlant));
    }
  }

  handleChange(nextReddit) {
    this.props.dispatch(selectReddit(nextReddit));
  }

  handlePlantChange(nextPlant) {
    this.props.dispatch(selectPlant(nextPlant));
  }  
  
  handleRefreshClick(e) {
    e.preventDefault();

    const { dispatch, selectedReddit, selectedPlant } = this.props;
    dispatch(invalidateReddit(selectedReddit));
    dispatch(invalidatePlant(selectedPlant));
    dispatch(fetchPostsIfNeeded(selectedReddit));
    dispatch(fetchPlantsIfNeeded(selectedPlant));
  }
  
  render() {
    const {
        selectedReddit,
        selectedPlant,
        posts,
        plants,
        isFetchingReddit,
        isFetchingPlants,
        lastUpdatedReddit,
        lastUpdatedPlants
    } = this.props;

    const isEmpty = posts.length === 0;
    const plantsEmpty = plants.length === 0;
    return (
        <div className={styles.app}>
          <Picker value={selectedReddit}
                  onChange={this.handleChange}
                  options={[ 'reactjs', 'frontend' ]} />
          <p>
            {lastUpdatedReddit &&
            <span>
              Last updated at {new Date(lastUpdatedReddit).toLocaleTimeString()}.
              {' '}
            </span>
            }
            {!isFetchingReddit &&
            <a href="#"
               onClick={this.handleRefreshClick}>
              Refresh
            </a>
            }
          </p>
          {isEmpty
              ? (isFetchingReddit ? <h2>Loading...</h2> : <h2>Empty.</h2>)
              : <div style={{ opacity: isFetchingReddit ? 0.5 : 1 }}>
            <Posts posts={posts} />
          </div>
          }
          <h1>Plants</h1>
          <PlantPicker onClick={this.handlePlantChange} /> 
          <Plants plants={plants} />
        </div>
    )
  }
}

App.propTypes = {
  selectedReddit: PropTypes.string.isRequired,
  selectedPlant: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  plants: PropTypes.array.isRequired,
  isFetchingReddit: PropTypes.bool.isRequired,
  isFetchingPlants: PropTypes.bool.isRequired,
  lastUpdatedReddit: PropTypes.number,
  lastUpdatedPlants: PropTypes.number,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const {
      selectedReddit, 
      selectedPlant, 
      postsByReddit, 
      plantsByPlantQuery
  } = state;
  
  const {
      isFetchingReddit,
      lastUpdatedReddit,
      items: posts
  } = postsByReddit[selectedReddit] || {
    isFetchingReddit: true,
    items: []
  };

  const {
      isFetchingPlants,
      lastUpdatedPlants,
      items: plants
  } = plantsByPlantQuery[selectedPlant] || {
    isFetchingPlants: true,
    items: []
  };  

  return {
    selectedReddit,
    selectedPlant,
    posts,
    plants,
    isFetchingReddit,
    isFetchingPlants,
    lastUpdatedReddit,
    lastUpdatedPlants
  }
}

export default connect(mapStateToProps)(App);
