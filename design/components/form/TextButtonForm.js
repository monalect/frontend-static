import {Button} from '../'

export default function TextButtonInput({
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
		pattern,
		onSubmit,
		buttonType="primary",
		buttonText="Button"
})
{
	return (
		<form className="mn-c-text-input mn-c-text-button-form" onSubmit>
			<label htmlFor={name}>
				<div> 
					<span className="mn-c-label">{ label }</span>
					{ required ? (<span className="mn-is-optional">(optional)</span>) : ""}
				</div>
			</label>
			<div class="mn-c-text-button">
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
				<Button buttonType={buttonType}>{buttonText}</Button>
			</div>
			<div className="mn-c-helper-text">{children}</div>
		</form>
	);
}
