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

  const getGradientImage = (tag) => {
    const lowercaseTag = tag.toLowerCase();
    switch (lowercaseTag) {
      case "illustration":
        return "card-gradient-o.png";
      case "ui":
        return "card-gradient-s.png";
      case "animation":
        return "card-gradient-p.png";
      case "prototype":
        return "card-gradient-g.png";
      default:
        return "card-gradient-r.png";
    }
  };

  const gradientImage = getGradientImage(data.tag[0]); // Using first tag if multiple exist

  // Any special card should have gradient
  const hasGradient = isFirst || isToday || isLast;
  return (
    <Wrapper>
      <CardBase hasGradient={hasGradient}>
        <div className="bg">
          <img src="/2025/card-gradient-d.png" className="back" />
          <img src="/2025/card-shadow.png" className="shadow" />
          <img src={`/2025/${gradientImage}`} className="base" />
          <img src={`/2025/${gradientImage}`} className="hover" />
          {hasGradient && (
            <ShimmerOverlay maskSrc={"/2025/card-gradient.png"} />
          )}
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
      .back {
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
    gap: 18px;
    h4 {
      font-size: 22px;
      font-weight: 800;
      letter-spacing: -0.3px;
      font-family: var(--bricolage-font);
      @media screen and (max-width: 600px) {
        font-size: 20px;
      }
    }
    @media screen and (max-width: 600px) {
      gap: 12px;
    }
    p {
      opacity: 0.6;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.3px;
      @media screen and (max-width: 600px) {
        font-size: 16px;
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
  filter: drop-shadow(0px 3px 6px rgba(22, 39, 126, 0.07));
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
    .back {
      transform: translate(4px, -4px);
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

const ShimmerOverlay = styled.div`
  position: absolute;
  inset: 0;
  mask-image: url(${(props) => props.maskSrc});
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -75%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to right,
      transparent 0%,
      rgba(255, 255, 255, 0.8) 50%,
      transparent 100%
    );
    mix-blend-mode: overlay;
    transform: skewX(-25deg);
    animation: shimmer 3.5s ease-in-out infinite;
  }

  @keyframes shimmer {
    0% {
      left: -75%;
    }
    100% {
      left: 125%;
    }
  }
`;
