function TextInput(props)
{
	return (
		<label className={styles.error}>{props.label}
			<input className="mn__text-input" type="text" name={props.name} id={props.id} placeholder={props.placeholder}/>

		</label>
	);
}

export default TextInput;
