import React, { useState } from 'react'

import {
  CCard,
  CCardHeader,
  CCardBody,
  CCol,
  CRow,
  CButton,
  CSwitch,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModal,
  CModalTitle,
  CFormGroup,
  CLabel,
  CInput,
  CInvalidFeedback
} from '@coreui/react'

import axios from 'axios'

export const ProfileSubmail = (props) => {
  const [modalSubMail, setModalSubMail] = useState(false)
  const [subMail, setSubMail] = useState('');
  const [confirmSubMail, setConfirmSubMail] = useState('');

  const changeSubMail = () => {
    var profileData = props.info;
    profileData.mail_address_sub = subMail;
    axios.put('http://localhost:3000/users', {
      "icon_id": profileData.icon_id,
      "mail_address": profileData.mail_address,
      "mail_address_sub": profileData.mail_address_sub,
      "password": profileData.password,
      "is_sub_mail_daily_report_mail": profileData.is_sub_mail_daily_report_mail,
      "is_sub_mail_alert_mail": profileData.is_sub_mail_alert_mail,
      "is_sub_mail_workflow_mail": profileData.is_sub_mail_workflow_mail,
      "is_sub_mail_facebook_message_alert_mail": profileData.is_sub_mail_facebook_message_alert_mail,
      "is_sub_mail_facebook_comment_alert_mail": profileData.is_sub_mail_facebook_comment_alert_mail
    })
      .then(function (response) {
        setSubMail('');
        setConfirmSubMail('');
        setModalSubMail(!modalSubMail);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const cancelChangeSubMail = () => {
    setSubMail('');
    setConfirmSubMail('');
    setModalSubMail(!modalSubMail);
  }

  const handleChangeSubMail = (e) => {
    setSubMail(e.target.value);
  }

  const handleChangeConfirmSubMail = (e) => {
    setConfirmSubMail(e.target.value);
  }

  const isValidEmailAddress = (address) => {
    let regMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regMail.test(address);
  }

  return (
    <>
      <CRow>
        <CCol xs="12">
          <CCard>
            <CCardHeader>
              <h4>サブメール受信設定</h4>
            </CCardHeader>
            <CCardBody>
              <CRow xs="12" className="align-items-center">
                <CCol xs="3">
                  <b>サブメールアドレス</b>
                </CCol>
                <CCol xs="7">
                  {props.info.mail_address_sub}
                </CCol>
                <CCol xs="2">
                  <CButton
                    onClick={() => setModalSubMail(!modalSubMail)}
                    block shape="pill" color="primary" className="setting-button float-right">設定</CButton>
                </CCol>
              </CRow>
              <hr />
              <CRow xs="12" className="align-items-center">
                <CCol xs="10">
                  <b>デイリーレポートメール</b>
                </CCol>
                <CCol xs="2">
                  <CSwitch className={'mx-1 switcher setting-switch-button float-right'} shape={'pill'} color={'primary'} variant={'opposite'} labelOn='受信する' labelOff='受信しない' defaultChecked={props.info.is_sub_mail_daily_report_mail} />
                </CCol>
              </CRow>
              <hr />
              <CRow xs="12" className="align-items-center">
                <CCol xs="10">
                  <b>アラートメール</b>
                </CCol>
                <CCol xs="2">
                  <CSwitch className={'mx-1 switcher setting-switch-button float-right'} shape={'pill'} color={'primary'} variant={'opposite'} labelOn='受信する' labelOff='受信しない' defaultChecked={props.info.is_sub_mail_alert_mail} />
                </CCol>
              </CRow>
              <hr />
              <CRow xs="12" className="align-items-center">
                <CCol xs="10">
                  <b>ワークフローメール</b>
                </CCol>
                <CCol xs="2">
                  <CSwitch className={'mx-1 switcher setting-switch-button float-right'} shape={'pill'} color={'primary'} variant={'opposite'} labelOn='受信する' labelOff='受信しない' defaultChecked={props.info.is_sub_mail_workflow_mail} />
                </CCol>
              </CRow>
              <hr />
              <CRow xs="12" className="align-items-center">
                <CCol xs="10">
                  <b>Facebookメッセージアラートメール</b>
                </CCol>
                <CCol xs="2">
                  <CSwitch className={'mx-1 switcher setting-switch-button float-right'} shape={'pill'} color={'primary'} variant={'opposite'} labelOn='受信する' labelOff='受信しない' defaultChecked={props.info.is_sub_mail_facebook_message_alert_mail} />
                </CCol>
              </CRow>
              <hr />
              <CRow xs="12" className="align-items-center">
                <CCol xs="10">
                  <b>Facebookコメント監視アラートメール</b>
                </CCol>
                <CCol xs="2">
                  <CSwitch className={'mx-1 switcher setting-switch-button float-right'} shape={'pill'} color={'primary'} variant={'opposite'} labelOn='受信する' labelOff='受信しない' defaultChecked={props.info.is_sub_mail_facebook_comment_alert_mail} />
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CModal
        show={modalSubMail}
        onClose={() => setModalSubMail(!modalSubMail)}
        size="md"
      >
        <CModalHeader closeButton>
          <CModalTitle>サブメールアドレス</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CCol xs="12">
              <CFormGroup>
                <CLabel htmlFor="submail">サブメールアドレス</CLabel>
                <CInput type="email" id="subMail" value={subMail} onChange={handleChangeSubMail} placeholder="" required />
              </CFormGroup>
            </CCol>
          </CRow>
          <CRow>
            <CCol xs="12">
              <CFormGroup>
                <CLabel htmlFor="confirmSubMail">確認のためもう一度入力してください</CLabel>
                <CInput type="email" valid={subMail === confirmSubMail && subMail !== '' && isValidEmailAddress(subMail)} invalid={subMail !== confirmSubMail} id="confirmSubMail" value={confirmSubMail} onChange={handleChangeConfirmSubMail} placeholder="" required />
                <CInvalidFeedback className="help-block">
                  サブメールと確認サブメールが同じの必要がある。メールのフォマットが正しくない
                </CInvalidFeedback>
              </CFormGroup>
            </CCol>
          </CRow>
        </CModalBody>
        <CModalFooter className='em-modal-footer'>
          <div className="float-left sub-mail-memo mr-auto">登録済みのアドレスを削除する</div>
          <CButton disabled={subMail !== confirmSubMail || subMail === '' || !isValidEmailAddress(subMail)} shape="pill" className='modal-submit-btn float-right' color="primary" onClick={() => changeSubMail()}>保存</CButton>
          <CButton shape="pill" className='modal-submit-btn float-right' color="secondary" onClick={() => cancelChangeSubMail()}>キャンセル</CButton>{' '}
        </CModalFooter>
      </CModal>
    </>
  )
}
