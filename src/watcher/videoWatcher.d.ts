import { IOptions } from "../commom/ICommom";
/**
 * Class responsible for watching the changes in folder
 */
export declare class videoWatcher {
    private withScreenShot;
    private strongId;
    private watcher;
    private objVideoInfo;
    private folder;
    constructor(folder: string, options?: IOptions);
    /**
     * start watching a folder
     * @param folder the folder to be watched
     * @param callBackAddFile callback function to be called when a file is added.
     * @param callbackRemoveFile callback function to be called when a file is removed.
     */
    start(callBackAddFile: Function, callbackRemoveFile: Function): void;
    /**
     * stop the watcher
     */
    stop(): void;
}
