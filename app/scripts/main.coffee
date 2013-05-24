window.WebFontConfig =
  google:
    families: []
  custom:
    families: []
    urls: []
  fontactive: (fontFamily, fontDescription) ->
    $("##{Handlebars.helpers.normalize(fontFamily)}").addClass('wf-active').find('.anatomy').bigtext
      childSelector: '> p'

createSection = (font) ->
  $section = $("##{Handlebars.helpers.normalize(font.classification)}")
  $fontSection = $ Templates.font(font)

  $fontSection.find('.character-set .uppercase, .character-set .lowercase').lettering()

  $fontSection.find('figure').css
    'font-family': font.webfont.name ? font.name
    'font-weight': font.example.weight
  $fontSection.find('.anatomy').css('color', font.example.color)
  codes = (font.example.text.charCodeAt(index) for index in [0...font.example.text.length])
  for code in codes
    char = if code <= 96 then code - 64 else code - 96
    selector = if code <= 96 then '.uppercase' else '.lowercase'
    $fontSection.find(".character-set #{selector} .char#{char}").css('color', font.example.color)

  $section.append $fontSection

createNav = (font) ->
  $parent = $(".font-nav a[href='##{Handlebars.helpers.normalize(font.classification)}']").parent().next('ol')
  $item = $ Templates.nav(font)
  $item.find('a').css('font-family', font.webfont.name ? font.name)
  $parent.append $item

$ ->
  $.each fonts, ->
    for provider of @webfont.config
      WebFontConfig[provider].families.push @webfont.config[provider].family if @webfont.config[provider].family?
      WebFontConfig[provider].urls.push @webfont.config[provider].url if @webfont.config[provider].url?
    createSection @
    createNav @
    $('html').addClass('content-ready')

  wf = document.createElement("script")
  wf.src = ((if "https:" is document.location.protocol then "https" else "http")) + "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js"
  wf.async = "true"
  s = document.getElementsByTagName("script")[0]
  s.parentNode.insertBefore wf, s
