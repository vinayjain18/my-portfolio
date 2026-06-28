import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const AppleIcon = () => {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FFFFFF",
        }}
      >
        <div
          style={{
            width: 148,
            height: 148,
            borderRadius: "50%",
            border: "10px solid #BF5B26",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#BF5B26",
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: -2,
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          VJ
        </div>
      </div>
    ),
    { ...size }
  );
};

export default AppleIcon;
