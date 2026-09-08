import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * The same "VJ." mark as the header and the favicon. The bold face has to be
 * passed to ImageResponse explicitly, or it falls back to a thin default.
 */
const AppleIcon = async () => {
  const spaceGrotesk = await readFile(
    join(process.cwd(), "src/app/_fonts/SpaceGrotesk-Bold.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FAF7F1",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            fontFamily: "Space Grotesk",
            lineHeight: 1,
          }}
        >
          <div
            style={{
              color: "#221E1A",
              fontSize: 96,
              fontWeight: 700,
              letterSpacing: -5,
            }}
          >
            VJ
          </div>
          <div
            style={{
              width: 17,
              height: 17,
              borderRadius: "50%",
              background: "#B0522A",
              marginLeft: 5,
              marginBottom: 3,
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Space Grotesk",
          data: spaceGrotesk,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
};

export default AppleIcon;
