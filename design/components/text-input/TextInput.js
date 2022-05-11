export default function TextInput({
		children, 
		label, 
		name, 
		id, 
		type="text",
		theme="",
		size = "",
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
		<div className={`mn-c-text-input ${theme} ${size}`} >
			<label htmlFor={name}>
				<div> 
					<span class="mn-c-label">{ label }</span>
					{ required ? (<span className="mn-is-optional">(optional)</span>) : ""}
				</div>
			</label>
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
			<div className="mn-c-helper-text">{children}</div>
		</div>
	);
}
