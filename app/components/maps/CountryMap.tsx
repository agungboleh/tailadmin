"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const VectorMap = dynamic(
    () => import("@react-jvectormap/core").then((mod) => mod.VectorMap),
    { ssr: false }
);

export default function CountryMap() {
    const [worldMap, setWorldMap] = useState<any>(null);

    useEffect(() => {
        import("@react-jvectormap/world").then((mod) => {
            setWorldMap(mod.worldMill);
        });
    }, []);

    if (!worldMap) return null;

    return (
        <VectorMap
            {...({
                map: worldMap,
                backgroundColor: "transparent",
                zoomButtons: false,
                zoomOnScroll: false,
                zoomMax: 12,
                zoomMin: 1,
                zoomAnimate: true,
                zoomStep: 1.5,
                markerStyle: {
                    initial: {
                        fill: "#1447e6",
                        stroke: "none",
                        r: 4,
                    },
                    hover: {
                        stroke: "none",
                    },
                },
                markersSelectable: true,
                markers: [
                    { latLng: [39.16422123767983, -100.55452363548605], name: "United States" },
                    { latLng: [22.856111062706418, 79.54090995432662], name: "India" },
                    { latLng: [54.686112218050475, -1.4189227539365874], name: "United Kingdom" },
                    { latLng: [64.78199706857093, 16.361525924710115], name: "Sweden" },
                ],

                regionStyle: {
                    initial: {
                        fill: "#d1d5dc",
                        fillOpacity: 1,
                        stroke: "none",
                    },
                    hover: {
                        fillOpacity: 0.5,
                        cursor: "pointer",
                        fill: "#2b7fff",
                    },
                },
            } as any)}
        />
    );
}
