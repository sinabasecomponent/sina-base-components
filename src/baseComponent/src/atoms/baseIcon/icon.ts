// //@ts-ignore
// import icomoonEOT from "@plus-base/asset/src/icomoon/fonts/icomoon.eot";
// //@ts-ignore
// import icomoonTTF from "@plus-base/asset/src/icomoon/fonts/icomoon.ttf";
// //@ts-ignore
// import icomoonWOFF from "@plus-base/asset/src/icomoon/fonts/icomoon.woff";

// import { jss } from "react-jss";
// import { generateIndex } from "reactjs-view-core";
// import { IconsNames } from "./iconNames";
// import { iconsContent } from "./iconsContent";

// const iconsStyleSheet = jss
//   .createStyleSheet<IconsNames>(
//     {
//       ["@font-face" as any]: [
//         {
//           fontFamily: "icomoon",
//           src: `url(${icomoonWOFF}) format('woff')`,
//           fallbacks: [
//             {
//               src: `url(${icomoonEOT}#iefix) format('embedded-opentype')`,
//             },
//             {
//               src: `url(${icomoonTTF}) format('truetype')`,
//             },
//             {
//               src: `url(${icomoonEOT}) format('eot')`,
//             },
//           ] as any,
//         },
//       ],
//       ...Object.keys(iconsContent).reduce(
//         (pre, cur) => ({
//           ...pre,
//           [`${cur}`]: {
//             fontWeight: "normal",
//             fontFamily: "icomoon !important",
//             fontStyle: "normal",
//             fontVariant: "normal",
//             textTransform: "none",
//             speak: "never",
//             webkitFontSmoothing: "antialiased",
//             mozOsxFontSmoothing: "grayscale",
//             "&:before": {
//               fontFamily: "icomoon !important",
//               //@ts-ignore
//               content: `"\\${iconsContent[cur]}"`,
//             },
//           },
//         }),
//         {},
//       ),
//     },
//     {
//       index: generateIndex("atoms", "module"),
//     },
//   )
//   .attach();

// export default iconsStyleSheet.classes;
export {}