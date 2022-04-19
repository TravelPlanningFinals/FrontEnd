import React from 'react';
import { useUser } from '../../../context/UserProvider';
import './group.css';
import GroupForm from './GroupForm';

export default function GroupDetails() {
  // --- Add user context ---
  // const { user } = useUser();
  // const flight from back end

  // Create and Edit button
  // Convert inputs to text
  // Check notes on Kanban for how to add users (gabe)
  return (
    <div>
      <GroupForm />
    </div>
  );
}
