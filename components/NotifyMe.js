import {
	TextButtonForm,
} from "/components/"

import {useState, useRef} from "react";

import {Puff} from "react-loading-icons";

export default function NotifyMe()
{
	const [captcha, setCaptcha] = useState("")
	const [email, setEmail] = useState("")
	const [success, setSuccess] = useState("")
	const [show, setShow] = useState("mn-is-fadeout")
	const [loading, setLoading] = useState(false)
	const captchaRef = useRef(null)

	async function onSubmit() {
		const token = await captchaRef.current.executeAsync()
		const data = new FormData()

		setLoading(true)

		data.append("email", email)
		data.append("captcha", token)

		fetch('https://api.monalect.com/email', {
			method: 'post',
			body: data})
		.then(response => { 
			setLoading(false)
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

		captchaRef.current.reset()
	}

	return (
		<>
			<TextButtonForm buttonType="primary"
					buttonText="Stay Notified"
					name="email"
					placeholder="Email Address"
					setCaptcha={setCaptcha}
					captchaRef={captchaRef}
					onSubmit={onSubmit}
					onChange={setEmail}
				/> 
			{loading ? <Puff stroke="#192a61"/> : <p id="success_message" className={show}>{success}</p>}
		</>
	)
}
	
