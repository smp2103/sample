<h2 style="color: #23d9d0;">@smp/features</h2>

#### 화면단 UI 패키지
##### props만 잘 전달해주면 정상적으로 작동하게 설계됨.
##### @smp/ui 의 UI 컴포넌트 + Layout component(@mobily/stacks)로 구성
##### RN / Next / React 어디서든 재사용 가능
<br/>

<h2 style="color: #23d9d0;">폴더 구조</h2>

```                                  
src/                                       # 소스 파일들이 위치한 메인 폴더
┣ modal/                                   # modal 관련한 UI 및 로직
┗ order/                                   # order (주문화면) 관련한 Container / View
   ┣ controller/                           # features단의 비즈니스로직 컨트롤러
   ┃     ┗ hooks/                          # controller 에서 사용할 로직 기능 단위
   ┃          ┣ categories/                # category 관련 로직
   ┃          ┣ coupons/                   # coupon 관련 로직
   ┃          ┣ order-product/             # product 주문 관련 로직
   ┃          ┗ selected-product/          # 선택한 상품 관련 로직
   ┗ views/                                # view를 관리하는 디렉토리
         ┣ order-category/                 # 카테고리 영역의 View
         ┣ order-detail/                   # 주문내역 영역의 View
         ┗ order-products/                 # 상품내역 영역의 View
```



----

<h4>박상민</h4>

📞 Phone : 010-4587-2103  
✉️ E-mail : smp2103@yonsei.ac.kr