Handlebars.registerHelper 'normalize', (str) ->
	str.toLowerCase().replace(/\s+/g, '-')
