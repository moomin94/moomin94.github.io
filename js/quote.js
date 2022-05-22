const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

const quotes = [
  {
    quote:
      '살아가면서 우리에겐 수많은 용기가 필요하다. 헌데 지금에 와서 나에게 가장 필요한 용기가 있다면 이것 이다. "나를 기꺼이 바꿀 용기".',
    author: "이동영 작가",
  },
  {
    quote: "행동은 모든 성공의 열쇠이다.",
    author: "파블로 피카소",
  },
  {
    quote: "우리가 무슨 생각을 하느냐가 어떤 사람이 되는지를 결정한다.",
    author: "오프라 윈프리",
  },
  {
    quote: "누군가의 흐린 마음에 비치는 무지개가 되어라.",
    author: "마야 안젤루",
  },
  {
    quote:
      "시도해보지 않고는 누구도 자신이 얼마만큼 해낼 수 있는지 알지 못한다.",
    author: "푸블릴리우스 시루스",
  },
  {
    quote: "내일은 시련에 대응하는 새로운 힘을 가져다 줄 것이다.",
    author: "C.힐티",
  },
  {
    quote: "가장 어두운 시간은 해뜨기 바로 직전의 시간이다.",
    author: "하울로 코엘료",
  },
  {
    quote: "사람은 행복하기로 마음먹은 만큼 행복하다.",
    author: "링컨",
  },
  {
    quote: "걱정없는 인생을 바라지 말고 걱정에 물들지 않는 연습을 하라.",
    author: "알랭",
  },
  {
    quote: "한 번 실패와 영원한 실패를 혼동하지 말라.",
    author: "스콧 피츠제럴드",
  },
];

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
