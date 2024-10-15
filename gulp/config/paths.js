const srcFolder = './src';
const buildFolder = './app';

export const paths = {
    base: {
        src: srcFolder,
        build: buildFolder
    },
    srcSvg: `${srcFolder}/images/svg/**.svg`,
    srcImgFolder: `${srcFolder}/images`,
    buildImgFolder: `${buildFolder}/images`,
    srcScss: `${srcFolder}/styles/**/*.scss`,
    buildCssFolder: `${buildFolder}/css`,
    srcFullJs: `${srcFolder}/js/**/*.js`,
    srcMainJs: `${srcFolder}/js/main.js`,
    buildJsFolder: `${buildFolder}/js`,
    srcComponentsFolder: `${srcFolder}/components`,
    assetsFolder: `${srcFolder}/assets`
}