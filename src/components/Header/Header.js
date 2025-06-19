import classes from './Header.module.css';

const Header = () => (
	<header className={classes.Header}>
		<h1 className={classes.HeaderText}>
			<span className={classes.HeaderTextTitle}>Curriculum Vitae </span>
			<span className={classes.HeaderTextSubtitle}>José Carlos Román Rubio </span>
		</h1>
	</header>
);

export default Header;