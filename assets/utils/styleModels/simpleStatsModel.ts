export function simpleStatsCSS(style: any): string {
    let css = `
        .simple-stat-card {
            coner-shape: ${style.brShape} !important;
            border-width: ${style.brWidth} !important;
            border-radius: ${style.brRadius} !important;
            border-color: ${style.brColor} !important;
            border-style: ${style.brStyle} !important;
        }`;
    return css
}