import React from 'react'
import styled from 'styled-components';

const InnerLink = styled.a`
color: #61dafb;
`
export default function Link({href, title}) {
    return (
        <InnerLink
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </InnerLink>
    )
}
