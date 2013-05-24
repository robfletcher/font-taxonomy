Handlebars.registerHelper 'normalize', (str) ->
	str.toLowerCase().replace(/\W+/g, '-')
