import React, { Component } from 'react';
import './App.css';
import SliderContainer from './components/SliderContainer';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import stacksData from './data/stacksData';
import Background from './img/Yo.jpg';
import Loader from './img/three-dots.svg';

export default  class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
      count: 0,
      isLoading: true,
    };
  }

  componentDidMount() {
    const img = new Image();
    img.src = Background;
    img.onload = () => {
      this.setState({ isLoading: false });
    }
  }

  onChange = (index, updateCount = false) => {
    const { count } = this.state;
    const updatedCount = updateCount ? count + 1 : count;
    this.setState({
      selectedIndex: index,
      count: updatedCount,
    })
  };

  render() {
    const { selectedIndex, count, isLoading } = this.state;

    return (
      <div className="App">
        { isLoading
        ? <img className="loader" src={Loader} width="60" alt="Loader"/>
        : <div className="container">
            <Hero />
            <header className="codrops-header">
              <h1 className="codrops-title">Oksana<div>Semonenko</div></h1>
              <Navigation />
            </header>
            <SliderContainer
              stacks={stacksData}
              selectedIndex={selectedIndex}
              count={count}
              onChange={this.onChange}
            />
          </div>
        }
      </div>
    );
  }
}

