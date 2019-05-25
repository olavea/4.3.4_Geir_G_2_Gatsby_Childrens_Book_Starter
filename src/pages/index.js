import React from "react";
import { Link } from "gatsby";

// import Layout from "../components/layout"
import Image from "../components/image";
import SEO from "../components/seo";

const currentPage = "/";
const prevPage = "about";
var conCurrentPage = "/";
const nextPage = "1";

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ul
      style={{
        background: `pink`,

        display: `flex`,
        flexWrap: `wrap`,
        justifyContent: `space-between`,
        listStyle: `none`,
        padding: 0,
        margin: 0,
        marginBottom: 0,
        paddingBottom: 0,
      }}
    >
      <li>
        {prevPage && (
          <Link to={`/${prevPage}`} rel="prev">
            ← {prevPage}
          </Link>
        )}
      </li>
      <li>
        {nextPage && (
          <Link to={`/${nextPage}`} rel="next">
            {nextPage} →
          </Link>
        )}
      </li>
    </ul>

    <div style={{ maxWidth: `1224px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSdaU1qxlU76iRXUClnxtVycECOt0wqjnCQ8tT6mIzPJxbwDUg/viewform?embedded=true"
      width="640"
      height="668"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >
      Loading...
    </iframe>
  </>
);

export default IndexPage;
