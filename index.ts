//* Classes */
import { videoScan } from "./src/scan/videoScan";
import { videoWatcher } from "./src/watcher/videoWatcher";
import { IOptions } from "./src/commom/ICommom";

/**
 * the main class of video Analyser
 */
export class Video {
    private options?: IOptions;

    /**
     * constructor
     * @param options the options of data generation
     */
    constructor(options?: IOptions) {
        this.options = options;
    }

    /**
     * create a new instance of video scan
     * @param folder the folder to scan if not provided will get from config file
     * @return a instance of videoScan
     */
    public createVideoScan(folder: string): videoScan {
        return new videoScan(folder, this.options);
    }
    /**
     * create a new instance of video wacher
     * @param folder the folder to scan if not provided will get from config file
     * @return a instance fo videoWatcher
     */
    public createVideoWatch(folder: string): videoWatcher {
        return new videoWatcher(folder, this.options);
    }
}