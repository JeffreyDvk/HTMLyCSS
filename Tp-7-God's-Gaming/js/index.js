/***** HEADER ANIME *****/
let i = 0
let datas = {
    header : {
        links_gradient : [
            'linear-gradient(to left,rgb(30, 30, 61),rgba(77, 194, 248, 0.4))',
            'linear-gradient(28deg, rgba(215,180,255,1) 0%, rgba(149,0,217,1) 100%)',
            'linear-gradient(28deg, rgba(255,223,180,1) 0%, rgba(217,112,0,1) 100%)',
        ]
    },
    menu : {
        menu_gradient : [ 
            'linear-gradient(45deg,rgb(87, 125, 167),rgb(2, 75, 153))',
            'linear-gradient(-135deg, rgba(210,209,230,1) 0%, rgba(145,0,255,1) 50%, rgba(88,9,121,1) 100%)',
            'linear-gradient(28deg, rgba(190,136,113,1) 0%, rgba(213,160,106,1) 50%, rgba(255,115,0,1) 100%)'
        ],
        btn_hover : ['rgba(0, 123, 255, 1)' , ' rgba(145,0,255,1)' , '#ff811a'],
        btn_active: ['rgb(8, 55, 107)' , '#511e77' , '#9c4600'],
    },
    banner : {
        active : $('.banner-active'),
        text : [ 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum reiciendis necessitatibus repellendus deleniti ex est odit perspiciatis beatae nesciunt corrupti.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum reiciendis necessitatibus repellendus deleniti ex est odit perspiciatis beatae nesciunt corrupti.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum reiciendis necessitatibus repellendus deleniti ex est odit perspiciatis beatae nesciunt corrupti.'],
        title : ["Welcome at God's Gaming store","Quelle est donc cette vision ?","nos qualités"]
    },
    faq: {
        
    }
    
}
$('.menu-open').on('click',(e)=>{
    $('.container').css('left','0px');
    $('.container').css('opacity','1');
})
$('.menu-close').on('click',(e)=>{
    $('.container').css('left','100vw');
    $('.container').css('opacity','0');
})
var tm1 = anime.timeline({
    autoplay: false,
    easing: 'easeInOutExpo'
})
.add({
    targets: '.banner-content-title',
    translateX: [0,"800"],
    duration: 500,
})
.add({
    targets: '.banner-content-desc',
    translateX: [0,"800"],
    duration: 500,
})
.add({
    targets: '.banner-content-title',
    translateX: ["800",0],
    duration: 1000,
})
.add({
    targets: '.banner-content-desc',
    translateX: ["800",0],
    duration: 1000,
})
var tm2 = anime.timeline({
    autoplay: false,
    easing: 'easeInOutExpo'
})
.add({
    targets: '.banner-content-title',
    translateX: ["800",0],
    duration: 2000,
})
.add({
    targets: '.banner-content-desc',
    translateX: ["800",0],
    duration: 1000,
})
tm2.play()
$('.banner-list-link').on('click',function(e){
    i = $(this).data('ind');
    var active = datas.banner.active
    $(active).removeClass('banner-active')
    $(this).addClass('banner-active')
    datas.banner.active = $(this)
    tm1.play()
    setTimeout(()=>{
        $('.header').css('background-image','url("img/bg'+(i+1)+'.jpg")')
        $('.selector').text('0'+(i+1))
        
        $('.container').css('background-image',datas.menu.menu_gradient[i])
        $('.banner-content-title').text(datas.banner.title[i])
        $('.banner-content-desc').text(datas.banner.text[i])
    },1000)
})
$(".list-link").mouseover(function(){  
    $(this).css('background-image',datas.header.links_gradient[i])
    $('.menu-open').css('background','none')
})

$(".links")
.mouseover(function(){  
    $(".icon", this).css('background-color',datas.menu.btn_hover[i])
})
.mouseout(function(){
    $(".icon", this).css('background-color','#1d1c1c')
})
.on('mousedown mouseup', function (e) {
    var color = (e.type === 'mousedown')  ? datas.menu.btn_active[i] : '#1d1c1c'
    $(".icon", this).css('background-color', color)
});

$('.faq-question').on("click",function(e){
    if( !$(this).hasClass('q-active') ){
        $(this).addClass('q-active')
    }else{
        $(this).removeClass('q-active')
    }
})

$('.up-toggle').on('click',function(e){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})
