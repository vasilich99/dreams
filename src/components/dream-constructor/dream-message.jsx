import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './dream-constructor.module.scss';
import Title from '../title/title';
import Button from '../button/button';
import { actions } from './reducer';

function DreamMessage(props) {
  const [text, setText] = useState('');

  const validate = () => {
    if (text.length === 0) {
      // eslint-disable-next-line no-alert
      alert('Please, write your dream');
      return false;
    }
    return true;
  };

  const onClickNextStep = () => {
    try {
      validate();
      props.dispatch(actions.stepUp());
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
    }
  };

  const updateMessage = (event) => {
    const newText = event.target.value;
    if (newText.length > 140) return;
    setText(newText);
    props.dispatch(actions.setText(newText));
  };

  return (
    <>
      <Title>Write your dream</Title>
      <p className={css.text}>
        Write your 140 character dream! For example, start with “I dream of ...”
      </p>
      <div className={css.wrapper}>
        <textarea
          className={css.textarea}
          name="message"
          cols="40"
          rows="15"
          placeholder="Write your dream here..."
          value={text}
          onChange={(event) => updateMessage(event)}
        />
        <div className={css.count}>
          {text.length}
          /140
        </div>
      </div>
      <Button onClick={onClickNextStep}>Next step</Button>
    </>
  );
}

DreamMessage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default DreamMessage;
