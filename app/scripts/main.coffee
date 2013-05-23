window.WebFontConfig =
  google:
    families: []
  fontactive: (fontFamily, fontDescription) ->
    $("##{Handlebars.helpers.normalize(fontFamily)}").addClass('wf-active').find('.anatomy').bigtext
      childSelector: '> p'

$ ->
  $.each fonts, ->
    WebFontConfig.google.families.push @webfont.config

    $section = $("##{Handlebars.helpers.normalize(@classification)}")
    $fontSection = $ Templates.font(@)

    $fontSection.find('.character-set .uppercase, .character-set .lowercase').lettering()

    $fontSection.find('figure').css('font-family', @webfont.name ? @name)
    $fontSection.find('.anatomy').css('color', @example.color)
    codes = (@example.text.charCodeAt(index) for index in [0...@example.text.length])
    for code in codes
      char = if code <= 96 then code - 64 else code - 96
      selector = if code <= 96 then '.uppercase' else '.lowercase'
      $fontSection.find(".character-set #{selector} .char#{char}").css('color', @example.color)

    $section.append $fontSection

  wf = document.createElement("script")
  wf.src = ((if "https:" is document.location.protocol then "https" else "http")) + "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js"
  wf.async = "true"
  s = document.getElementsByTagName("script")[0]
  s.parentNode.insertBefore wf, s
