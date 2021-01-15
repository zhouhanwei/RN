import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';


export default class G_Text extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    const {tTitle, tSize, tColor, tWeight} = this.props;

    return (
      <Text style={{fontSize: tSize || 12, color: tColor || '#33333', fontWeight: 'normal'}}>{tTitle}</Text>
    )
  }
}
