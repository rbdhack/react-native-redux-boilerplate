import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
class Test extends Component {
  static displayName = 'Test';

  constructor(props) {
    super(props);

    this.state = { text: 'Not pressed1'};
  }

  static getDataBindings(getters) {
    return {};
  }

  static propTypes = {
    isPressed: PropTypes.bool.isRequired,
  };

  static defaultProps = {};

  componentDidUpdate() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  pressText = () => {
    const { togglePressed } = this.props;
    this.setState({text: 'pressed'});
    togglePressed(true);
  };

  render() {
    const { text } = this.state;
    const { isPressed } = this.props;
    const { pressText } = this;
    return <Text onPress={pressText}>{text} {isPressed ? "true" : "false"}</Text>;
  }
}

export default Test;
