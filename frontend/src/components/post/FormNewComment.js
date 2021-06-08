import { useState } from "react";
import { connect } from "react-redux";

import { postComment } from '../../redux/actions';

const FormNewComment = ({ id, path, postComment }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();

    const comment = {
      name,
      email,
      body
    }
    postComment(path, id, comment);
    e.target.reset();
  }

  return (
    <form
      action="#"
      className="uk-comment-form uk-margin-medium-top"
      onSubmit={(e) => handlerSubmit(e)}
    >
      <fieldset className="uk-fieldset">
        <legend className="uk-legend">Add Comment</legend>
        <div className="uk-margin">
          <input
            className="uk-input"
            type="text"
            placeholder="Name"
            required
            onInput={e => setName(e.target.value)}
          />
        </div>
        <div className="uk-margin">
          <input
            className="uk-input"
            type="email"
            placeholder="Email"
            required
            onInput={e => setEmail(e.target.value)}
          />
        </div>
        <div className="uk-margin">
          <textarea
            className="uk-textarea"
            rows="5"
            placeholder="Comment"
            required
            onInput={e => setBody(e.target.value)}
          ></textarea>
        </div>
        <div className="uk-margin">
          <button className="uk-button uk-button-primary" type="submit">
            Post Comment
          </button>
        </div>
      </fieldset>
    </form>
  )
}

export default connect(null, { postComment })(FormNewComment);
