// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Returns a handler which will open a new window when activated.
 */
function searchWord() {
    return function(info, tab) {
        const cambridgeUrl = 'http://dictionary.cambridge.org/dictionary/english/';
        let searchUrl = `${cambridgeUrl}${info.selectionText}`;

        // Create a new tab to open the result page
        chrome.tabs.create({ url: searchUrl });
    };
};

/**
 * Create a context menu which will only show up for images.
 */
chrome.contextMenus.create({
    "title": "Cambridge Dic meaning",
    "type": "normal",
    "contexts": ["selection"],
    "onclick": searchWord()
});