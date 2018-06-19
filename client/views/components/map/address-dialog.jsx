import React from 'react';
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import CompanyAddress from '../map/company-address'


const styles = {
	mapSize: {
		width: '600px',
		hight: '550px',
	},
}

class AddressDialog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		}
		this.handleClickOpen = this.handleClickOpen.bind(this)
	}

   handleClickOpen() {
		this.setState({ open: true });
	}

  handleClose = () => {
    this.setState({ open: false }, () => {
			console.log('call handleclickClose state', this.state.open);
		});
		document.getElementById('abc').style.visibility = 'hidden'
  };

  render() {
		const { classes } = this.props
    return (
      <div>
        <Button onClick={this.handleClickOpen}>北美猎聘地址: </Button>
        <Dialog
					id="abc"
          open={this.state.open}
          onClose={this.handleClose}
					aria-labelledby="responsive-dialog-title"
        >
					<div className={classes.mapSize}>
						<DialogTitle id="responsive-dialog-title">北美猎聘地址:</DialogTitle>
						<DialogContent>
							<CompanyAddress />
						</DialogContent>
						<DialogActions>
							<Button onClick={this.handleClose} color="primary" autoFocus>
								OK
							</Button>
						</DialogActions>
					</div>

        </Dialog>
      </div>
    );
  }
}

AddressDialog.protoTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AddressDialog)
