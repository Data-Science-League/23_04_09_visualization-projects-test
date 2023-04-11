// src/components/CommitList.tsx

import { useQuery } from '@apollo/client';
import { GET_COMMIT_CONTENTS } from '../graphql/queries';
import CommitItem from './CommitItem';

const CommitList = () => {
  const { loading, error, data } = useQuery(GET_COMMIT_CONTENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.repository.commits.edges.map((edge) => (
        <CommitItem key={edge.node.id} commit={edge.node} />
      ))}
    </div>
  );
};

export default CommitList;
