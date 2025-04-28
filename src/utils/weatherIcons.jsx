import {
    Cloud, CloudRain, CloudSnow, CloudLightning, Sun, CloudSun,
    Droplets, CloudDrizzle, CloudFog, CloudHail, CloudMoon
} from "lucide-react";

// Define weather icon mapping
const WEATHER_ICONS = {
    // Thunderstorms (200-299)
    thunderstorm: {
        icon: CloudLightning,
        color: "#f1c40f",
        range: [200, 299]
    },
    // Drizzle (300-399)
    drizzle: {
        icon: CloudDrizzle,
        color: "#3498db",
        range: [300, 399]
    },
    // Rain (500-599)
    rain: {
        icon: CloudRain,
        color: "#3498db",
        range: [500, 599]
    },
    // Snow (600-699)
    snow: {
        icon: CloudSnow,
        color: "#ecf0f1",
        range: [600, 699]
    },
    // Atmosphere (700-799) - fog, mist, etc.
    atmosphere: {
        icon: CloudFog,
        color: "#95a5a6",
        range: [700, 799]
    },
    // Clear sky (800)
    clear: {
        icon: Sun,
        color: "#f1c40f",
        range: [800, 800]
    },
    // Few clouds (801-802)
    fewClouds: {
        icon: CloudSun,
        color: "#f39c12",
        range: [801, 802]
    },
    // Broken/overcast clouds (803-899)
    clouds: {
        icon: Cloud,
        color: "#95a5a6",
        range: [803, 899]
    }
};

export const getWeatherIcon = (weatherId, size = 30, customColors = {}) => {
    // Find the appropriate weather type based on ID
    const weatherType = Object.keys(WEATHER_ICONS).find(key => {
        const range = WEATHER_ICONS[key].range;
        return weatherId >= range[0] && weatherId <= range[1];
    }) || 'clear'; // Default to clear if not found

    const { icon: IconComponent, color } = WEATHER_ICONS[weatherType];
    const iconColor = customColors[weatherType] || color;

    return <IconComponent size={size} color={iconColor} />;
};