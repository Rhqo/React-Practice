import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header';
import Footer from '../footer';
import React from 'react';

const Home = () => {
  return (
    <>
    <div>
      <Header />
      <div className="col-lg-8 mx-auto mt-4 p-4 py-md-5">  
        <main>
          <h1>언제 어디서든지 간편하게 메모하세요</h1>
          <p className="fs-5 col-md-8">
            사용하기 쉬운 앱으로 메모 작성을 간소화하세요!<br />
            메모 작성이 필요할 때 언제 언제든지 사용할 수 있습니다.<br />
          </p>

          <div className="mb-5">
            <a href="/account/signup" className="btn btn-primary btn-lg px-4" style={{margin: '5px'}}>무료로 시작하기</a>
            <a href="/account/signin" className="btn btn-outline-primary btn-lg px-4">로그인</a>
          </div>

          <hr className="col-3 col-md-2 mb-5" />
          <div className="row g-5">
            <div className="col-md-6">
              <h2>Starter projects</h2>
              <p>Ready to beyond the starter template? Check out these open source projects that you can quickly duplicate to a new GitHub repository.</p>
              <ul className="icon-list ps-0">
                <li className="text-muted d-flex align-items-start mb-1">This is pracice</li>
                <li className="d-flex align-items-start mb-1"><a href="https://github.com/twbs/bootstrap-npm-starter">Bootstrap npm starter</a></li>
              </ul>
            </div>

            <div className="col-md-6">
              <h2>지원예정 기능</h2>
              <p>우리는 아래와 같은 기능들을 개발하고 있어요!</p>
              <ul className="icon-list ps-0">
                <li className="d-flex align-items-start mb-1"><a href="/docs/1">다른 유저에게 메모 공유</a></li>
                <li className="d-flex align-items-start mb-1"><a href="/docs/4">지원 언어 선택</a></li>
                <li className="d-flex align-items-start mb-1"><a href="/docs/2">SNS 로그인기능</a></li>
                <li className="d-flex align-items-start mb-1"><a href="/docs/3">메모 검색기능</a></li>
                <li className="d-flex align-items-start mb-1"><a href="/docs/4">유저 회원탈퇴</a></li>
              </ul>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
    </>
  );
}

export default Home;