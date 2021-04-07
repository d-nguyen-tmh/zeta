import React, { useState, useEffect } from 'react'

import {
  CCol,
  CRow,
  CButton,
  CImg,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModal,
  CModalTitle,
  CFormGroup,
  CLabel,
  CInputRadio,
  CInputFile

} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import axios from 'axios'

import customIcon1 from '../../../assets/img/1.jpeg'
import customIcon2 from '../../../assets/img/2.jpeg'
import customIcon3 from '../../../assets/img/3.jpg'
import customIcon4 from '../../../assets/img/4.png'
import customIcon5 from '../../../assets/img/5.JPG'

const styleDefault = {
  'width': '50px',
  'height': '50px',
  'color': '#fff',
  'lineHeight': '50px'
}

const iconUserList = [
  {
    'id': 1,
    'style': { ...styleDefault, 'backgroundColor': '#FFCF55' }
  },
  {
    'id': 2,
    'style': { ...styleDefault, 'backgroundColor': '#48CFAE' }
  },
  {
    'id': 3,
    'style': { ...styleDefault, 'backgroundColor': '#FB6E52' }
  },
  {
    'id': 4,
    'style': { ...styleDefault, 'backgroundColor': '#AC92ED' }
  },
  {
    'id': 5,
    'style': { ...styleDefault, 'backgroundColor': '#50C1E9' }
  },
  {
    'id': 99,
    'style': {
      ...styleDefault,
      'border': '1px solid #C3C3C3',
      'color': '#C3C3C3'
    }
  }
]

export const ProfileUserIcon = (props) => {
  const [modalChangeUserIcon, setModalChangeUserIcon] = useState(false)
  const [radioInput, setRadioInput] = useState(false)
  const [isSelectCustomIcon, setIsSelectCustomIcon] = useState(false)
  const [imageAvt, setImageAvt] = useState({ name: "", preview: "" })
  const [customIcon, setCustomIcon] = useState([customIcon1, customIcon2, customIcon3, customIcon4, customIcon5]);

  useEffect(() => {
    setIsSelectCustomIcon(props.info.custom_icon_name !== "" ? true : false);
    setRadioInput(props.info.icon_id);
    if (!!(props.info.custom_icon_name)) {
      var iconId = parseInt(props.info.custom_icon_name.charAt(0));
      console.log(iconId);
      setCustomIconById(iconId);
    } else {
      setCustomIcon(customIcon1);
    }
  }, [props]
  );

  const setCustomIconById = (iconId) => {
    console.log(iconId);
    switch (iconId) {
      case 1:
        setCustomIcon(customIcon1);
        setImageAvt({
          name: props.info.custom_icon_name,
          preview: customIcon1
        });
        return;
      case 2:
        setCustomIcon(customIcon2);
        setImageAvt({
          name: props.info.custom_icon_name,
          preview: customIcon2
        });
        return;
      case 3:
        setCustomIcon(customIcon3);
        setImageAvt({
          name: props.info.custom_icon_name,
          preview: customIcon3
        });
        return;
      case 4:
        setCustomIcon(customIcon4);
        setImageAvt({
          name: props.info.custom_icon_name,
          preview: customIcon4
        });
        return;
      default:
        setCustomIcon(customIcon5);
        setImageAvt({
          name: props.info.custom_icon_name,
          preview: customIcon5
        });
        return;
    }
  }

  const handleChangeAvt = (e) => {
    if (e.target.files) {
      setRadioInput(99);
      setImageAvt({
        name: e.target.files[0].name,
        preview: URL.createObjectURL(e.target.files[0])
      });
      setIsSelectCustomIcon(true);
    }
  }

  const handleChangeIcon = (e) => {
    setRadioInput(e);
  }

  const saveAvatar = (e) => {
    // update database
    var profileData = props.info;
    profileData.icon_id = radioInput;

    if (radioInput == 99) {
      profileData.custom_icon_name = imageAvt.name;
      console.log(imageAvt.name.charAt(0));
      setCustomIcon(imageAvt.preview);
    }

    axios.put('http://localhost:3000/users', {
      "icon_id": profileData.icon_id,
      "custom_icon_name": profileData.custom_icon_name,
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
        setModalChangeUserIcon(!modalChangeUserIcon);
      })
      .catch(function (error) {
        console.log(error);
        setModalChangeUserIcon(!modalChangeUserIcon);
      });

  }

  const cancelAvatar = () => {
    setRadioInput(props.info.icon_id);
    if (radioInput !== 99) {
      // profileData.custom_icon_name = "";
    }
    var iconId = parseInt(props.info.custom_icon_name.charAt(0));
    setCustomIconById(iconId);
    setModalChangeUserIcon(!modalChangeUserIcon);
  }

  return (
    <>
      <CRow className="align-items-center">
        <CCol xs="3">
          <b>ユーザーアイコン</b>
        </CCol>
        <CCol xs="4">
          <CLabel variant="checkbox">
            <div className={`rounded-circle text-center img-round ${props.info.icon_id === 99 ? 'hidden' : ''}`} style={(props.info.icon_id !== undefined && props.info.icon_id !== 99) ? iconUserList[props.info.icon_id - 1].style : iconUserList[0].style}>
              <CIcon name="cil-user" size="2xl" />
            </div>
          </CLabel>
          <CImg src={customIcon} width='50px' height='50px' className={`img-round ${props.info.icon_id !== 99 ? 'hidden' : ''}`}></CImg>
        </CCol>
        <CCol xs="5">
          <CButton
            onClick={() => setModalChangeUserIcon(!modalChangeUserIcon)}
            block shape="pill" color="primary" className="setting-button float-right">設定</CButton>
        </CCol>
      </CRow>

      <CModal
        show={modalChangeUserIcon}
        onClose={() => setModalChangeUserIcon(!modalChangeUserIcon)}
        size="md"
      >
        <CModalHeader closeButton>
          <CModalTitle>ユーザーアイコン</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {
            iconUserList.map((item, index) =>
            (
              <CFormGroup variant="checkbox" inline className="form-user-icon" key={index}>
                <CInputRadio
                  className="form-check-input" id={`radio${item.id}`}
                  onChange={() => handleChangeIcon(item.id)}
                  name="radios" value={item.id}
                  checked={radioInput == item.id}

                />
                <CLabel variant="checkbox" htmlFor={`radio${item.id}`}>
                  <div className="rounded-circle text-center" style={item.style}>
                    {
                      item.id !== 99
                        ? <CIcon name="cil-user" size="2xl" />
                        : (
                          isSelectCustomIcon
                            ? <CImg src={imageAvt.preview} className='rounded-circle' width='50' height='50' />
                            : <CIcon name="cil-image-plus" size="xl" />
                        )

                    }
                  </div>
                </CLabel>
              </CFormGroup>
            )
            )
          }
          <CFormGroup variant="checkbox" inline className="form-user-icon">
            <CLabel htmlFor="file-input" className="btn btn-dark">
              画像のアップロード
            </CLabel>
            <CInputFile
              id="file-input" name="file-input"
              className="input-file"
              onChange={handleChangeAvt}
              accept="image/gif, image/jpg, image/png"
            />
          </CFormGroup>
        </CModalBody>
        <CModalFooter className='em-modal-footer'>
          <div className="float-left sub-mail-memo mr-auto">登録済みのアドレスを削除する</div>
          <CButton shape="pill" className='modal-submit-btn float-right' color="primary" onClick={() => saveAvatar()}>保存</CButton>{' '}
          <CButton shape="pill" className='modal-submit-btn float-right' color="secondary" onClick={() => cancelAvatar()}>キャンセル</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}
