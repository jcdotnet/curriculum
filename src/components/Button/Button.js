import classes from './Button.module.css';

const Button = (props) => (
    <button {...props} className={[classes.Button, classes[props.btnType]].join(' ')}>
        {props.children}
    </button>
);

export default Button;