import React from "react";
import * as FileSystem from "expo-file-system";
import { DownloadOptions } from "expo-file-system/src/FileSystem.types";
import { ImageProps } from "react-native";
type CachedImageProps = Omit<ImageProps, "source"> & {
    cacheKey: string;
    source: {
        uri: string;
        headers?: Record<string, string>;
        expiresIn?: number;
    };
    placeholderContent?: React.ReactNode;
};
declare const CachedImage: React.FC<CachedImageProps>;
export declare const CacheManager: {
    addToCache: ({ file, key }: {
        file: string;
        key: string;
    }) => Promise<string>;
    getCachedUri: ({ key }: {
        key: string;
    }) => Promise<string>;
    downloadAsync: ({ uri, key, options }: {
        uri: string;
        key: string;
        options: DownloadOptions;
    }) => Promise<FileSystem.FileSystemDownloadResult>;
};
export default CachedImage;
