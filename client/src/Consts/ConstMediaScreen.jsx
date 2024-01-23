const size = {
  mobileS: "320",
  mobileM: "375",
  mobileL: "425",
  tablet: "768",
  laptop: "966",
  laptopL: "1440",
  desktop: "2560",
};
export const device = {
  mobileS: `(min-width: ${size.mobileS}px)`,
  mobileM: `(min-width: ${size.mobileM}px)`,
  mobileL: `(min-width: ${size.mobileL}px)`,
  tablet: `(max-width: ${size.tablet}px)`,
  min_tablet: `(min-width: ${size.tablet}px)`,
  laptop: `(max-width: ${size.laptop}px)`,
  laptopL: `(max-width: ${size.laptopL}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
  desktopL: `(min-width: ${size.desktop}px)`,
};
