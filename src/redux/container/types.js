
'use strict';

import {CALL_API} from '../../common/keys';

type APIOptions = Object;

export type Action =
    { type: 'LOAD_NOVEL_BACKSTAGE',   endpoint: string, options: APIOptions } |
    { type: 'RELOAD_NOVEL_BACKSTAGE', endpoint: string, options: APIOptions };

export type ThunkAction = { [CALL_API]: Action, params: Object }
export type Dispatch = (action: Action | ThunkAction) => any;
export type GetState = () => Object;













