// src/components/CommitItem.tsx

import React from 'react';

const CommitItem = ({ commit }) => {
  return (
    <div className="commit-item">
      <h3>{commit.messageHeadline}</h3>
      <p>Author: {commit.author.name}</p>
      <p>Date: {commit.author.date}</p>
      <p>Commit hash: {commit.oid.slice(0, 7)}</p>
    </div>
  );
};

export default CommitItem;
