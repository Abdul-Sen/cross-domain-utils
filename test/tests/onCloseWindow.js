/* @flow */

import { assert } from 'chai';

import { closeWindow, onCloseWindow } from '../../src';
import { getSameDomainWindow } from '../win';


describe('onCloseWindow test cases ', () => {

    it('detects when same domain window closes', () => {

        const win = getSameDomainWindow();

        let closeCallbackCalled = false;

        onCloseWindow(win, () => {
            // on win close call this func
            closeCallbackCalled = true;
        }, 500, 3000);

        closeWindow(win);

        const expectedResult = true;

        assert(closeCallbackCalled === expectedResult, `Expected result to be ${ expectedResult.toString() } but received ${ closeCallbackCalled.toString() }`);
    });

});
