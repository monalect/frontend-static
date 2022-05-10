import {Button} from '/design/components'
import ReCAPTCHA from 'react-google-recaptcha';

export default function TextButtonForm({
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
		setCaptcha,
		pattern,
		captchaRef,
		onSubmit,
		buttonType="primary",
		buttonText="Button"
})
{
	return (
		<form className="mn-c-text-input mn-c-text-button-form">
			<label htmlFor={name}>
				<div> 
					<span className="mn-c-label">{ label }</span>
					{ required ? (<span className="mn-is-optional">(optional)</span>) : ""}
				</div>
			</label>
			<div className="mn-c-text-button">
				<input 
						type= { type }
						id = { id }  
						name = { name } 
						placeholder = { placeholder }
						value={value}
						onChange={(e) => onChange(e.target.value)}
						required={ required }
						minLength={minlength}
						maxLength={maxlength}
						pattern={pattern}
					/>
				<Button buttonType={buttonType} onClick={onSubmit}>
				{buttonText}</Button>
			</div>
			<div className="mn-c-helper-text">{children}</div>
			<ReCAPTCHA
				size="invisible"
				sitekey="6LfDItgfAAAAAL9Yg1cuVDAWo9225dOlfCPoqzgf"
				ref={captchaRef}
			/>
		</form>
	);
}

//Test Key: 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
//Actual Key: 6LfDItgfAAAAAL9Yg1cuVDAWo9225dOlfCPoqzgf

