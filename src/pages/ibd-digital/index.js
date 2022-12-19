/* ==========  REACT  |  GATSBY  |  PLUGINS  ========== */
import React, {
  // useEffect
} from "react";
import { graphql } from 'gatsby';


const IBD_Overview = (props) => {
  console.log('IBD_Overview props', props)


  return (
    <div className="ibd-index">

      IBD_Overview
    </div>
  )
};


export default IBD_Overview;




/*
    allStrapiIbdDigital {
      edges {
        node {
          Page_Title
          Page_Copy {
            data {
              Page_Copy
            }
          }
          Page_Images {
            name
            localFile {
              url
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }

*/



