import React from 'react';
import styles from './style';
import { TextField, withStyles } from '@material-ui/core';
import Send from '@material-ui/icons/Send';


class ChatTextBoxComponent extends React.Component{
    constructor(){
        super();
        this.state={
            chatText:""
        };
    }


    render(){
        const {classes}= this.props;
        return(
            <div className={classes.chatTextBoxContainer}>
              <TextField placeholder='Type your message..'
                  onKeyUp={(e)=> this.userTyping(e)}
                  id='chatTextBox'
                  className={classes.chatTextBox}
                  onFocus={this.userClickedInput}>
              </TextField>
              <Send onClick={this.submitMessage} className={classes.sendBtn}></Send>

            </div>

        );
         }

         userTyping=(e) =>{ e.keyCode === 13 ? this.submitMessage() :this.setState({chatText:e.target.value});
         }
         messageValid =(txt) => txt && txt.replace(/\s/g,'').length;
         submitMessage = ()=> {
             if(this.messageValid(this.state.chatText)){
                 this.props.submitMessageFn(this.state.chatText);
                 document.getElementById('chatTextBox').value='';
             }
         }
         userClickedInput=()=>this.props.userClickedInputFn();
}


export default withStyles(styles)(ChatTextBoxComponent);
