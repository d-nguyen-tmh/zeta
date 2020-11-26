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

import CIcon from '@coreui/icons-react'
import bird from '../../assets/img/bird.jpeg'
import './setting.css'

const Setting = () => {
  const [modalPassword, setModalPassword] = useState(false)
  const [modalSubMail, setModalSubMail] = useState(false)
  const [modalChangeUserIcon, setModalChangeUserIcon] = useState(false)
  return (
    <>
      <h1>個人設定</h1>
      <CRow>
        <CCol xs="12">
          <CCard className='user-setting'>
            <CCardHeader>
              <h4>ユーザー設定</h4>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="3">
                  <b>ログインID</b>
                </CCol>
                <CCol xs="9">
                  xxx@xxx.com.vn
              </CCol>
              </CRow>
              <hr />
              <CRow className="align-items-center">
                <CCol xs="10">
                  <b>パスワード</b>
                </CCol>
                <CCol xs="2">
                  <CButton
                    onClick={() => setModalPassword(!modalPassword)}
                    block shape="pill" color="primary" className="setting-button float-right">設定</CButton>
                </CCol>
              </CRow>
              <hr />

              <CRow className="align-items-center">
                <CCol xs="3">
                  <b>ユーザーアイコン</b>
                </CCol>
                <CCol xs="4">
                  <CImg src={bird} width='50px' height='50px' className='img-round'></CImg>
                </CCol>
                <CCol xs="5">
                  <CButton
                    onClick={() => setModalChangeUserIcon(!modalChangeUserIcon)}
                    block shape="pill" color="primary" className="setting-button float-right">設定</CButton>
                </CCol>
              </CRow>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CRow>
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
      </CRow>

      <CRow>
        <CCol xs="12">
          <CCard>
            <CCardHeader>
              <h4>サブメール受信設定</h4>
            </CCardHeader>
            <CCardBody>
              <CRow xs="12" className="align-items-center">
                <CCol xs="4">
                  <b>サブメールアドレス</b>
                </CCol>
                <CCol xs="6">
                  zzz@zzz.co.jp
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
                  <CSwitch className={'mx-1 switcher setting-switch-button float-right'} shape={'pill'} color={'primary'} variant={'opposite'} labelOn='受信する' labelOff='受信しない' defaultChecked />
                </CCol>
              </CRow>
              <hr />
              <CRow xs="12" className="align-items-center">
                <CCol xs="10">
                  <b>アラートメール</b>
                </CCol>
                <CCol xs="2">
                  <CSwitch className={'mx-1 switcher setting-switch-button float-right'} shape={'pill'} color={'primary'} variant={'opposite'} labelOn='受信する' labelOff='受信しない' defaultChecked />
                </CCol>
              </CRow>
              <hr />
              <CRow xs="12" className="align-items-center">
                <CCol xs="10">
                  <b>ワークフローメール</b>
                </CCol>
                <CCol xs="2">
                  <CSwitch className={'mx-1 switcher setting-switch-button float-right'} shape={'pill'} color={'primary'} variant={'opposite'} labelOn='受信する' labelOff='受信しない' defaultChecked />
                </CCol>
              </CRow>
              <hr />
              <CRow xs="12" className="align-items-center">
                <CCol xs="10">
                  <b>Facebookメッセージアラートメール</b>
                </CCol>
                <CCol xs="2">
                  <CSwitch className={'mx-1 switcher setting-switch-button float-right'} shape={'pill'} color={'primary'} variant={'opposite'} labelOn='受信する' labelOff='受信しない' defaultChecked />
                </CCol>
              </CRow>
              <hr />
              <CRow xs="12" className="align-items-center">
                <CCol xs="10">
                  <b>Facebookコメント監視アラートメール</b>
                </CCol>
                <CCol xs="2">
                  <CSwitch className={'mx-1 switcher setting-switch-button float-right'} shape={'pill'} color={'primary'} variant={'opposite'} labelOn='受信する' labelOff='受信しない' defaultChecked />
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

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
                <CInput type="password" id="password" placeholder="" required />
              </CFormGroup>
            </CCol>
          </CRow>
          <CRow>
            <CCol xs="12">
              <CFormGroup>
                <CLabel htmlFor="passwordConfirm">確認のためもう一度入力してください</CLabel>
                <CInput type="password" id="passwordConfirm" placeholder="" required />
              </CFormGroup>
            </CCol>
          </CRow>
        </CModalBody>
        <CModalFooter>
          <CButton shape="pill" className='modal-submit-btn' color="secondary" onClick={() => setModalPassword(!modalPassword)}>キャンセル</CButton>
          <CButton shape="pill" className='modal-submit-btn' color="primary" onClick={() => setModalPassword(!modalPassword)}>保存</CButton>{' '}
        </CModalFooter>
      </CModal>

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
                <CInput type="email" id="submail" placeholder="" required />
              </CFormGroup>
            </CCol>
          </CRow>
          <CRow>
            <CCol xs="12">
              <CFormGroup>
                <CLabel htmlFor="submailConfirm">確認のためもう一度入力してください</CLabel>
                <CInput type="email" id="submailConfirm" placeholder="" required />
              </CFormGroup>
            </CCol>
          </CRow>
        </CModalBody>
        <CModalFooter className='em-modal-footer'>
          <div className="float-left sub-mail-memo mr-auto">登録済みのアドレスを削除する</div>
          <CButton shape="pill" className='modal-submit-btn float-right' color="primary" onClick={() => setModalSubMail(!modalSubMail)}>保存</CButton>{' '}
          <CButton shape="pill" className='modal-submit-btn float-right' color="secondary" onClick={() => setModalSubMail(!modalSubMail)}>キャンセル</CButton>
        </CModalFooter>
      </CModal>

      <CModal
        show={modalChangeUserIcon}
        onClose={() => setModalChangeUserIcon(!modalChangeUserIcon)}
        size="md"
      >
        <CModalHeader closeButton>
          <CModalTitle>ユーザーアイコン</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CCol xs="2" className="default-user-icon default1">
              <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="inline-radio1" name="inline-radios" value="option1" />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio1"><CIcon name="cil-user" size="3xl" /></CLabel>
              </CFormGroup>
            </CCol>
            <CCol xs="2" className="default-user-icon default2">
              <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="inline-radio2" name="inline-radios" value="option2" />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio2"><CIcon name="cil-user" size="3xl" /></CLabel>
              </CFormGroup>
            </CCol>
            <CCol xs="2" className="default-user-icon default3">
              <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="inline-radio3" name="inline-radios" value="option3" />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio3"><CIcon name="cil-user" size="3xl" /></CLabel>
              </CFormGroup>
            </CCol>
            <CCol xs="2" className="default-user-icon default4">
              <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="inline-radio4" name="inline-radios" value="option4" />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio4"><CIcon name="cil-user" size="3xl" /></CLabel>
              </CFormGroup>
            </CCol>
            <CCol xs="2" className="default-user-icon default5">
              <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="inline-radio5" name="inline-radios" value="option5" />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio5">
                  <div className="rounded-circle text-center custom-user-icon" >
                    <CIcon name="cil-user" size="3xl" />
                  </div>
                </CLabel>
              </CFormGroup>
            </CCol>

          </CRow>
          <CRow className="choose-file-row">
            <CCol xs="2">
              <CFormGroup variant="custom-radio" inline>
                <CInputRadio custom id="inline-radio6" name="inline-radios" value="option6" />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio6"><CIcon name="cil-image-plus" size="3xl" /></CLabel>
              </CFormGroup></CCol>
            <CCol xs="8">
              <CFormGroup variant="checkbox" inline className="form-user-icon">
                <CLabel htmlFor="file-input" className="btn btn-dark select-image">
                  画像のアップロード
              </CLabel>
                <CInputFile
                  id="file-input" name="file-input"
                  className="input-file"
                  accept="image/gif, image/jpg, image/png"
                />
              </CFormGroup>
            </CCol>
          </CRow>
        </CModalBody>
        <CModalFooter className='em-modal-footer'>
          <div className="float-left sub-mail-memo mr-auto">登録済みのアドレスを削除する</div>
          <CButton shape="pill" className='modal-submit-btn float-right' color="primary" onClick={() => setModalChangeUserIcon(!modalChangeUserIcon)}>保存</CButton>{' '}
          <CButton shape="pill" className='modal-submit-btn float-right' color="secondary" onClick={() => setModalChangeUserIcon(!modalChangeUserIcon)}>キャンセル</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}


export default Setting
