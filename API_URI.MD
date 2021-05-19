# challen-challen API 명세

## 메인 페이지
### ✔ 메인 페이지에 들어갈 때 
- Method: GET
- URL : `/api/challen`

## 챌린지 페이지
### ✔ 챌린지 바로가기 버튼을 눌렀을 때
- Method: GET
- URL: `/api/posts?categoty=${}?sort=${}`
- 📌 query string 변수명<br>
category = electricity, traffic, airCondition, resource
sort = likes, latest

- 📌 예시 (처음 page에 들어갔을 때)<br>
`/api/posts?category=${electricity}?sort=${likes}`
<br>

### ✔ 챌린지 등록
- Method : POST
- URL : `/api/posts`
- 📌 Form Data :
  ```json
  {
      "writer": "사용자 id",
      "category": "카테고리 명",
      "fileUrl": "인증사진 url주소",
      "title": "제목",
      "plan": "실행 방안",
      "content": "내용"
  }
  ```

### ✔ 댓글 등록
- Method : POST
- URL : `/api/comment/:postid`
- 📌 Form Data :
  ```json
  {
      "writer": "사용자 id",
      "content": "내용"
  }
  ```

### ✔ 좋아요 등록
- Method : POST
- URL : `/api/like/:postId`

### ✔ 좋아요 취소
- Method : DELETE
- URL : `/api/like/:postId`

## 랭킹 페이지

### ✔ 랭킹페이지 눌렀을 때
- Method: GET
- URL: `/api/ranking/:userId?category=${}?sort=${}`
- 📌 query string 변수명<br>
category = all(전체), electricity, traffic, airCondition, resource<br>
sort = daily, monthly

🤷 ♀️ 랭킹 카테고리 나누기(ui 고민하기)<br>
🤷 ♀️ 배지 개수 고민하기


## 나의 페이지
### ✔ user 정보 가져오기
- Method : GET
- URL : `/api/mypage/:userId`
