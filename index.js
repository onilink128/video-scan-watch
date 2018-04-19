"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//* Classes */
const videoScan_1 = require("./src/scan/videoScan");
const videoWatcher_1 = require("./src/watcher/videoWatcher");
/**
 * the main class of video Analyser
 */
class Video {
    /**
     * constructor
     * @param options the options of data generation
     */
    constructor(options) {
        this.options = options;
    }
    /**
     * create a new instance of video scan
     * @param folder the folder to scan if not provided will get from config file
     * @return a instance of videoScan
     */
    createVideoScan(folder) {
        return new videoScan_1.videoScan(folder, this.options);
    }
    /**
     * create a new instance of video wacher
     * @param folder the folder to scan if not provided will get from config file
     * @return a instance fo videoWatcher
     */
    createVideoWatch(folder) {
        return new videoWatcher_1.videoWatcher(folder, this.options);
    }
}
exports.Video = Video;
//# sourceMappingURL=index.js.map