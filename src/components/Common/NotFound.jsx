import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <h1>NotFound</h1>
      <button type="button" onClick={() => navigate(-1)}>
        이전페이지
      </button>
      <button type="button" onClick={() => navigate('/')}>
        홈으로 이동
      </button>
    </>
  );
}

export default NotFound;
