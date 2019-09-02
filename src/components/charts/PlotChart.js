import React, { Component } from 'react';
import ShowcaseButton from '../buttons/showcase-button';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  MarkSeries
} from 'react-vis';

function generateData() {
  return [...new Array(10)].map(row => ({
    x: Math.random() * 5,
    y: Math.random() * 10
  }));
}

const MODE = ['noWobble', 'gentle', 'wobbly', 'stiff'];

export default class PlotChart extends Component {
  state = {
    data: generateData(),
    modeIndex: 0
  };

  updateModeIndex = increment => () => {
    const newIndex = this.state.modeIndex + (increment ? 1 : -1);
    const modeIndex =
      newIndex < 0 ? MODE.length - 1 : newIndex >= MODE.length ? 0 : newIndex;
    this.setState({
      modeIndex
    });
  };

  render() {
    const {modeIndex, data} = this.state;
    return (
      <div className="centered-and-flexed text-center">

        <XYPlot width={650} height={275}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <MarkSeries animation={MODE[modeIndex]} data={data} />
        </XYPlot>
        <ShowcaseButton
          onClick={() => this.setState({data: generateData()})}
          buttonContent={'UPDATE DATA'}
        />
      </div>
    );
  }
}