import React from 'react';
import { useSelector } from 'react-redux';
import Fail from './ApproveRejectFail';
import Success from './ApproveRejectSuccess';

import Confirm from './ConfirmModal';
import Reason from './ReasonModal';

export default function ApproveRejectModal({ navigation }) {
  const state = useSelector(s => s.approve_reject);
  const {
    approve,
    success,
    fail,
    reject,
    confirmScreen,
    reasonModal,
    send,
    cancel,
  } = state;

  const confirmCond = () => {
    if (confirmScreen) {
      return approve || reject || send;
    }
    return null;
  };

  const reasonCond = () => {
    if (reasonModal) {
      return reject || send;
    }
    return null;
  };

  const successCond = () => {
    if (success) {
      return approve || reject || send;
    }
    return null;
  };

  const failCond = () => {
    if (fail) {
      return approve || reject || send;
    }
    return null;
  };

  return (
    <>
      {/* CONFIRMS */}
      {confirmCond() && <Confirm />}
      {cancel && confirmScreen && (
        <Confirm cancel={() => navigation.goBack()} />
      )}

      {/* REASONS */}
      {reasonCond() && <Reason />}

      {/* SUCCESSES */}
      {successCond() && <Success />}

      {/* FAILS */}
      {failCond() && <Fail />}
    </>
  );
}
