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
- URL: `/api/posts?category=${}&sort=${}&skip=${}`
- 📌 query string 변수명<br>
  - category = electricity, traffic, airCondition, resource
  - sort = likes, latest

### ✔ 챌린지 1개 받아오기
- Method: GET
- URL: `/api/challen/post/:postId`

### ✔ 챌린지 등록
- Method : POST
- URL : `/api/challen/posts`
- 📌 Json Data :
  ```json
  {
      "writer": "사용자 id",
      "category": "카테고리 명",
      "fileUrl": "인증사진 url주소",
      "title": "제목",
      "plan": "실천 방안",
      "reducedCarbon" : "탄소저감량", // 선택
      "content": "내용",
  }
  ```
- 실천방안

| 카테고리 | 실천방안 | request 값 |
| :---: | :--- | :---: | 
|**자원**| 종이타월 대신 개인 손수건 사용하기 | hanky | 
|| 종이컵 대신 개인컵 사용하기 | tumbler
|| 비닐봉투 대신 장바구니 사용하기 | basket
|| 재활용이 가능한 유리병, 캔 등 분리배출하기 | recycle
|| 물을 받아서 설거지 하기 | water |
|**전자기기**|TV 사용 시간 줄이기|tv
||세탁기 사용 시간 줄이기|washer
||컴퓨터 사용 시간 줄이기|computer
||전기밥솥 보온 시간 줄이기|cooker
||전자레인지 사용 시간 줄이기|microwave
|**교통**|가까운 거리는 도보나 자전거 이용|bicycle
||승용차 대신 대중교통 이용|publicTransport
|**냉난방**|에어컨 사용 시간 줄이기|aircon
||선풍기 사용 시간 줄이기|fan
||보일러 사용 시간 줄이기|Boiler
||전기장판 사용 시간 줄이기|electricBlanket
- [참조](http://www.kcen.kr/USR_main2016.jsp??=life/life04)

### 업로드 이미지
- Method : POST
- URL : `/api/posts/upload`

### ✔ 탄소저감량 계산기
실천 방안, 카테고리, 절약 시간(분)을 이용하여 탄소저감량(mg)을 응답해주는 api<br>
카테고리가 traffic, resource라면 sparedTime을 입력하지 않아도 된다.
- Method : GET
- URL : `/api/calculator?category=${}&plan=${}&sparedTime${}`
- 📌 query string 변수명<br>
  - category = electricity, traffic, airCondition, resource
  - plan = [참고](#-챌린지-등록)
  - sparedTime = 절약 시간(분 단위)

### ✔ 댓글 등록
- Method : POST
- URL : `/api/comments`
- 📌 Json Data :
  ```json
  {   
      "postId"
      "writer": "사용자 id",
      "content": "내용"
  }
  ```
  
 ### ✔ 댓글 삭제
- Method : DELETE
- URL : `/api/comments/commentId`

### ✔ 좋아요 등록
- Method : POST
- URL : `/api/like`
- 📌 Json Data :
  ```json
  {
      "postId": "post id",
  }
  ```

### ✔ 좋아요 취소
- Method : DELETE
- URL : `/api/like?postId=${}`

## 랭킹 페이지

### ✔ 랭킹페이지 눌렀을 때
- Method: GET
- URL: `/api/ranking?monthlyCategory=${}&dailyCategory=${}`
- 📌 query string 변수명<br>
  - category = all(전체), electricity, traffic, airCondition, resource<br>

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
