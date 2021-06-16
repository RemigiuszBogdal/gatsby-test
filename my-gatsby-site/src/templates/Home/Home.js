import { graphql, Link } from "gatsby";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Home = ({
  pageContext,
  data: {
    homePageType: {
      homepageBlocks: [
        {
          properties: { carousel },
        },
      ],
    },
    allFile: {
      nodes: [
        {
          childImageSharp: { gatsbyImageData },
        },
      ],
    },
    products: { promotionRowProducts },
  },
}) => {
  return (
    <div>
      <span>{pageContext.name}</span>
      {carousel.map(({ properties: { boldTitle } }) => (
        <p key={boldTitle}>{boldTitle}</p>
      ))}
      <ul>
        {promotionRowProducts.map(
          ({
            properties: {
              boldTitle,
              buttonUrl: [{ url }],
            },
          }) => (
            <li key={boldTitle}>
              <Link to={url}>{boldTitle}</Link>
            </li>
          )
        )}
      </ul>
      <GatsbyImage image={gatsbyImageData} alt="image" />
    </div>
  );
};

export const query = graphql`
  query {
    homePageType {
      homepageBlocks {
        properties {
          carousel {
            properties {
              boldTitle
            }
          }
        }
      }
    }
    products {
      title
      promotionRowProducts {
        structure
        properties {
          boldTitle
          buttonUrl {
            url
          }
        }
      }
    }
    allFile(filter: { name: { eq: "screen-3" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData(width: 500, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default Home;
