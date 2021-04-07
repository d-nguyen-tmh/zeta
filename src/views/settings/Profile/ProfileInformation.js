import React, { useState } from 'react'

import {
  CCard,
  CCardHeader,
  CCardBody,
  CCol,
  CRow
} from '@coreui/react'

import { ProfileChangePassword } from './ProfileChangePassword'
import { ProfileUserIcon } from './ProfileUserIcon'

export const ProfileInformation = (props) => {

  return (
    <>
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
                  {props.info.mail_address}
                </CCol>
              </CRow>
              <hr />
              <ProfileChangePassword info={props.info} />
              <ProfileUserIcon info={props.info} />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}
