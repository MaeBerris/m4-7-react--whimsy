import React from "react";
import styled from "styled-components";
import { TweetContext } from "../TweetContext";

const Stats = ({ number, value }) => {
  return (
    <SingleStat>
      <BoldStat>{number}</BoldStat> {value}
    </SingleStat>
  );
};

const SingleStat = styled.div`
  margin-right: 25px;
`;

const BoldStat = styled.span`
  font-weight: 700;
  color: black;
`;

export default Stats;
