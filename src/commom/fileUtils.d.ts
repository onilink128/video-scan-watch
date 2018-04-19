/**
 * a class containing commom methods to work with files
 */
export declare class fileUtils {
    /**
     * validate if the extension of file is a supported video file
     * @param fileName the file name
     * @return true if the file is supported
     */
    static isVideoFile(fileName: string): Boolean;
    /**
     * create a hash from the file
     * @param path the full path to the file
     * @return a string containing the hash of file
     */
    static createFileHash(path: string): string;
    /**
     * get the filen name from a path
     * @param fullPath the full path to the file
     * @return a string containing the file name
     */
    static getFileNameFromFullPath(fullPath: string): string;
    /**
     * get the path to the file from the full path
     * @param fullPath the full path to the file
     * @return a string containig the path to the file
     */
    static getPathFromFullPath(fullPath: string): string;
    /**
     * convert the image file to base64 string
     * @param fullPath the full path to the image file
     * @return the base64 string
     */
    static getBase64FromImage(fullPath: string): string;
    /**
     * remove the image file from temp folder
     * @param fullPath the full path to the image file
     */
    static deleteImage(fullPath: string): void;
}
