import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import profileImage from './profile.svg';
import { rhythm } from '../../utils/typography';

function Bio() {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const { author, description } = data.site.siteMetadata;

        return (
          <div
            style={{
              display: 'flex',
              marginBottom: rhythm(2.5),
            }}
          >
            <img
              src={profileImage}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                width: rhythm(2),
                height: rhythm(2),
                borderRadius: '50%',
              }}
            />
            <p style={{ marginBottom: 0 }}>{description}</p>
          </div>
        );
      }}
    />
  );
}

const query = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
        description
      }
    }
  }
`;

export default Bio;
