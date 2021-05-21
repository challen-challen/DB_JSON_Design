# challen-challen API 명세

## 로그인

### ✔ 로그인
- Method: GET
- URL : `/api/naver`

## 메인 페이지
### ✔ 메인 페이지에 들어갈 때 
- Method: GET
- URL : `/api/challen`

## 챌린지 페이지
### ✔ 챌린지 피드 받아오기
- Method: GET
- URL: `/api/challen/posts?category=${}?sort=${}`
- 📌 query string 변수명<br>
category = electricity, traffic, airCondition, resource
sort = likes, latest

### ✔ 챌린지 1개 받아오기
- Method: GET
- URL: `/api/challen/post/:postId`

### ✔ 챌린지 등록
- Method : POST
- URL : `/api/challen/posts`
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
- URL: `/api/ranking?monthlyCategory=${}&dailyCategory=${}`
- 📌 query string 변수명<br>
category = all(전체), electricity, traffic, airCondition, resource<br>

## 나의 페이지
### ✔ user 정보 가져오기
- Method : GET
- URL : `/api/mypage/:userId`

### ✔ 마이 페이지 나의 피드 더보기를 눌렀을 때
- Method : GET
- URL : `/api/mypage/posts/:userId`


### 고민해볼 것
-  마이페이지 유저정보의 배지와 나의 뱃지는 다른것인지?
-  게시글 올릴 때 닉네임 옆에 색깔로 구분하는 것은 무엇을 기준으로 할 지?
-  postController postPost에서 카테고리 별 점수 inc하는 query 고민  
-  db 일, 월 점수 초기화 되는 거 구현
-  랭킹 페이지 정확하게 어떤 기능인지 논의
-  pagination 구현