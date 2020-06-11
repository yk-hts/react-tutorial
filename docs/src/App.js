import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer has-background-grey-lighter">
      <div className="content has-text-centered">
        <p className="is-size-1">Thank You for coming!</p>
        <p>&copy;2020 Yuuki Hatasa</p>
      </div>
    </footer>
  );
};

const Header = () => {
  return (
    <section className="hero is-medium is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Self-Introduce</h1>
          <h2 className="subtitle">Hatasa Yuuki</h2>
        </div>
      </div>
    </section>
  );
};

const Profile = () => {
  return (
    <div>
      <article class="message">
        <div class="message-body has-text-centered is-size-5">
          こんにちは！<strong>ハタサユウキ</strong>と申します。
          <br></br>
          日本大学文理学部に所属している3年生です。
          <br></br>
          このページでは自己紹介、今後の目標など基本的なことを紹介していきます。
          <br></br>
        </div>
      </article>

      <body>
        <section className="section">
          <div className="container">
            <h1 className="title is-size-1">自己紹介</h1>
            <div class="content is-size-4">
              <ul>
                <li>畑佐有輝(はたさゆうき)</li>
                <li>1999年11月12日生まれ(20歳)</li>
                <li>東京都練馬区生まれ</li>
                <li>日本大学文理学部3年</li>
                <li>好きな食べ物 : ラーメン</li>
                <li>好きなスポーツ : 野球</li>
                <li>
                  AtCoder : <span className="has-text-grey">灰色</span>
                </li>
                <li>
                  Please Watch
                  <ul>
                    <li>
                      twitter :{" "}
                      <a href="https://twitter.com/h61651">
                        <i className="fab fa-twitter-square fab fa-lg"></i>
                      </a>
                    </li>
                    <li>
                      Instagram :{" "}
                      <a href="https://www.instagram.com/h61651/">
                        <span className="icon has-text-danger">
                          <i class="fab fa-instagram-square fab fa-lg"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      Github :{" "}
                      <a href="https://github.com/yk-hts">
                        <span className="icon has-text-black">
                          <i class="fab fa-github-square fab fa-lg"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h1 className="title is-size-1">これからの目標</h1>
            <div className="content is-size-4">
              <ul>
                <li>基本情報技術者試験合格</li>
                <li>
                  AtCoder : <span className="has-text-warning-dark">茶色</span>
                </li>
                <li>まだ行ったことないところに旅行に行く</li>
                <li>単位をとる</li>
              </ul>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
};
const Skill = () => {
  return (
    <div>
      <article class="message">
        <div class="message-body has-text-centered is-size-5">
          このページでは自分が今までに使ってきた言語、学んできた言語
          <br></br>
          使用してたツール、これから学んでいこうと思ってものについて紹介します
          <br></br>
          自分が今までに参加したイベント,コンテストについて紹介します。
        </div>
      </article>
      <section className="section">
        <div className="container">
          <h1 className="title is-size-1">使用言語</h1>
          <div className="content is-size-4">
            <ul>
              <li>C言語</li>
              <li>Python</li>
              <li>JavaScript</li>
              <li>Ruby</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <h1 className="title is-size-1">イベント,コンテスト参加経験</h1>
          <div className="content is-size-4">
            <ul>
              <li>Ionic Japan Camp 2020 Spring @日本大学　参加 </li>
              <li>
                <a href="https://atcoder.jp/users/Yk_Hts">AtCoder</a>
              </li>
            </ul>
          </div>
          <h1 className="title is-size-1">使用しているツール</h1>
          <div className="content is-size-4">
            <ul>
              <li>slack</li>
              <li>
                <a href="https://github.com/yk-hts">Github</a>
              </li>
            </ul>
          </div>
          <h1 className="title is-size-1">
            これから勉強しようと思っている分野
          </h1>
          <div className="content is-size-4">
            <ul>
              <li>SQL</li>
              <li>React</li>
              <li>アルゴリズムF</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
const Like = () => {
  return (
    <div>
      <article class="message">
        <div class="message-body has-text-centered is-size-5">
          このページでは自分の趣味や好きなことについて紹介します。
        </div>
      </article>
      <section className="section">
        <div className="container">
          <h1 className="titile is-size-1">野球観戦</h1>
          {/* <figure class="image is-128x128">
            <img src="react-tutorial/image/tokyo.png" alt=""/>
          </figure> */}
          <p>自分は小学生から中学生まで野球をやっていました。その影響で今でも野球が好きでテレビで見ることはもちろん、球場に足を運んで見に行くことも好きです。<br></br>
          一番近場なので東京ドームに見に行くことが一番多いですが、埼玉にある西武ドームに見に行くこともあります。だいたい年間4,5回くらい観に行っています。今年はコロナウイルスの影響でまだ見に行けていませんが、<br></br>
          観戦席るようになればまた今年も見に行きたいと思っています。</p>
          <br></br>
          <h1 className="titile is-size-1">旅行</h1>
        <p>自分は旅行が好きで長期休みが取れると大体毎回どこかしらに旅行にいきます。自分は温泉が好きなので寒い時期はよく温泉が有名なところに行きます。<br></br>
        まだ海外には行ったことないのでお金があったら行ってみたいと思います。</p>
        </div>
      </section>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const Body = () => {
  return (
    // <h1 className="title is-1 has-text-centered">About This Site</h1>
    <Router>
      <div>
        <nav class="level">
          <Link class="level-item has-text-centered is-size-4" to="/">
            <i className="fas fa-user"></i>
            Profile
          </Link>
          <Link class="level-item has-text-centered is-size-4" to="/skill">
            <i className="fas fa-id-card"></i>
            Skill
          </Link>
          <Link class="level-item has-text-centered is-size-4" to="/like">
            <i className="fas fa-thumbs-up"></i>
            Like
          </Link>
        </nav>

        <Switch>
          <Route path="/skill">
            <Skill />
          </Route>
          <Route path="/like">
            <Like />
          </Route>
          <Route path="/">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
