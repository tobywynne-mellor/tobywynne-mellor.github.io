$(document).ready(function () {


    var feed = new Instafeed({
        get: 'user',
        accessToken: '195697929.1677ed0.d876b5ec959648de8137b14601591839',
        userId: '195697929',
        limit: 2,
        resolution: "low_resolution",
        template: '<img class="instaPic" src="{{image}}" alt="instafeed_img"/>',
        after: function () {
            $("img:eq(1)").addClass('instapicone');
            $("img:eq(2)").addClass('instapictwo');
        }
        // template: '<div class="card"><img class="card-img instafeed_img" src="{{image}}" alt="Card image"></div>',
        // after: function () {
        //     $('.card').each(function(i){
        //         setTimeout(function(){
        //             $('.card').eq(i).addClass('is-showing2');
        //         },250*(i + 1));
        //     });
        // }
    });
    feed.run();

});
