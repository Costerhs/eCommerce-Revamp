import React from "react"
import ContentLoader from "react-content-loader"

const UserLoader = (props) => (
    <ContentLoader
        speed={2}
        width={375}
        height={212}
        viewBox="0 0 375 212"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="117" cy="106" r="106" />
        <rect x="255" y="36" rx="0" ry="0" width="116" height="11" />
        <rect x="255" y="63" rx="0" ry="0" width="57" height="14" />
        <rect x="331" y="64" rx="0" ry="0" width="56" height="13" />
        <rect x="259" y="94" rx="0" ry="0" width="124" height="14" />
        <rect x="258" y="121" rx="0" ry="0" width="116" height="13" />
    </ContentLoader>
)

export default UserLoader
