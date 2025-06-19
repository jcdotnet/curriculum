import Button from '../Button/Button';

export default function Modal({ ref, children, onReset }) {
	return (
		<dialog ref={ref} onClose={onReset}>
			{children}
			<form method="dialog" onSubmit={onReset}>
        <Button>CLOSE</Button>
      </form>
		</dialog>
	)
}