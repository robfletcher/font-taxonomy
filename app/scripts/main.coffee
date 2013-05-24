window.WebFontConfig =
  google:
    families: []
  custom:
    families: []
    urls: []
  fontactive: (fontFamily, fontDescription) ->
    $("##{Handlebars.helpers.normalize(fontFamily)}").addClass('wf-active').find('.anatomy').bigtext
      childSelector: '> p'

colorizeCharacterSet = ->
  $section = $ @
  color = $section.find('.anatomy').css('color')
  text = $section.find('.anatomy p').text()
  codes = (text.charCodeAt(index) for index in [0...text.length])
  for code in codes
    if code <= 96
      char = code - 64
      selector = '.uppercase'
    else
      char = code - 96
      selector = '.lowercase'
    $section.find(".character-set #{selector} .char#{char}").css('color', color)

createContent = (data) ->
  $('.container').append Templates.fonts(data)

  $('.character-set .uppercase, .character-set .lowercase').lettering()

  $('.font').each colorizeCharacterSet

$ ->
  createContent fonts

  for family in fonts.families
    for font in family.fonts
      for provider of font.webfont.config
        WebFontConfig[provider].families.push font.webfont.config[provider].family if font.webfont.config[provider].family?
        WebFontConfig[provider].urls.push font.webfont.config[provider].url if font.webfont.config[provider].url?

  $('html').addClass('content-ready')

  wf = document.createElement("script")
  wf.src = ((if "https:" is document.location.protocol then "https" else "http")) + "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js"
  wf.async = "true"
  s = document.getElementsByTagName("script")[0]
  s.parentNode.insertBefore wf, s
