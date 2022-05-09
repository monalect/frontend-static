import {
	FiEye,
	FiEyeOff
} from 'react-icons/fi'

import { useState } from 'react';

export default function TextInput({
		children, 
		label, 
		name="password", 
		id, 
		placeholder="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{12,}", 
		required=false,
		value,
		pattern,
		onChange
})
{
	const [show, setShow] = useState(true);
	return (
		<div className="mn-c-text-input mn-is-password">
			<label htmlFor={name}>
					<span className="mn-c-label">{ label }</span>
			</label>
			<div className="mn-c-input-box">
				<input 
					type = {show ? "password" : "text"}
					id = { id }  
					name = { name } 
					placeholder = { placeholder }
					required={ required }
					minLength={12}
					pattern={pattern} 
					onChange={onChange}
					value={value}
				/>
				<span 
					className="mn-c-show-password" 
					aria-label="Toggle Password Visibility"
					onClick={() => setShow(!show)}
				> 
					<FiEye className={`mn-c-icon-eye ${show && "mn-is-hidden"}`}/>
					<FiEyeOff className={`mn-c-icon-eye ${!show && "mn-is-hidden"}`}/>
				</span>
			</div>
			<div className="mn-c-helper-text">{children}</div>
		</div>
	);
}
