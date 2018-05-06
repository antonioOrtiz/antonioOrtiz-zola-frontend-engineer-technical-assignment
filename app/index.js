import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './scss/app.scss';

function Index() {
  return (
    <form>
      <div className="row">
        <div className="six columns">
          <label for="exampleEmailInput">Your email</label>
          <input className="u-full-width" type="email" placeholder="test@mailbox.com" id="exampleEmailInput" />
        </div>
        <div className="six columns">
          <label for="exampleRecipientInput">Reason for contacting</label>
          <select className="u-full-width" id="exampleRecipientInput">
            <option value="Option 1">Questions</option>
            <option value="Option 2">Admiration</option>
            <option value="Option 3">Can I get your number?</option>
          </select>
        </div>
      </div>
      <label for="exampleMessage">Message</label>
      <textarea className="u-full-width" placeholder="Hi Dave …" id="exampleMessage" />
      <label className="example-send-yourself-copy">
        <input type="checkbox" />
        <span className="label-body">Send a copy to yourself</span>
      </label>
      <input className="button-primary" type="submit" value="Submit" />
    </form>
  );
}

ReactDom.render(<Index />, document.getElementById('app'));
