const fetch = require('node-fetch')

exports.handler = async function (event, context) {
	const { resource } = event.queryStringParameters

	let url =
		'https://hachyderm.io/.well-known/webfinger?resource=acct:mraichelson@hachyderm.io'

	if (resource.includes('games')) {
		url =
			'https://tabletop.social/.well-known/webfinger?resource=acct:mraichelson@tabletop.social'
	}

	const request = await fetch(url)
	const response = await request.json()

	return {
		statusCode: 200,
		body: JSON.stringify(response),
	}
}
