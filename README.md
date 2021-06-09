# LOL 전적 검색 프로젝트 Front ( Vue.js)

## :imp: CORS 정책 해결하기

### :question: CORS란?

Cross-Origin Resource Sharing

어떤 Origin에서 작동하고 있는 웹 어플리케이션이 다른 Origin 서버로의 엑세스를 Origin 사이의 HTTP 요청에 의해 허가를 할 수 있는 체계.

### :question: Origin이란?

![image](https://user-images.githubusercontent.com/66015002/121205132-5f16dd80-c8b2-11eb-8c7a-a0dbd3174ead.png)


- 프로토콜과 호스트 그리고 포트번호까지를 나타내는 것.
- http, https 프로토콜의 기본 포트번호가 정해져있기 때문에 포트번호는 생략이 가능.

ex) 도메인: naver.com

ex) 오리진 : https://www.naver.com/PORT


### :question: 왜 CORS가 있어야 되는거야?

브라우저의 개발자 도구만 열어도 DOM이 어떻게 작성되어있는지, 어떤 서버와 통신하는지, 리소스의 출처는 어디인지와 같은 각종 정보들을 쉽게 열람할 수 있다.

다른 출처의 어플리케이션이 서로 통신하는 것에 대해 아무런 제약도 존재하지 않는다면, 악의를 가진 사용자가 소스 코드를 CSRF(Cross-Site Request Forgery)나 XSS(Cross-Site Scripting)와 같은 방법을 사용하여 사용자의 정보를 쉽게 탈취할 수 있다.

### :star: 프록시 설정

vue.config.js 파일을 따로 만들어 proxy를 지정해주었다.

<code>proxy:'https://kr.api.riotgames.com' </code>

proxy로 쓸 주소를 등록하게 되면 CORS 에러가 나지 않는다.








