<h2 style="color: #23d9d0;">@smp/web</h2>

#### Nextjs앱
##### features 에서 화면단을 가져와 렌더링합니다.
<br/>

<h2 style="color: #23d9d0;">화면</h2>

#### http://localhost:3000/order 에 있습니다.

<h2 style="color: #23d9d0;">폴더 구조</h2>

```                                  
src/                                      
   ┗ app/                                   # app 라우터
   ┗ order/                                 # /order 라우트
   ┃   ┣ (controller)/                      # app단의 비즈니스로직 컨트롤러
   ┃   ┃      ┗ hooks/                      # controller 에서 사용할 로직 기능 단위
   ┃   ┃          ┗ control-modal/          # modal control 하는 hook
   ┃   ┃          ┗ fetch-data/             # mock data fetch hook
   ┃   ┣ loading.tsx                        # loading Suspense component
   ┃   ┗ page.tsx                           # @smp/features 의 container를 렌더
   ┣ page.tsx                               # 메인페이지
   ┗ layout.tsx                             # Root Layout
   ┣ mock/                                  # mock 데이터 (제공받은 파일)
   ┗ modal/                                 # modal 구현을 위한 react-native-modalfy
```

----

<h4>박상민</h4>

📞 Phone : 010-4587-2103  
✉️ E-mail : smp2103@yonsei.ac.kr
