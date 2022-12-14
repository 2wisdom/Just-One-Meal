import React from "react";
import { Link } from "react-router-dom";

import styled from "@emotion/styled";

const Wrapper = styled("div")`
  .start-btn {
    font-size: 60px;
    font-family: SBAggroB;
    font-weight: 1000;
    margin: 60px;
    padding: 20px;

    background-image: linear-gradient(to right, #000, #000 50%, #cccccc 50%);
    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    padding: 5px 0;
    position: relative;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease-in-out;
  }

  .start-btn:before {
    content: "";
    background: #000;
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
  }

  .start-btn:hover {
    cursor: pointer;
    background-position: 0;
  }

  .start-btn:hover::before {
    width: 100%;
  }
`;

export default function StartBtn() {
  return (
    <Wrapper>
      <Link to="/recipes" className="start-btn">
        Get Started?
      </Link>
    </Wrapper>
  );
}
