import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

Tags.propTypes = {
  text: PropTypes.string
};

export default function Tags({ text }) {
  return <Tagstyled>{text}</Tagstyled>;
}

const Tagstyled = styled.div`
  display: inline-block;
  padding: 2px 10px;
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 3px;
`;
