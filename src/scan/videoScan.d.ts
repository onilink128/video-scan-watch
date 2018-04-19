/** interfaces */
import { IVideoScan, ICallbackItemFunction, ICallbackEndFunction } from "./IScan";
import { IOptions } from "../commom/ICommom";
/**
 * Class responsible for scanning a directory by analyzing video files
 */
export declare class videoScan implements IVideoScan {
    private withScreenShot;
    private strongId;
    private walker;
    private objVideoInfo;
    private folder;
    /**
     * @constructor
     * @param folder The folder containing the videos to scan.
     */
    constructor(folder: string, options?: IOptions);
    /**
     * start a scan on videos in configured folder
     * @param callbackItemScanned a callback function called every time a video item is scanned
     * @param callbackEndScan a callback function called when the scan ends.
     */
    start(callbackItemScanned: ICallbackItemFunction, callbackEndScan?: ICallbackEndFunction | undefined): void;
}
