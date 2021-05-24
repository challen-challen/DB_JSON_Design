# challen-challen API 명세

## 로그인, 로그아웃

### ✔ 네이버 로그인 버튼 눌렀을 때
-  Method : GET
-  URL : /api/naver

✔ 로그아웃 버튼 눌렀을 때
-  Method : GET
-  URL : /api/logout

## 메인 페이지
### ✔ 메인 페이지에 들어갈 때 
- Method: GET
- URL : `/api/challen`

## 챌린지 페이지
### ✔ 챌린지 피드 받아오기
- Method: GET
- URL: `/api/posts?categoty=${}&sort=${}&skip=${}`
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

### 업로드 이미지
- Method : POST
- URL : `/api/posts/upload`

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


### 개선 방향

- [ ] 개선4(문화를 어떻게 정착시킬지)
- 랭킹 자랑하기 버튼 
- 오늘 환경 운동 한 걸 인스타 스토리에 공유하기
  >> 좋아요 개수, 탄소저감량(가능하다면)
- 깃허브 잔디
지속적인 참여를 인증할 수 있는 요소를 추가하면 어떨까?
배지를 디벨롭할까?
- 프로필 사진 기능
- 탄소 저감량 측정
메인페이지에 개인 온실가스 하루 배출량 대비 하루 저감량 보여주기