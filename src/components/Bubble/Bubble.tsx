import React from 'react';
import { Animated, Easing, ImageRequireSource } from 'react-native';
import shortid from 'shortid';
import { Images } from 'assets';
import { delay } from 'helpers';

const layers: ImageRequireSource[] = Images.bubble;

export default class Bubble extends React.Component<{}> {
  animatedValues: Animated.Value[];

  constructor(props) {
    super(props);
    this.animatedValues = [...new Array(layers.length)].map(
      _ => new Animated.Value(1),
    );
  }

  async componentDidMount() {
    for (const i in layers) {
      this.animate(this.animatedValues[i]);
      await delay(500);
    }
  }

  animate = (animatedValue: Animated.Value) => {
    const min = (Math.floor(Math.random() * 5) + 1) / 10;
    const max = 1 - (Math.floor(Math.random() * 3) + 1) / 10;
    animatedValue.setValue(min);
    const easing = Easing.linear;
    const duration = 1500;

    Animated.sequence([
      Animated.timing(animatedValue, { toValue: max, duration, easing }),
      Animated.timing(animatedValue, { toValue: min, duration, easing }),
    ]).start(() => this.animate(animatedValue));
  }

  renderImage = (
    source: ImageRequireSource,
    opacity: Animated.Value | number,
  ) => (
    <Animated.Image
      key={shortid.generate()}
      source={source}
      style={{
        resizeMode: 'cover',
        position: 'absolute',
        opacity,
      }}
    />
  )

  render() {
    return layers.map((source: ImageRequireSource, index: number) =>
      this.renderImage(source, this.animatedValues[index]),
    );
  }
}
