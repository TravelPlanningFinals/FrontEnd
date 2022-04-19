import React from 'react';
import { useUser } from '../../../context/UserProvider';
import './group.css';
import GroupAddForm from './GroupAddForm';

export default function GroupDetails() {
  return (
    <div>
      <GroupAddForm />
    </div>
  );
}
