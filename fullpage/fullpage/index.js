$('.wrap').fullpage({
    anchors:['1page','2page','3page','4page'],
    navigation:true
});

$('.wrap .section:nth-child(2) li:nth-child(1) a ,.wrap .section:nth-child(2) li:nth-child(2) a ').colorbox({
    width:'98%',
    height:'90%'
});

$('.wrap .section:nth-child(2) li:nth-child(3) a').colorbox({
    iframe:true,
    width:'98%',
    height:'98%'
});
