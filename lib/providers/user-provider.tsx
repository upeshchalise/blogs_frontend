"use client";
import React from 'react';
import {  useUserStore } from '../stores/user-store';

const UserStoreProvider = ({ children }:{children: React.ReactNode}) => {
  const { user } = useUserStore();

  // console.log("usererre", user)

  return (
    <div>
      {children}
      {/* You can add a global user indicator here, e.g., a navbar with user info */}
    </div>
  );
};

export default UserStoreProvider;