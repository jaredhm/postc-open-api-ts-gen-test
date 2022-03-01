/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AttachmentArchiveEntry } from './AttachmentArchiveEntry';

export type AttachmentArchive = {
    moreAvailable?: boolean;
    totalNumberOfEntriesAvailable?: number;
    totalEntryCount?: number;
    entries?: Array<AttachmentArchiveEntry>;
};
