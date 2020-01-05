import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "https://www.google.co.kr/url?sa=i&source=images&cd=&ved=2ahUKEwjq29jfjezmAhWByYsBHdfFAP8QjRx6BAgBEAQ&url=https%3A%2F%2Fcraftlog.com%2Fkr%2F%25EC%259A%2594%25EB%25A6%25AC%2Fext-%25EA%25B9%2580%25EC%259E%25A5%25EA%25B9%2580%25EC%25B9%2598-%25EB%258B%25B4%25EA%25B7%25B8%25EB%258A%2594%25EB%25B2%2595-33xcB&psig=AOvVaw2t2ttTrl_8JRhm_EtG7vUg&ust=1578301571213634"
  },
  {
    name: "Samyueopsal",
    image:
      "https://www.google.co.kr/imgres?imgurl=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fdailylife%2F222d88e5c7dc496c8e8a8a56c3452e52.JPG&imgrefurl=https%3A%2F%2F1boon.kakao.com%2Fdailylife%2F181214_1&docid=xEJro_sWJLFxRM&tbnid=uiCwBwFCULxa2M%3A&vet=10ahUKEwiDwuetjezmAhWKwZQKHSdACOAQMwj6ASgAMAA..i&w=600&h=600&hl=ko&bih=916&biw=1680&q=%EC%82%BC%EA%B2%B9%EC%82%B4&ved=0ahUKEwiDwuetjezmAhWKwZQKHSdACOAQMwj6ASgAMAA&iact=mrc&uact=8"
  },
  {
    name: "Bibimbap",
    image:
      "https://www.google.co.kr/imgres?imgurl=http%3A%2F%2Frecipe1.ezmember.co.kr%2Fcache%2Frecipe%2F2017%2F04%2F13%2Fabcf293fb7d0d73d61e274127ced7b931.jpg&imgrefurl=http%3A%2F%2Fwww.10000recipe.com%2Frecipe%2F6868375&docid=FwmZmstj-Ki8WM&tbnid=TOhWujY3e0lWLM%3A&vet=10ahUKEwiOltqzjezmAhWtyYsBHSSdAJYQMwiNAigAMAA..i&w=580&h=387&hl=ko&bih=916&biw=1680&q=%EB%B9%84%EB%B9%94%EB%B0%A5&ved=0ahUKEwiOltqzjezmAhWtyYsBHSSdAJYQMwiNAigAMAA&iact=mrc&uact=8"
  },
  {
    name: "Doncasu",
    image:
      "https://www.google.co.kr/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F62%2FTonkatsu_by_ayustety_in_Tokyo.jpg%2F250px-Tonkatsu_by_ayustety_in_Tokyo.jpg&imgrefurl=https%3A%2F%2Fko.wikipedia.org%2Fwiki%2F%25EB%258F%2588%25EA%25B0%2580%25EC%258A%25A4&docid=wSDB0BPDdctn-M&tbnid=5Qf_nlqQ5RykFM%3A&vet=10ahUKEwj71_C3jezmAhUmGaYKHVA6DdIQMwh1KAAwAA..i&w=250&h=188&hl=ko&bih=916&biw=1680&q=%EB%8F%88%EA%B0%80%EC%8A%A4&ved=0ahUKEwj71_C3jezmAhUmGaYKHVA6DdIQMwh1KAAwAA&iact=mrc&uact=8"
  },
  {
    name: "Kimbap",
    image:
      "http://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg"
  }
];

function App() {
  return (
    <div className="App">
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
