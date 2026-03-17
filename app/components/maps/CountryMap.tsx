"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const VectorMap = dynamic(
    () => import("@react-jvectormap/core").then((mod) => mod.VectorMap),
    { ssr: false }
);

export type MarkerCountry = {
    latLng: [number, number];
    name: string;
};

interface MarkersCountryProps {
    markers: MarkerCountry[];
}

export default function CountryMap({ markers }: MarkersCountryProps) {
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
                markers,

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
