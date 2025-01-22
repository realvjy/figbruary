"use client";
import styled from "styled-components";
import { Tag25 } from "./2025Styled";
import { parseDate, getTagClass, getCurrentDate } from "@/lib/utils";

export default function PromptCard({ data }) {
  const date = parseDate(data.date);
  const formatedDate = date.day + " " + date.month;
  const { day: currentDay, month: currentMonth } = getCurrentDate();

  // Determine card states
  const isFirst = data.day === 1 && currentMonth < 2;
  const isToday = data.day === currentDay && currentMonth === 2;
  const isLast = data.day === 28 && currentMonth > 2;

  // Determine status text and gradient
  let statusText = "";
  if (isFirst) statusText = "first";
  if (isToday) statusText = "today";
  if (isLast) statusText = "last";

  // Any special card should have gradient
  const hasGradient = isFirst || isToday || isLast;
  return (
    <Wrapper>
      <CardBase hasGradient={hasGradient}>
        <div className="bg">
          <img src="/2025/card-shadow.png" className="shadow" />
          <img src="/2025/card-base.png" className="base" />
          <img src="/2025/card-gradient.png" className="hover" />
        </div>
      </CardBase>
      <ContentWrap>
        <Content>
          <div className="p-date">
            <h3>
              {formatedDate}
              {statusText && (
                <div className="today">
                  <div className="blob" />
                  {statusText}
                </div>
              )}
            </h3>
          </div>
          <div className="new-prompt">
            <div className="p-content">
              <h4>{data.name}</h4>
              <p>{data.description}</p>
            </div>
            <div className="p-meta">
              <h5>
                Credit:<a href={data.creditLink}>{data.credit}</a>
              </h5>
              <div className="tag-wrap">
                {data.tag.map((tag) => (
                  <Tag25 className={getTagClass(tag)} key={tag}>
                    {tag}
                  </Tag25>
                ))}
              </div>
            </div>
          </div>
        </Content>
      </ContentWrap>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  position: relative;
  width: 414px;
  aspect-ratio: 414/300; // Add aspect ratio instead of fixed height
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translate(12px, -12px);
    .bg {
      .hover {
        opacity: 1;
      }
      .shadow {
        opacity: 0.6;
        transform: translate(-12px, 12px);
      }
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    aspect-ratio: 414/300; // Maintain aspect ratio on mobile
  }
`;
const ContentWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  padding: 32px;
  height: 100%;
  flex-direction: column;
  gap: 20px;
  text-align: left;
  @media screen and (max-width: 600px) {
    padding: 24px;
    gap: 12px;
  }
  h1 {
  }
  h3 {
    font-size: 24px;
    letter-spacing: -0.7px;
    font-weight: 600;
    margin-top: 8px;
    @media screen and (max-width: 600px) {
      font-size: 22px;
    }
  }
  .new-prompt {
    display: flex;
    flex-direction: column;
    gap: 32px;
    height: 100%;
    justify-content: space-between;
    .p-meta {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      h5 {
        font-size: 15px;

        a {
          font-weight: 500;
          padding: 2px 8px;
          border-radius: 12px;
          &:hover {
            background: rgba(150, 150, 150, 0.1);
          }
        }
        @media screen and (max-width: 600px) {
          font-size: 13px;
        }
      }
    }
  }
  .p-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    h4 {
      font-size: 20px;
      font-weight: 800;
      letter-spacing: -0.3px;
      font-family: var(--bricolage-font);
      @media screen and (max-width: 600px) {
        font-size: 16px;
      }
    }
    @media screen and (max-width: 600px) {
      gap: 8px;
    }
    p {
      opacity: 0.6;
      font-size: 16px;
      @media screen and (max-width: 600px) {
        font-size: 14px;
      }
    }
  }
  .p-date {
    display: flex;
    h3 {
      display: flex;
      align-items: center;
      gap: 12px;
      .today {
        font-size: 12px;
        font-family: var(--inter-font);
        background-color: var(--white);
        display: flex;
        border-radius: 14px;
        font-weight: 500;
        letter-spacing: -0.1px;
        line-height: 14px;
        padding: 2px 6px;

        height: fit-content;
        text-transform: capitalize;
        position: relative;
        align-items: center;
        border: 1px solid rgba(150, 150, 150, 0.2);
        .text {
          display: flex;
          align-items: center;
          height: 10px;
        }
        .blob {
          border-radius: 50%;
          margin: 4px;
          height: 8px;
          width: 8px;
          margin-left: 2px;
          transform: scale(1) translateX(-4px);
          animation: pulse-black 2s infinite;
          background: rgba(0, 221, 98, 1);
          box-shadow: 0 0 0 0 rgba(51, 217, 178, 1);
          animation: pulse-green 2s infinite;
        }
      }
    }
  }
`;

const CardBase = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  filter: drop-shadow(2px 44px 18px rgba(22, 39, 126, 0.04));
  .bg {
    position: relative;
    height: 100%;
    width: 100%;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.3s ease;
    }
    .hover {
      opacity: ${(props) => (props.hasGradient ? 1 : 0)};
    }
    .shadow {
      opacity: 0;
    }
  }

  &:hover {
    .hover {
      opacity: 1;
    }
  }
`;
