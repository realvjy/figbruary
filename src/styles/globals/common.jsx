"use client";
import styled from "styled-components";
export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const Tag = styled.li`
  display: flex;
  border-radius: 14px;
  background: var(--prompt-tag-color);
  color: var(--tag-font-color);
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.1px;
  line-height: 18px;
  padding: 4px 10px;
  height: fit-content;
  text-transform: capitalize;
  @media screen and (max-width: 725px) {
    font-size: 9px;
    padding: 0px 4px;
  }

  &.onimage {
    position: absolute;
    top: 8px;
    left: 8px;
    @media screen and (max-width: 725px) {
      top: 6px;
      left: 6px;
    }
  }
  &.red {
    background: var(--red);
  }
  &.green {
    background: var(--tag-green);
  }
  &.blue {
    background: var(--tag-blue);
  }
  &.yellow {
    background: var(--tag-yellow);
  }
  &.pink {
    background: var(--tag-pink);
  }
  &.orange {
    background: var(--tag-orange);
  }
  &.purple {
    background: var(--tag-purple);
  }
  &.black {
    background: var(--tag-black);
    opacity: 0.8;
  }
  &.grad-cool {
    background-color: #6bbba6;
    background-image: linear-gradient(90deg, #566cec, #d749af 50%, #ff7c51);
  }
`;

export const PromptInfoCard = styled.div`
  max-width: 700px;
  padding: 20px;
  width: 100%;
  border-radius: 24px;
  border: 2px solid var(--prompt-card-border);
  display: flex;
  position: relative;
  background: var(--prompt-card-background);
  transition-timing-function: var(--prompt-shadow-transition);
  transition-duration: 200ms;
  transition-property: box-shadow, transform;
  &:hover {
    box-shadow: var(--prompt-card-shadow);
    transform: translateY(var(--prompt-card-translate));
  }
  margin: 40px 0;
  display: flex;
  gap: 24px;
  @media screen and (max-width: 725px) {
    border-radius: 20px;
  }
  .date-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    border: 1.5px solid #000;
    background: var(--prompt-card-date-bg);
    border-radius: 12px;
    margin: auto 0;
    h3 {
      border-radius: 11px 11px 0 0;
      background: var(--cursor-color);
      color: var(--font-dark);
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%; /* 16.8px */
      padding: 4px 8px;
      text-align: center;
      @media screen and (max-width: 725px) {
        font-size: 14px;
      }
    }
    .date-text-wrapper {
      display: flex;
      flex-direction: column;
      gap: 3px;
      padding: 17px 24px;
      color: var(--font-color);
      text-align: center;
      font-size: 44px;
      font-weight: 700;
      padding-top: 2px;
      .date {
        font-size: 50px;
        line-height: 100%;
        min-width: 60px;
        -webkit-text-stroke: 2px var(--font-dark);
        @media screen and (max-width: 725px) {
          font-size: 40px;
        }
      }
      .month {
        font-size: 24px;
        font-weight: 700;
        -webkit-text-stroke: 1px var(--font-dark);
        @media screen and (max-width: 725px) {
          font-size: 22px;
        }
      }
    }
  }

  .info-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    .credit {
      margin-top: auto;
    }
    .header {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      column-gap: 10px;
    }
    h2 {
      color: #000;
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      letter-spacing: -0.5px;
      white-space: nowrap;
      display: flex;
      align-items: center;
      text-align: center;
      -webkit-text-stroke: 1px var(--font-dark);
      gap: 10px;
      flex-wrap: wrap;
      span {
        border-radius: 12px;
        border: 1px solid #171717;
        background: var(--prompt-tag-color);
        color: #fff;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: -0.13px;
        padding: 4px 8px;
      }
    }
    p {
      margin: 0;
      color: var(--light-font-color);
      font-size: 24px;
      font-style: normal;
      line-height: 130%;
      font-weight: 400;
    }
    .credit {
      font-size: 21px;
      font-style: normal;
      font-weight: 400;
      letter-spacing: -0.48px;
      margin-top: 6px;
      .span,
      a {
        font-weight: 600 !important;
      }
    }
  }
  @media screen and (max-width: 725px) {
    padding: 13px;
    margin: 25px 0;
    gap: 12px;
    .date-wrapper {
      height: 126px;

      .date-text-wrapper {
        padding: 8px;
        font-size: 30px;
        .month {
          font-size: 20px;
        }
      }
    }
    .info-wrapper {
      h2 {
        font-size: 24px;
        letter-spacing: -0.6px;
        @media screen and (max-width: 725px) {
          font-size: 21px;
        }
      }
      .description {
        font-size: 20px;
        margin: 4px 0;
        padding-bottom: 14px;
        @media screen and (max-width: 725px) {
          font-size: 16px;
        }
      }
      .credit {
        font-size: 16px;
        @media screen and (max-width: 725px) {
          font-size: 14px;
        }
      }
    }
  }
`;
