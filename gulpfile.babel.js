import gulp from "gulp";
import browserSync from 'browser-sync';
import { paths } from './gulp/config/paths.js';
import { styles } from './gulp/tasks/styles.js';

global.app = {
    gulp,
    isProd: process.argv.includes('--build'),
    paths
}

const watcher = () => {
    browserSync.init({
        server: {
            baseDir: `${app.paths.base.build}`
        },
        notify: false,
        port: 3000
    })

    gulp.watch(app.paths.srcScss, styles)
}