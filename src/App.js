import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
          こんにちは！畑佐有輝と申します。
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
                <li>Please Watch
                <ul>
                  <li>twitter : <a href="https://twitter.com/h61651"><i className="fab fa-twitter-square fab fa-lg"></i></a></li>
                  <li>Instagram : <a href="https://www.instagram.com/h61651/"><span className="icon has-text-danger"><i class="fab fa-instagram-square fab fa-lg"></i></span></a></li>
                  <li>Github : <a href="https://github.com/yk-hts"><span className="icon has-text-black"><i class="fab fa-github-square fab fa-lg"></i></span></a></li>
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
  return <div>Skill</div>;
};
const Like = () => {
  return <div>Like</div>;
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
