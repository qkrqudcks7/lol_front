# LOL 전적 검색 프로젝트 Front ( Vue.js)

![image](https://user-images.githubusercontent.com/66015002/127276085-c0160018-31c6-427b-a547-ac77230f3d9d.png)


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

<hr>

## :imp: Async Await Promise 객체 해결하기

## Async Await의 이해

### match Id 값을 이용해 디테일한 정보를 얻는 메소드
<pre><code>
findMatchDetail (matchId) {
      let array = []
      lolAPI.find_detail_match(matchId).then(response => {
        let data = response.data
        console.log(data)
        let id = ''
        for (let i = 1; i < data.participantIdentities.length; i++) {
          if (data.participantIdentities[i].player.summonerName === this.name) {
            id = data.participantIdentities[i].participantId
            break
          }
        }
        for (let i = 0; i < 2; i++) {
          if (data.teams[i].teamId === data.participants[id].teamId) {
            array.push(data.teams[i].win)
          }
        }
        array.push(data.participants[id - 1].spell1Id)
        array.push(data.participants[id - 1].spell2Id)
        array.push(data.participants[id - 1].stats.kills)
        array.push(data.participants[id - 1].stats.deaths)
        array.push(data.participants[id - 1].stats.assists)
        console.log(array)
        return array
      })
      console.log(array)
    }
    </code></pre>
 
 ### :exclamation: 문제점
 
 콘솔을 찍어보며 데이터 값을 확인하다. 문제점을 발견했다.
 
 <b>맨 밑의 콘솔과 그 두 줄 위에 있는 콘솔이 같은 값을 출력하라고 돼있지만 정작 다른 값이 찍히는 것이다.</b>
 
 js 동작 원리의 이해가 부족한 탓이다. js는 동기적 언어이기 때문에 단일 스레드로 작동이 된다.
 
 그 뜻은 한번에 하나의 작업만 할 수 있고, 다른 작업이 들어오면 한 작업이 끝날 때까지 기다려야 하는 것이다.
 
 그렇기 때문에 비록 lolAPI.find_detail_match(matchId)로 array를 변경시킬 수 있지만,
 
 let array가 먼저 대기열에서 작동하고 있기 때문에 array가 맨 밑 콘솔에 빈 값으로 찍힌 후 저 api가 동작하는 것이다.
 
 ### :star: 해결방안 async await
 
 <pre><code>
async findMatchDetail (matchId) {
      let array = []
      await lolAPI.find_detail_match(matchId).then(response => {
        let data = response.data
        console.log(data)
        let id = ''
        for (let i = 1; i < data.participantIdentities.length; i++) {
          if (data.participantIdentities[i].player.summonerName === this.name) {
            id = data.participantIdentities[i].participantId
            break
          }
        }
        for (let i = 0; i < 2; i++) {
          if (data.teams[i].teamId === data.participants[id].teamId) {
            array.push(data.teams[i].win)
          }
        }
        array.push(data.participants[id - 1].spell1Id)
        array.push(data.participants[id - 1].spell2Id)
        array.push(data.participants[id - 1].stats.kills)
        array.push(data.participants[id - 1].stats.deaths)
        array.push(data.participants[id - 1].stats.assists)
        console.log(array)
        return array
      })
      console.log(array)
    }
</code></pre>

함수명 앞에 예약어인 async를 붙여주고, 의도한 대로 동작하게 할 api 앞에 await를 붙여주어 밑으로 차례대로 동작하도록 만들었습니다.

<hr>

## :imp: 반복문에서 Async Await 객체 순서 오류

 ### :exclamation: 문제점
 
callback을 요구하는 반복문에서 Await의 동작방식은 내 생각과 달랐다.

자바스크립트의 forEach는 promise를 인지하지 못하기 때문에 반복문의 순서가 맞지 않았다. 즏 말은, async/await을 forEach안에서 쓸 수 없다는 것이다.


<pre><code>
lolAPI.find_match(accountId).then(async response => {
   this.match = response.data.matches
   for (let b of this.match) {
     await lolAPI.find_detail_match(b.gameId).then(response => {
     .......
</code></pre>

 ### :star: 해결방안 For of 문

그래서 For...of 문을 사용하여 비동기 병렬처리를 해주었다.

원래 기대했던 대로 결과 값을 확인할 수 있었다.
