# typescript로 만들어보는 TodoList입니다!

    Typescript로 만들어보는 TodoList 애플리케이션입니다!
    모바일 반응형(width : 600px) 으로도 적용시켜보았습니다!

### 배포 링크

    https://todolist-75cfc.web.app/

### test용 계정

    ID : kim@google.com
    password : qwe123

<br/>

# 기능설명

## 메인 페이지

<img src="./readmeImg/main_signin.png" width="450px" height="300px"  alt="signin_page"></img>

<br/>
메인페이지에서는 로그인을 할 수 있습니다.<br/>
계정이 없으면 회원가입 버튼을 눌러 회원가입을 합니다. 이메일, 비밀번호만 입력하면 됩니다.<br/>
로그인, 회원가입은 Firebase Auth 빌드를 기반으로 만들었습니다. <br/>

<br/>

<img src="./readmeImg/mypage.png" width="450px" height="300px"  alt="mypage"></img>

<br/>
로그인 하면 위와 같은 마이페이지로 이동합니다.<br/>
오픈 api서비스로 현재 날씨 정보를 받아오고 지금까지 작성한 todolist 개수를 알려줍니다.<br/>
로그아웃 버튼을 누르면 로그인 페이지로 돌아갑니다.

---

## TodayList 페이지

<img src="./readmeImg/todaylist.gif" width="450px" height="300px"  alt="todaylist"></img>

TodayList 페이지에서 오늘 할일을 작성합니다.<br/>
list 추가, 수정, 삭제 기능이 있습니다.<br/>
확정하기 버튼을 누르면 오늘 할 일이 확정되고 로컬 스토리지에 저장됩니다.

<br/>

<img src="./readmeImg/todaylist_to.gif" width="450px" height="300px"  alt="todaylist2"></img>

<br/>

---

## TodayEnd 페이지

<img src="./readmeImg/todayend.gif" width="450px" height="300px"  alt="todayend"></img>

TodayEnd 페이지에서 오늘 한 일을 체크하고, 메모를 남깁니다.<br/>
완료 버튼을 누르면 데이터가 FireStore 데이터베이스에 저장됩니다.<br/>
로그인을 해야 해당 기능을 사용할 수 있습니다. <br/>
성공적으로 저장되면 로컬 스토리지 데이터가 삭제되고 페이지가 새로고침됩니다.

<br/>

---

## History 페이지

<img src="./readmeImg/history.gif" width="450px" height="300px"  alt="history"></img>

History 페이지에서 이전에 남긴 todolist와 메모를 확인할 수 있습니다.<br/>
해당 날짜에 남긴 데이터가 있으면 아이콘이 생성됩니다.<br/>
아이콘을 누르면 데이터를 확인할 수 있습니다.

<br/>

---

## 기타

<img src="./readmeImg/nav_and_header.gif" width="450px" height="300px"  alt="nav_and_header"></img>

Navbar를 통해서 다른페이지로 이동할 수 있습니다.<br/>
Header 오른쪽의 버튼을 누르면 미니 달력을 볼 수 있습니다.<br/>

|                                              메인페이지                                               |                                             마이페이지                                              |                                               todolist                                                |
| :---------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------: |
|     <img src="./readmeImg/mobile_main.png" width="250px" height="440px"  alt="mobile_main"></img>     |  <img src="./readmeImg/mobile_mypage.png" width="250px" height="440px"  alt="mobile_mypage"></img>  |   <img src="./readmeImg/mobile_todolist.png" width="250px" height="440px"  alt="mobile_main"></img>   |
|                                               정산하기                                                |                                               history                                               |                                            이전데이터보기                                             |
|                                                  :-:                                                  |                                                 :-:                                                 |                                                  :-:                                                  |
| <img src="./readmeImg/mobile_todayend.png" width="250px" height="440px"  alt="mobile_todayend"></img> | <img src="./readmeImg/mobile_history.png" width="250px" height="440px"  alt="mobile_history"></img> | <img src="./readmeImg/mobile_datalist.png" width="250px" height="440px"  alt="mobile_datalist"></img> |

모바일 반응형(max-width: 600px)으로도 적용시켜보았습니다.

<br/>
