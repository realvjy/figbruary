"use client";
import styled from "styled-components";
import { useRive } from "@rive-app/react-canvas"; // Change this import

export default function Community() {
  const { RiveComponent, isLoaded } = useRive({
    src: "/folder-open.riv",
    stateMachines: "State Machine 1",
    autoplay: true, // Add this
  });

  return (
    <Wrapper>
      <div className="credits">
        <h3>❤️ Thank you</h3>
        <p>
          This not possibile without contribution of time to share the cool
          prompts by all community members and specially
        </p>
        <div className="profile">
          <a href="https://x.com/miggi">
            <img src="profile/miggi.png" />
          </a>
          <a href="https://x.com/rogie">
            <img src="profile/rogie.png" />
          </a>
          <a href="https://x.com/efedorenko">
            <img src="profile/efedorenko.png" />
          </a>
          <a href="https://x.com/vyshnav_xyz">
            <img src="profile/vyshnav_xyz.png" />
          </a>
          <a href="https://x.com/realvjy">
            <img src="profile/realvjy.png" />
          </a>
          <a href="https://x.com/o_lonks">
            <img src="profile/o_lonks.png" />
          </a>
          <a href="https://x.com/gleb_sexy">
            <img src="profile/gleb_sexy.png" />
          </a>
          <div className="com">And all community</div>
          {/* <a href="https://x.com/miggi">@miggi</a>
              <a href="https://x.com/pablostanley">@pablostanley</a>,
              <a href="https://x.com/realvjy">@realvjy</a>,
              <a href="https://x.com/efedorenko">@efedorenko</a>,
              <a href="https://x.com/vyshnav_xyz">@vyshnav_xyz</a>,
              <a href="https://x.com/o_lonks">@o_lonks</a>,
              <a href="https://x.com/mrstev3n">@mrstev3n</a>, & community
              members for all prompt credits */}
        </div>
      </div>
    </Wrapper>
  );
}

const Section = styled.section`
  margin: 80px 0;
  margin-top: 40px;
  /* min-height: 400px; // Add this */
`;

const Logo = styled.div`
  img {
    width: 128px;
    filter: drop-shadow(2px 44px 18px rgba(22, 39, 126, 0.04))
      drop-shadow(1px 25px 15px rgba(22, 39, 126, 0.14))
      drop-shadow(1px 11px 11px rgba(22, 39, 126, 0.23))
      drop-shadow(0px 3px 6px rgba(22, 39, 126, 0.27));
  }
`;

const Wrapper = styled.div`
  max-width: 400px;
  font-weight: 400;
  letter-spacing: -0.2px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  .border {
    padding: 32px 24px;
    border: 1px solid rgba(150, 150, 150, 0.15);
    border-radius: 32px;
    margin: 0;
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
  .credits {
    padding: 32px 24px;
    border: 1px solid rgba(150, 150, 150, 0.15);
    border-radius: 32px;
    margin: 0;
    a {
      letter-spacing: -0.5px;
      text-decoration: underline;
      display: inline-block;
      font-weight: 600;
      line-height: 150%;
      &:hover {
        opacity: 1;
      }
    }

    p {
      margin-bottom: 18px;
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
    font-size: 22px;
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
