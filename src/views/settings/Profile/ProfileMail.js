import React, { useState } from 'react'

import {
  CCard,
  CCardHeader,
  CCardBody,
  CCol,
  CRow,
  CButton,
  CSwitch,
  CImg,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModal,
  CModalTitle,
  CFormGroup,
  CLabel,
  CInput,
  CInputRadio,
  CInputFile
} from '@coreui/react'

export const ProfileMail = () => {
  return (
    < CRow >
      <CCol xs="12">
        <CCard>
          <CCardHeader>
            <h4>メール受信設定</h4>
          </CCardHeader>
          <CCardBody>
            <CRow xs="12" className="align-items-center">
              <CCol xs="10">
                <div><b>デイリーレポートメール</b></div>
                  アサインされているサービスアカウントについて、デイリーで前日の運用状況をお知らせします。
                </CCol>
              <CCol xs="2">
                <div className='notification-on float-right'>受信する</div>
              </CCol>
            </CRow>
            <hr />

            <CRow xs="12" className="align-items-center">
              <CCol xs="10">
                <div><b>アラートメール</b></div>
                  アサインされているサービスアカウントについて、予約投稿が失敗した場合や認証が無効などにお知らせします。
                </CCol>
              <CCol xs="2">
                <div className='notification-off float-right'>受信しない</div>
              </CCol>
            </CRow>
            <hr />

            <CRow xs="12" className="align-items-center">
              <CCol xs="10">
                <div><b>ワークフローメール</b></div>
                  アサインされているサービスアカウントについて、投稿の承認依頼や差し戻しなどを受けた場合にお知らせします。
                </CCol>
              <CCol xs="2">
                <div className='notification-on float-right'>受信する</div>
              </CCol>
            </CRow>
            <hr />

            <CRow xs="12" className="align-items-center">
              <CCol xs="10">
                <div><b>Twitterアラートメール</b></div>
                  アサインされているサービスアカウントについて、一定時間に設定した件数のRT/リプライ/DMを受けた場合にお知らせします。
                </CCol>
              <CCol xs="2">
                <div className='notification-off float-right'>受信しない</div>
              </CCol>
            </CRow>
            <hr />

            <CRow xs="12" className="align-items-center">
              <CCol xs="10">
                <div><b>Facebookメッセージアラートメール</b></div>
                  アサインされているサービスアカウントについて、一定時間にメッセージを受けた場合にお知らせします。
                </CCol>
              <CCol xs="2">
                <div className='notification-on float-right'>受信する</div>
              </CCol>
            </CRow>
            <hr />

            <CRow xs="12" className="align-items-center">
              <CCol xs="10">
                <div><b>Facebookコメント監視アラートメール</b></div>
                  アサインされているサービスアカウントについて、監視ワードを含むコメントを受けた場合にお知らせします。
                </CCol>
              <CCol xs="2">
                <div className='notification-off float-right'>受信しない</div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow >
  )
}
