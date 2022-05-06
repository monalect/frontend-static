export default function TextInput({
		children, 
		label, 
		name, 
		id, 
		type="text",
		placeholder, 
		minlength,
		maxlength,
		required=false,
		value,
		onChange,
		pattern	
})
{
	return (
		<label className="mn-c-text-input">
			<div> 
				{ label } 
				{ !required ? (<span className="mn-is-optional">(optional)</span>) : ""}
			</div>
			<input 
				type= { type }
				id = { id }  
				name = { name } 
				placeholder = { placeholder }
				value={value}
				onChange={onChange}
				required={ required }
				minLength={minlength}
				maxLength={maxlength}
				pattern={pattern}
			/>
			<span>{children}</span>
		</label>
	);
}
