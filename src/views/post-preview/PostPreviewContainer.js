import React, { useState, useEffect } from 'react';
import { ThreadData } from './PostData';
import { AnchorButton } from './AnchorButton';

import {
  CRow,
  CCol,
  CImg,
  CInput,
  CButton
} from '@coreui/react'

import axios from 'axios'

import './setting.css'

import preview from '../../assets/img/preview.png'
import attachment from '../../assets/img/attachment.png'
import pin from '../../assets/img/pin.png'
import user from '../../assets/img/user.png'
import more from '../../assets/img/more.png'

const PostPreviewContainer = () => {

  const [threadData, setThreadData] = useState([]);
  const [tmpComment, setTmpComment] = useState({});
  const [inputText, setInputText] = useState('');
  const [saveStatus, setSaveStatus] = useState(true);

  useEffect(() => {
    getComment();
  }, []
  );

  const selectAnchor = () => {
    if (!saveStatus) return;
    var comment = {
      'id': threadData.length + 1,
      'title': 'abc',
      'anchorNo': 0,
      'positionX': -600,
      'positionY': 300,
      'comment': [{
        'username': '投稿者1',
        'text': inputText,
        'date': '2021-03-03 03:03'
      }
      ]
    };

    setTmpComment(comment);
    // setThreadData(threadData.concat(comment));

    axios.post('http://localhost:3000/comment', comment)
      .then(function (response) {
        console.log(threadData.length);
        getComment();
      })
      .catch(function (error) {
        console.log(error);
      });

    setSaveStatus(false);
  }

  const handleChangeTextInput = (e) => {
    setInputText(e.target.value);
  }

  const postComment = () => {
    if (inputText == "") {
      console.log('return');
      return;
    }
    var tmpCmt = tmpComment;
    tmpCmt.anchorNo = threadData.length;
    tmpCmt.comment.text = inputText;
    console.log(tmpCmt);
    axios.put('http://localhost:3000/comment/' + threadData.length, tmpCmt)
      .then(function (response) {
        setInputText('');
        console.log(threadData.length);
        getComment();
      })
      .catch(function (error) {
        console.log(error);
      });
    setSaveStatus(true);
  }

  const getComment = () => {
    axios.get('http://localhost:3000/comment')
      .then(function (response) {
        // handle success
        setThreadData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  return (
    <>
      <div id="container">
        <div className="split-screen">
          <div className="left-pane">
            <CImg id="sampleImage" src={preview}></CImg>
            <div>
              {
                threadData.map((keyName, i) => {
                  return (<div key={i}>
                    <AnchorButton index={threadData[i].anchorNo == 0 ? threadData.length : threadData[i].anchorNo} threadData={threadData} setThreadData={setThreadData}></AnchorButton>
                  </div>);
                })
              }
            </div>
          </div>
          <div className="right-pane">
            <div className='comment-area'>
              <div className='input-area'>
                <CInput id="text-input" onChange={handleChangeTextInput} className="text-input" placeholder="コメントを記入" value={inputText}></CInput>
                <CImg className="attachment" src={attachment}></CImg>
                <CImg id='anchor-select' className="pin" src={pin} onClick={selectAnchor}></CImg>
              </div>
              <div className='input-option-area'>
                <CButton class="to-user">TO</CButton>
                <CButton class="plus">+</CButton>
                <CButton class="cancel">キャンセル</CButton>
                <CButton class="send" onClick={postComment}>送信</CButton>
              </div>
              <div className="comment-section">
                {
                  threadData.map((keyName, i) => {
                    if (threadData[i].anchorNo != 0) {
                      return (<div key={i}>
                        <hr className="comment-split-line"></hr>
                        <CRow className="per-comment">
                          <CCol xs="2"><div class="big-anchor"><b className="big-anchor-id">{threadData[i].anchorNo}</b></div></CCol>
                          <CCol xs="9">
                            <CRow><div className="user-section">
                              <span><CImg id="user-avatar" src={user}></CImg></span>
                              <span className="sender-name"><b>{threadData[i].comment[0].username}</b></span>
                            </div>
                            </CRow>
                            <CRow><div className="deliver-section">
                              <CButton class="to-user-small">TO</CButton>
                              <span className="receiver-name">username</span>
                            </div>
                            </CRow>
                            <CRow>
                              <div className="comment">
                                {threadData[i].comment[0].text}
                              </div>
                            </CRow>
                          </CCol>
                          <CCol xs="1">
                            <CImg id='anchor-select' className="more-button" src={more}></CImg>
                          </CCol>
                        </CRow>
                      </div>);
                    }
                  })
                }

              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default PostPreviewContainer;
