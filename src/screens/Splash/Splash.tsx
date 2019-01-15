import React, { Component } from 'react';
import { SContainer, STitle, SSubtitle, SPara } from './Splash.style';
import { Bubble } from 'components';

interface IProps {
  onAppStart: () => void;
}
export default class Splash extends Component<IProps> {
  componentDidMount() {
    this.props.onAppStart();
  }

  render() {
    return (
      <SContainer>
        <Bubble />
        <STitle>Clean Slate</STitle>
        <SSubtitle>A react-native boilerplate</SSubtitle>
        <SPara>
          with TypeScript, React-Navigation, {'\n'}styled-components, Redux and
          Sagas
        </SPara>
      </SContainer>
    );
  }
}
