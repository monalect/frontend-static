import {Button} from '/design/components'
import HCaptcha from '@hcaptcha/react-hcaptcha'

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
			<div class="mn-c-text-button">
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
				<Button buttonType={buttonType} onClick={onSubmit}>{buttonText}</Button>
			</div>
			<div className="mn-c-helper-text">{children}</div>
			<HCaptcha
				size="visible"
				sitekey="01af4af7-bff6-49e1-9167-cdaa93d79544"
				onVerify={
				(token, ses) => {
					captchaRef.current.execute()
					setCaptcha(token)
				}}
				ref={captchaRef}
			/>
		</form>
	);
}

