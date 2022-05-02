// スクロールした際の動きを関数でまとめる
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

$(function() {
    //page_topをクリックするとページのトップへ移動
    $('#page_top').click(function () {
      $('body, html').animate({ scrollTop: 0 }, 500);
      return false;
    });
  });
  
//logoの表示
$(window).on('load',function(){
    //ローディング画面を2秒（2000ms）待機してからフェードアウト
    $("#splash").delay(2000).fadeOut('slow');
    //ロゴを1.5秒（1500ms）待機してからフェードアウト
    $("#splash_logo").delay(1500).fadeOut('slow');
  });

