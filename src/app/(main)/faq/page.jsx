"use client";
import Community from "@/components/community";
import Faq from "@/components/faq";
import Landing from "@/components/landing";
import styled from "styled-components";

export default function Page() {
  return (
    <Section>
      <div className="wrap">
        <h2>FAQs</h2>
      </div>
      <div className="container-25">
        <DescriptionWrap className="desc-wrap">
          <div className="question border">
            <div className="ques">
              <h3>What is Figbruary?</h3>
              <p className="description">
                Figbruary is a fictional month created by combining Figma +
                February where you can experiment and design things daily to
                push the limits.
              </p>
            </div>

            <div className="ques">
              <h3>Do I have to follow prompts strictly?</h3>
              <p className="description">No</p>
            </div>
            <div className="ques">
              <h3>Do I have to post daily?</h3>
              <p className="description">No</p>
            </div>
            <div className="ques">
              <h3>If I don't understand prompt?</h3>
              <p className="description">
                It's simple to understand, but if it becomes complex, you can
                reach out to X/Twitter or the community.
              </p>
            </div>
            <div className="ques">
              <h3>Do I have to use Figma?</h3>
              <p className="description">
                No. Some prompts may be specifically for Figma, but most of them
                can be used with any graphic apps. You can also use either
                Sketch, Penpot, or maybe Illustrator. Give it a try; it's fun
                experimenting.
              </p>
            </div>
            <div className="ques">
              <h3>Is this a competition?</h3>
              <p className="description">
                No, it's not a competition. It's just for experimenting,
                learning, and pushing beyond the boundaries.
              </p>
            </div>
          </div>

          <div className="credits border">
            <div className="ques">
              <h3>Other prompt based learning events</h3>
              <div className="links">
                <a href="https://inktober.com/">Inktober</a>
                <a href="https://genuary.art/">Genuary</a>
                <a href="https://nodevember.io/">Nodevember</a>
                <a href="https://sculptober.com/">Sculptober</a>
              </div>
            </div>
          </div>
          <Community />
        </DescriptionWrap>
      </div>
    </Section>
  );
}

const Section = styled.div`
  h1 {
  }
  .wrap {
    margin: 0 auto;
    width: 840px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 40px;
    h2 {
      font-size: 50px;
      font-family: var(--bricolage-font);
      font-weight: 800;
    }

    h4 {
      font-size: 24px;
      font-weight: 500;
      margin-top: 8px;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
      padding: 20px;
    }
  }
  .p-wrap {
    margin: 0 auto;
    width: 880px;
    display: grid;
    gap: 20px;
    padding: 20px;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
      width: 100%;
    }
  }
`;

const DescriptionWrap = styled.div`
  max-width: 400px;
  font-weight: 400;
  letter-spacing: -0.2px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  .border {
    padding: 32px 24px;
    border: 1px solid rgba(150, 150, 150, 0.15);
    border-radius: 32px;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .question {
    margin-top: 20px;
  }
  .bt {
    padding: 12px 20px;
    background: linear-gradient(180deg, #2566ff 0%, #0746d9 100%), #d9d9d9;
    color: #fff;
    box-shadow: 4px 68px 19px rgba(22, 39, 126, 0.01),
      2px 44px 18px rgba(22, 39, 126, 0.04),
      1px 25px 15px rgba(22, 39, 126, 0.14),
      1px 11px 11px rgba(22, 39, 126, 0.23), 0px 3px 6px rgba(22, 39, 126, 0.27);
    border-radius: 111px;
    margin-bottom: 32px;
  }

  .arc {
    font-size: 16px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    gap: 12px;
  }
  .description {
    display: flex;
    flex-direction: column;
    white-space: pre-line;
    line-height: 140%;
    font-size: 18px;
    font-weight: 00;
  }
  .notes {
    margin: 20px 0;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.77);
  }
  .submit-steps {
    span {
      font-weight: 700;
    }
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 8px;
    a {
      opacity: 0.5;
      &:hover {
        opacity: 1;
      }
    }
  }
  .credits {
    a {
      letter-spacing: -0.5px;
      display: inline-block;
      font-weight: 600;
      line-height: 150%;
      &:hover {
        opacity: 1;
      }
    }

    p {
      font-size: 16px;
    }
    .profile {
      display: flex;
      gap: 8px;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      img {
        height: 58px;
        border-radius: 123px;
        border: 1px solid rgba(150, 150, 150, 0.15);
      }

      .com {
        width: 100px;
        font-size: 14px;
        line-height: 120%;
        margin-left: 4px;
        opacity: 0.2;
        font-weight: 600;
      }
    }
  }
  .submissions {
    font-size: 18px;
    strong {
      font-weight: 600;
    }
    p {
      margin-bottom: 12px;
      line-height: 140%;
      font-size: 16px;
    }
    a {
      margin-left: 8px;
      letter-spacing: -0.5px;
      text-decoration: underline;
      display: inline-block;
      font-weight: 600;
      line-height: 150%;
      font-size: 16px;
    }
  }
  h3 {
    font-size: 20px;
    font-weight: 700;
    display: block;
    margin-bottom: 12px;
  }
  @media screen and (max-width: 725px) {
    max-width: 90%;
    font-size: 18px;
    .submit-steps {
      margin-top: 4px;
    }
    .credits,
    .submissions {
      text-align: left;
      margin-top: 34px;
      h3 {
        font-size: 16px;
      }
    }
  }
`;
