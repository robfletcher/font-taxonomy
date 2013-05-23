$ ->
	$('.anatomy').bigtext
		childSelector: '> p'

	$('.character-set .uppercase, .character-set .lowercase').lettering()

	$('.font').each ->
		$container = $(@)
		$anatomy = $container.find('.anatomy')
		text = $anatomy.text()
		color = $anatomy.css('color')
		codes = (text.charCodeAt(index) for index in [0...text.length])
		for code in codes
			char = if code <= 96 then code - 64 else code - 96
			selector = if code <= 96 then '.uppercase' else '.lowercase'
			$container.find(".character-set #{selector} .char#{char}").css('color', color)
