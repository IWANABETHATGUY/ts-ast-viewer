/* tslint:disable */
export default {
    fileName: `/lib.es2017.intl.d.ts`,
    text: `/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>


declare namespace Intl {
    type DateTimeFormatPartTypes = "day" | "dayPeriod" | "era" | "hour" | "literal" | "minute" | "month" | "second" | "timeZoneName" | "weekday" | "year";

    interface DateTimeFormatPart {
        type: DateTimeFormatPartTypes;
        value: string;
    }

    interface DateTimeFormat {
        formatToParts(date?: Date | number): DateTimeFormatPart[];
    }
}
`
};