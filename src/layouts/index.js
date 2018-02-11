import React from "react";
import { Helmet } from "react-helmet";
import appleTouchIcon from '../images/favicon/apple-touch-icon.png';
import favicon32 from '../images/favicon/favicon-32x32.png';
import favicon16 from '../images/favicon/favicon-16x16.png';
// import manifest from '../images/favicon/site.webmanifest';
import safariPinnedTab from '../images/favicon/safari-pinned-tab.svg';

export default ({ children }) => (
  <div>
    <Helmet>
      <title>Ingsecom</title>
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
      {/* <link rel="manifest" href="/site.webmanifest" /> */}
      <link rel="mask-icon" href={safariPinnedTab} color="#002897" />
      <meta name="msapplication-TileColor" content="#002897" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
    {children()}
  </div>
);