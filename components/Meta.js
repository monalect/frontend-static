import Head  from 'next/head'

export default function Meta({title, children, description}){
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description}/>
			<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
			<link rel="icon" type="image/png" href="/meta/favicon.ico"/>
		</Head>
	)
}
