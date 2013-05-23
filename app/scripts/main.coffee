$ ->
	$.each fonts, ->
		$section = $("##{Handlebars.helpers.normalize(@classification)}")
		$fontSection = $ Templates.font(@)

		$fontSection.find('.character-set .uppercase, .character-set .lowercase').lettering()

		$anatomy = $fontSection.find('.anatomy')
		$anatomy.css('color', @example.color)
		codes = (@example.text.charCodeAt(index) for index in [0...@example.text.length])
		for code in codes
			char = if code <= 96 then code - 64 else code - 96
			selector = if code <= 96 then '.uppercase' else '.lowercase'
			$fontSection.find(".character-set #{selector} .char#{char}").css('color', @example.color)

		$section.append $fontSection

	$('.anatomy').bigtext
		childSelector: '> p'

