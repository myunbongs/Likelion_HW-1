# #1 🇷🇪🇸🇹 🇦🇵🇮

# REST API:

REST(Representational State Transfer) + API(Application Programming Interface)

---

## 1) REST

어떤 자원에 대해 CRUD(Create, Read, Update, Delete) 연산을 수행하기 위해 URI(Resource)로 요청을 보내는 것

- REST의 구성요소
    - 자원 (Resource)
    - 행위(Verb)
    - 표현 (Representation)

 2000년도에 로이 필딩 (Roy Fielding)의 박사학위 논문에서 최초로 소개됨. 로이 필딩은 HTTP의 주요 저자 중 한 사람으로 웹의 장점을 최대한 활용할 수 있는 아키텍처로써 발표함.  ‧˚₊*̥(* ⁰̷̴͈꒨⁰̷̴͈)‧*̥₊

## 2) API

[API](https://ko.wikipedia.org/wiki/API)

응용 프로그램에서 사용할 수 있도록, 운영 체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스

→  내가 개발한 서비스에서 개인 개발자, 기업, 기관이 제공하는 기능이나 프로그램을 사용할 수 있게 하는 매개체

## 3) REST API

CRUD 연산에 대한 요청을 할 때, 요청을 위한 Resource(자원, URI)와 이에 대한 Method(행위, POST) 그리고 Representation of Resource(자원의 형태, JSON)을 사용하면 표현이 명확함. 이러한 규칙을 지켜서 설계된 API를 REST API라 함 (ˊᵒ̴̶̷̤ ꇴ ᵒ̴̶̷̤ˋ)

## 4) REST API의 특징

- Uniform Interface(일관된 인터페이스)

    URI로 지정한 리소스에 대한 조작을 통일되고 한정적인 인터페이스로 수행하는 아키텍처 스타일 

    → HTTP 표준만 따른다면 특정 언어나 플랫폼에 종속되지 않고 사용이 가능

- Stateless(무상태성)

    작업에 대한 상태 정보(세션이나 쿠키) 기억하지 않아 들어온 요청만 처리

    → 쉽고 단순한 구현

- Cacheable(캐시 가능)

    HTTP라는 기존 웹표준을 사용하는 REST의 특징

    → 기본 웹에서 사용하던 인프라 그대로 사용 가능 

- Client-Server Architecture (서버-클라이언트 구조)

    서버는 REST API 제공, 클라이언트는 사용자 인증이나 컨텍스트(세션, 로그인 정보) 등 직접 관리하며 역할 구분

    → 각 서버와 클라이언트 간 의존성 감소, 서버와 클라이언트의 개발 내용 명확 

- Self-Descriptiveness(자체 표현)

    요청 메세지만 보고 쉽게 이해할 수 있는 자체 표현 구조

    - JSON 형태의 Rest 메세지

        HTTP POST , http://localhost:8080/insertBoardInfo

        {

        "boardVO":{

        "title":"제목",

        "content":"내용"

        }

        }

- Layered System(계층 구조)

    다중 계층으로 구성 가능 

    → 클라이언트와 서버가 분리되어 중간에 프록시 서버, 암호화 계층등 중간매체 사용 가능 

## 5) REST API를 설계하는 법 (⌯ᵒ̴̶̷̀ ꇴ ᵒ̴̶̷́⌯)✧

- URL은 정보의 자원 표현
    1. 소문자 사용
    2. 하이픈( - ) 사용
    3. 확장자 사용 금지 
    4. 밑줄( __ ) 사용 금지
- HTTP Method는 자원에 대한 행위 표현

    ![1/Untitled.png](1/Untitled.png)

    출처: [https://velog.io/@wlsdud2194/HTTP-REST-API-란](https://velog.io/@wlsdud2194/HTTP-REST-API-%EB%9E%80)

---

### 참고 사이트

[https://mangkyu.tistory.com/46](https://mangkyu.tistory.com/46)

[https://velog.io/@wlsdud2194/HTTP-REST-API-란](https://velog.io/@wlsdud2194/HTTP-REST-API-%EB%9E%80)

[https://meetup.toast.com/posts/92](https://meetup.toast.com/posts/92)

[https://velog.io/@stampid/REST-API와-RESTful-API](https://velog.io/@stampid/REST-API%EC%99%80-RESTful-API)