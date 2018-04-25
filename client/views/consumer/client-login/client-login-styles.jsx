const clientLoginStyles = theme => ({
  root: {
    display: 'flex',
		flexWrap: 'wrap',
		marginTop: '20px',
  },
  margin: {
		margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
	},
	button: {
		width: '100%',
	},
	middle: {
		margin: '0 auto',
	},
	usernameHolder: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
	},
	errMsg: {
		color: 'red',
	},
})

export default clientLoginStyles
