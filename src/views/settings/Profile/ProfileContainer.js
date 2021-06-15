import React, { useState, useEffect } from 'react'

import './setting.css'
import { ProfileInformation } from './ProfileInformation'
import { ProfileMail } from './ProfileMail'
import { ProfileSubmail } from './ProfileSubmail'
import axios from 'axios'

export const ProfileContainer = () => {

  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(function (response) {
        // handle success
        setProfileData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

  }, []
  );

  return (
    <>
      <h1>個人設定1</h1>
      <ProfileInformation info={profileData} />
      <ProfileMail />
      <ProfileSubmail info={profileData} />
    </>
  )
}
