import { ImageResponse } from 'next/og';

// Image metadata
export const alt = 'solarczyk.dev';
export const size = {
  width: 800,
  height: 400,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          fontFamily: 'Inter, Roboto, sans-serif',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundImage: 'linear-gradient(0deg, #000000, #000032)',
          fontSize: 72,
          letterSpacing: -2,
          fontWeight: 700,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(180,0,255,1) 80%, rgba(145,0,255,1) 100%)',
            backgroundClip: 'text',
            // @ts-ignore
            '-webkit-background-clip': 'text',
            color: 'transparent',
          }}
        >
          solarczyk.dev
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
