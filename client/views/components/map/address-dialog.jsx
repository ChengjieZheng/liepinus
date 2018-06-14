import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import CompanyAddress from '../map/company-address'

class AddressDialog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		}
		this.handleClickOpen = this.handleClickOpen.bind(this)
	}

   handleClickOpen() {
		// const that = this;
		// function pms1() {
		// 	return new Promise((resolve, reject) => {
		this.setState({ open: true });
		// 		resolve('true');
		// 	});
		// }
		// pms1().then((data) => {
		// 	console.log(data)
		// 	document.getElementById('abc').style.visibility = 'visible'
		// })
	}

  handleClose = () => {
    this.setState({ open: false }, () => {
			console.log('call handleclickClose state', this.state.open);
		});
		document.getElementById('abc').style.visibility = 'hidden'
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>北美猎聘地址: </Button>
        <Dialog
					id="abc"
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">北美猎聘地址:</DialogTitle>
          <DialogContent>
						<CompanyAddress />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AddressDialog
