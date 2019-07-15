import React, { Component } from 'react';
import './EditableBox.css';

class EditableBox extends Component {
    
  constructor(props) {
    super();
    this.ESCAPE_KEY = 27;
    this.ENTER_KEY = 13;
    this.state = {
      editText: props.name,
      editing: false
    };
  }

  handleEdit (e) {
    return (e) => this.setState({
      editing: !this.state.editing
    });
  }  
  
  handleChange (e) {
    this.setState({editText: e.target.value});
  }
  
  handleSubmit (e) {
	var val = this.state.editText.trim();
	if (val) {
		this.setState({
          editText: val,
          editing: false,
        });
	  } 
	}
  
  handleKeyDown (e) {
	// if (event.which === this.ESCAPE_KEY) {
	//     this.setState({
 //          editText: this.props.name,
 //          editing: false
 //        });
	// } else if (event.which === this.ENTER_KEY) {
	// 	this.handleSubmit(e);
	// }
  }
 
  render() {
    return (
      <div className="editableBox">
        Your chapter's summary here...
      </div>      
    );
  }
}

/*
Replace Chapter Summary area here 

<label className={this.state.editing ? 'hidden' : ''} 
  onDoubleClick={this.handleEdit()}>{this.state.editText}
</label>
<input 
  className={this.state.editing ? '' : 'hidden'} 
  value={this.state.editText} 
  onChange={this.handleChange.bind(this)} 
  onBlur={this.handleSubmit.bind(this)}
  onKeyDown={this.handleKeyDown.bind(this)}
/>
*/

export default EditableBox;