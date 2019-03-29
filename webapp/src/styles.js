import { styled, Box, css } from 'reakit';
import defaultTheme from 'reakit-theme-default';

export const CenterColumn = styled(Box)`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const fontSizes = ["15px", "17px", "20px", "25px", "30px", "40px"]

export const theme = {
  ...defaultTheme,
  fontSize: fontSizes,
  Heading: css`
    ${defaultTheme.Heading};
    h1& {
      font-size: ${fontSizes[4]};
    }
    h2& {
      font-size: ${fontSizes[3]};
    }
    h3& {
      font-size: ${fontSizes[2]};
    }
    h4& {
      font-size: ${fontSizes[1]};
    }
    h5& {
      font-size: ${fontSizes[0]};
    }
    h6& {
      font-size: ${fontSizes[0]};
    }
  `,
  Paragraph: css`
    ${defaultTheme.Paragraph};
    font-size: ${fontSizes[1]};
  `,
  Input: css`
    ${defaultTheme.Input};
    background: rgba(0, 0, 0, 0.04);
  `,
}
