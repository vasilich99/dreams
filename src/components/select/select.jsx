import React from 'react';
import css from './select.module.scss';

export default class Select extends React.Component {
  render() {
    return (
      <div className={css.container}>
        <label className={css.title}>{this.props.title}</label>
        <select
          name={this.props.name}
          className={css.select}
          onChange={(event) => this.props.onChangeValue(event.target.value)}
        >
          <option value="USA">USA</option>
          <option value="Russian Federation">Russian Federation</option>
          <option value="Ukraine">Ukraine</option>
          <option value="Uganda">Uganda</option>
          <option value="Canada">Canada</option>
          <option value="China">China</option>
          <option value="Australia">Australia</option>
          <option value="Turkey">Turkey</option>
          <option value="UK">UK</option>
          <option value="Belarus">Belarus</option>
        </select>
      </div>
    );
  }
}