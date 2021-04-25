import React, { useState } from 'react'

import {
  CCol,
  CRow,
  CButton,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModal,
  CModalTitle,
  CFormGroup,
  CLabel,
  CInput,
  CInvalidFeedback,
} from '@coreui/react'
import axios from 'axios'

export const ProfileChangePassword = (props) => {
  const [modalPassword, setModalPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const savePassword = () => {
    var profileData = props.info;
    profileData.password = password;
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
        setPassword('');
        setConfirmPassword('');
        setModalPassword(!modalPassword);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const cancelPassword = () => {
    setPassword('');
    setConfirmPassword('');
    setModalPassword(!modalPassword);
  }

  const handleChangePassword = (e) => {
    console.log(props.info);
    setPassword(e.target.value);
    console.log(e.target.value);
  }

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    console.log(e.target.value);
  }
  return (
    <>
      <CRow className="align-items-center">
        <CCol xs="3">
          <b>パスワード</b>
        </CCol>
        <CCol xs="7">
          <b>**********</b>
        </CCol>
        <CCol xs="2">
          <CButton
            onClick={() => setModalPassword(!modalPassword)}
            block shape="pill" color="primary" className="setting-button float-right">設定</CButton>
        </CCol>
      </CRow>
      <hr />

      <CModal
        show={modalPassword}
        onClose={() => setModalPassword(!modalPassword)}
        size="md"
      >
        <CModalHeader closeButton>
          <CModalTitle>パスワード変更</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CCol xs="12">
              <CFormGroup>
                <CLabel htmlFor="password">新規パスワード</CLabel>
                <CInput type="password" id="password" value={password} onChange={handleChangePassword} placeholder="" required />
              </CFormGroup>
            </CCol>
          </CRow>
          <CRow>
            <CCol xs="12">
              <CFormGroup>
                <CLabel htmlFor="passwordConfirm">確認のためもう一度入力してください</CLabel>
                <CInput valid={password === confirmPassword && password !== ''} invalid={password !== confirmPassword} type="password" id="passwordConfirm" value={confirmPassword} onChange={handleChangeConfirmPassword} placeholder="" required />
                <CInvalidFeedback className="help-block">
                  空は許可されていない
                </CInvalidFeedback>
              </CFormGroup>
            </CCol>
          </CRow>
        </CModalBody>
        <CModalFooter>
          <CButton shape="pill" className='modal-submit-btn' color="secondary" onClick={() => cancelPassword()}>キャンセル</CButton>
          <CButton disabled={password !== confirmPassword || password === ''} shape="pill" className='modal-submit-btn' color="primary" onClick={() => savePassword()}>保存</CButton>{' '}
        </CModalFooter>
      </CModal>
    </>
  )
}


