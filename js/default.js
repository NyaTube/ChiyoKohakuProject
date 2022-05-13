$(window).on('load',function(){
    // scroll_effect();

    $(window).scroll(function () {
        scroll_effect();
    });

    function scroll_effect() {
        $('.effect_fade').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight) {
                $(this).addClass('effect_scroll');
            }
        });
    }

    const videoUrl1 = "https://www.youtube.com/embed/PRNlkmDbcA8";
    const videoUrl2 = "https://www.youtube.com/embed/6oeLAo6DFHI";
    const videoUrl3 = "https://www.youtube.com/embed/GWcJei1vpqk";
    const videoUrl4 = "https://www.youtube.com/embed/Zb5EgTnkbyg";

    const srcArray = [videoUrl1,videoUrl2,videoUrl3,videoUrl4];

    const selectVideos = Math.floor(Math.random() * 5);

    $('.recommended_videos').children('iframe').attr("src",srcArray[selectVideos]);

});

// ページトップ関連のアニメ
function PageTopAnime() {
    // スクロール値を取得
    var scroll = $(window).scrollTop();
    // 250pxスクロールした場合
    if (scroll >= 250) {
        // DownMoveというクラス名を除去
        $('#page_top').removeClass('DownMove');
        // UpMoveというクラス名を追加して出現
        $('#page_top').addClass('UpMove');
    } else {
        // UpMoveというクラス名が既に付与されいた場合
        if ($('#page_top').hasClass('UpMove')) {
            // UpMoveというクラス名を除去
            $('#page_top').removeClass('UpMove');
            // DownMoveというクラス名を追加して非表示
            $('#page_top').addClass('DownMove');
        }
    }
    //UpMoveというクラス名がついている場合
    if ($('#page_top').hasClass('UpMove')) {
        // 下から10pxの位置にページリンクを指定
        $('#page_top').css('bottom', '10px');
    }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    //スクロールした際の動きの関数を呼ぶ
    PageTopAnime();
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    //スクロールした際の動きの関数を呼ぶ
    PageTopAnime();
});

$(function () {
    //page_topをクリックするとページのトップへ移動
    $('#page_top').click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
});

//logoの表示
$(window).on('load', function () {
    //ローディング画面を1.5秒（1500ms）待機してからフェードアウト
    $("#splash").delay(1500).fadeOut('slow');
    //ロゴを1.5秒（1500ms）待機してからフェードアウト
    $("#splash_logo").delay(1000).fadeOut('slow');
});

