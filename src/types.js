/* @flow */

export type CrossDomainLocationType = {|

|};

export type CrossDomainWindowType = {|
    location : string | CrossDomainLocationType,
    self : CrossDomainWindowType,
    closed : boolean,
    open : (string, string, string) => CrossDomainWindowType,
    close : () => void,
    focus : () => void,
    top : CrossDomainWindowType,
    frames : Array<CrossDomainWindowType>,
    opener ? : CrossDomainWindowType,
    parent : CrossDomainWindowType,
    length : number,
    postMessage : (string, string) => void
|};

export type SameDomainWindowType = Object & {
    location : string | Object,
    self : CrossDomainWindowType,
    closed : boolean,
    open : (string, string, string) => CrossDomainWindowType,
    close : () => void,
    focus : () => void,
    XMLHttpRequest : typeof XMLHttpRequest,
    document : Document,
    navigator : {
        userAgent : string,
        mockUserAgent? : string
    }
};

export type DomainMatcher = string | Array<string> | $ReadOnlyArray<string> | RegExp;
