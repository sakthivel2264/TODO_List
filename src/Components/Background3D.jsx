import React, { useEffect, useRef } from 'react';
import './Background.css'

const SplineBackground = ({ url }) => {
    const viewerRef = useRef(null);

    useEffect(() => {
        const loadScript = () => {
            const script = document.createElement('script');
            script.src = 'https://unpkg.com/@splinetool/viewer@1.3.8/build/spline-viewer.js';
            script.type = 'module';
            script.onload = () => {
                if (viewerRef.current) {
                    const viewerElement = document.createElement('spline-viewer');
                    viewerElement.setAttribute('url', url);
                    viewerRef.current.appendChild(viewerElement);
                }
            };
            document.body.appendChild(script);
        };

        loadScript();

        return () => {
            // Cleanup
            if (viewerRef.current) {
                viewerRef.current.innerHTML = '';
            }
        };
    }, [url]);

    return <div className="spline-container" ref={viewerRef}></div>;
};

export default SplineBackground;
