$(function() {
    $('#hamburger').click(function(){
        $(this).toggleClass('active');
        $('#bgCover').toggleClass('active');
        $('#menu').toggleClass('active');
    });
  });


  $(function() {
	$('.paginationItemBox').paginathing({//親要素のclassを記述
		perPage: 8,//1ページあたりの表示件数
		//prevText:'前へ',1つ前のページへ移動するボタンのテキスト
		//nextText:'次へ',1つ次のページへ移動するボタンのテキスト
		activeClass: 'pagination-active',//現在のページ番号に任意のclassを付与できます
	})
});