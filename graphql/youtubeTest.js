//var request = require("request");
const Youtube = require("youtube-node");
const youtube = new Youtube();

youtube.setKey("AIzaSyC6J5Ci4n3fruKwX1UtaEt6bLD2Uas2Zn0"); // 유튜브 API 키 입력

var word = "어몽어스"; // 검색어 지정
var limit = 5; // 출력 갯수 limit 50개

//// 검색 옵션 시작
youtube.addParam("type", "video"); // 타입 지정
//youtube.addParam("order", "rating"); // 평점 순으로 정렬
//youtube.addParam("videoLicense", "creativeCommon"); // 크리에이티브 커먼즈 아이템만 불러옴
youtube.addParam("videoCategoryId", "20"); // 게임 카테고리만 불러옴
youtube.addParam("videoDimension", "2d"); // 2D 동영상만 검색하도록
youtube.addParam("regionCode", "KR"); //
//youtube.addParam("videoEmbeddable", "true"); // 웹페이지로 퍼갈 수 있는 동영상만 포함하도록
//// 검색 옵션 끝
let games = [];
youtube.search(word, limit, { pageToken: "" }, function (err, result) {
  // 검색 실행
  if (err) {
    return;
  } // 에러일 경우 에러공지하고 빠져나감

  // console.log(JSON.stringify(result, null, 2)); // 받아온 전체 리스트 출력

  const items = result["items"]; // 결과 중 items 항목만 가져옴
  const nextpageToken = result["nextPageToken"]; // 결과 중 nextpageToken 항목만 가져옴
  for (let i in items) {
    const it = items[i];
    const title = it["snippet"]["title"];
    const date = it["snippet"]["publishedAt"];
    const thumbnail = it["snippet"]["thumbnails"]["default"]["url"];
    const video_id = it["id"]["videoId"];
    const channelTitle = it["snippet"]["channelTitle"];
    const channelId = it["snippet"]["channelId"];
    const url = "https://www.youtube.com/watch?v=" + video_id;
    const apiResult = {
        title,
        date,
        thumbnail,
        video_id,
        channelTitle: channelTitle + "/" + channelId,
        url
    }
    console.log(apiResult);
    games.push(apiResult);
}
console.log(items.length);
console.log(nextpageToken);
console.log(games);
});



// youtube.videos();

export default games;