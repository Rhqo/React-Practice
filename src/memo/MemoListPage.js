import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../layout/header';
import Footer from '../layout/footer';
import { useLocation } from 'react-router-dom';
import MemoListForm from './memoList';
import MemoSpecForm from './memoSpec';
import './memo.css';
import React from 'react';


const MemoList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentMemoId = searchParams.get('id');

  /** 메모 리스트를 불러옴
   *  const getAllMemoOptions = {
   *    url: 'http://server.chokospace.kro.kr:3901/api/chokomemo/all-memos',
   *    method: 'GET',
   *    json: true,
   *    body:{
   *      userId: cookies.userId,
   *      token: cookies.token
   *    }
   *  };
   */
  const memoList = [
    {id:1, title:'Memo 1', lastUpdate:'YYYY-MM-DD'},
    {id:2, title:'Memo 2', lastUpdate:'2023-05-19'},
    {id:3, title:'Memo 3', lastUpdate:'2023-05-31'},
  ];

  /** 메모의 상세내용 객체 형태로 불러옴
   *  const getSpecificMemoOptions = {
   *    url: 'http://server.chokospace.kro.kr:3901/api/chokomemo/memo',
   *    method: 'GET',
   *    json: true,
   *    body:{
   *      userId: cookies.userId,
   *      token: cookies.token,
   *      memoId: currentMemoId
   *    }
   *  }
   */
  const memoSpecObj = {
    id: 1,
    title: 'Memo 1',
    context: 'This is memo 1',
  };

  return (
    <>
    <div>
      <Header />
      <div class="d-flex">
        <div class="w-auto vh-100">
          <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style={{width: '200px'}}>
            <a href="/memo" class="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none">
              <span class="fs-5 fw-semibold">Memo List</span>
            </a>
            <div class="list-group list-group-flush border-top border-bottom scrollarea">
              { memoList.map((memoList) => 
                <MemoListForm memoListObj={memoList} currentMemoId={currentMemoId} />)
              }
              <a href="/createMemo" id="createMemo" class="list-group-item list-group-item-action py-3 lh-sm" aria-current="true">
                <div class="d-flex w-100 align-items-center justify-content-between">
                  <strong class="mb-1">+ New Memo</strong>
                </div>
              </a>
            </div>
          </div>
        </div>
        <MemoSpecForm memoSpecObj={memoSpecObj} />
      </div>
      <Footer />
    </div>
    </>
  );
}

export default MemoList;