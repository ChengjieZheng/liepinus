const MainStyle = theme => ({
	fullPageBackground: {
		position: 'absolute',
		display: 'flex',
    zIndex: '1',
		minHeight: '100vh',
    minWidth: '100vw',
    top: '0',
    left: '0',
    backgroundSize: 'cover',
		backgroundPosition: 'center center',
		margin: 0,
	},
	topicWord: {
		margin: 'auto',
		color: 'white',
	},
	centerWord: {
		textAlign: 'center',
		fontSize: '4em',
	},
	centerButton: {
		width: '265px',
		margin: '0 auto',
	},
	textDecoration: {
		textDecoration: 'none',
	},
	button: {
		margin: theme.spacing.unit,
		textAlign: 'center',
	},
})

export default MainStyle
