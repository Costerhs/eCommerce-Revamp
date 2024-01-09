import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={220}
        height={220}
        viewBox="0 0 220 220"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="4" y="1" rx="0" ry="0" width="220" height="120" />
        <rect x="8" y="132" rx="0" ry="0" width="220" height="15" />
        <rect x="7" y="162" rx="0" ry="0" width="98" height="15" />
    </ContentLoader>
)

export default MyLoader