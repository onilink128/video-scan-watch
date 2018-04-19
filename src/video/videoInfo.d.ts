/**
 * a class whith methods to get the video media attributes
 */
export declare class videoInfo {
    /**
     * initiate the settings of ffmpeg
     * @constructor
     */
    constructor();
    /**
     * generate a screenshot and returns in a callback all data from video file
     * @param videoPath the full path to video file
     * @param videoId the unique id
     * @param withScreenShot if true generate a screenshot of video
     * @param callback the calllback function called when all proccess ends
     */
    getMediaData(videoPath: string, videoId: string, withScreenShot: boolean, callback: Function): void;
}
