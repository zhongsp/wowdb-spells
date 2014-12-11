;$(function() {
  var link = 'http://www.battlenet.com.cn/api/wow/spell/',
    imglink = 'http://wow.zamimg.com/images/wow/icons/tiny/',
    // tmpl = 
    //   '<tr>' + 
    //     '<td>{id}</td>' + 
    //     '<td>{name}</td>' + 
    //     '<td><img src="http://wow.zamimg.com/images/wow/icons/tiny/{icon}.gif" />http://wow.zamimg.com/images/wow/icons/tiny/{icon}.gif</td>' + 
    //     '<td>{description}</td>' + 
    //     '<td>{castTime}</td>' + 
    //   '</tr>',
    tmpl = '<div class="panel panel-default">' + 
              '<div class="panel-body">' + 
                '法术id: {id} <br>' + 
                '法术名称: {name} <br>' + 
                '法术图标: <img src="http://wow.zamimg.com/images/wow/icons/tiny/{icon}.gif" />http://wow.zamimg.com/images/wow/icons/tiny/{icon}.gif <br>' + 
                '法术信息: {description}' + 
                '施放时间: {castTime}' + 
              '</div>' + 
            '</div>';
    $result = $('#result'),
    substitute = function(str, sub) {
      return str.replace(/\{(.+?)\}/g, function($0, $1) {
        return $1 in sub ? sub[$1] : $0;
      });
    };

  $('#search').on('click', function() {
    var ids = $('#spellids').val().split(/\s|,/);

    $.each(ids, function(_, id) {
      if (id != '') {
        $.ajax({
          url: link + id,
          dataType: 'jsonp',
          jsonp: 'jsonp',
          async: true,
          success: function(response) {
            $result.append(substitute(tmpl, response));
          }
        });
      }
    })
  });

});