import {
	TextButtonForm,
} from "/components/"

import {useState, useRef} from "react";

export default function NotifyMe()
{
	const [captcha, setCaptcha] = useState("")
	const [email, setEmail] = useState("")
	const [success, setSuccess] = useState("")
	const [show, setShow] = useState("mn-is-fadeout")
	const captchaRef = useRef(null)

	function onSubmit() {
		captchaRef.current.execute();
		const data = new FormData()
		data.append("email", email)
		data.append("captcha", captcha)

		fetch('https://api.monalect.com/email', {
			method: 'post',
			body: data})
		.then(response => { 
			if (response.status == 200)
			{ 
				return response.json(); 
			}
			else { 
				setSuccess("Something went wrong.");
				setShow("mn-is-fadein")
			}
		})
		.then(data => {
			if (data.success == true)
			{
				setSuccess("Thank you.")
				setShow("mn-is-fadein")
			}
			else { 
				setSuccess("Something went wrong.");
				setShow("mn-is-fadein")
			}
		})
	}
	return (
		<>
			<TextButtonForm buttonType="primary"
					buttonText="Stay Notified"
					name="email"
					placeholder="Email Address"
					setCaptcha={setCaptcha}
					onSubmit={onSubmit}
					onChange={setEmail}
					captchaRef={captchaRef}
				/> 
			<p id="success_message" class={show}>{success}</p>
		</>
	)
}
	
