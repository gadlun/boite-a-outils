(function () {
    let scriptOtAutoBlockSrc = '';
    if (isActivebooksPearsonEu()) {
        scriptOtAutoBlockSrc =
            'https://cdn.cookielaw.org/consent/b75f88f9-a6d3-4bc4-9ba3-258150c05e25/OtAutoBlock.js';
    } else if (isEdeskPearsonPl() || isMcourserEurope6()) {
        scriptOtAutoBlockSrc =
            'https://cdn.cookielaw.org/consent/f401d0a3-cd2f-42b9-8f0d-3b5e0e9ff6ce/OtAutoBlock.js';
    } else if (isEnglishconnectPearsonCom() || isMcourserEurope8()) {
        scriptOtAutoBlockSrc =
            'https://cdn.cookielaw.org/consent/2e7b549d-17ab-44f4-96e4-92114c9f48b8/OtAutoBlock.js';
    }

    if (
        isActivebooksPearsonEu() ||
        isEnglishconnectPearsonCom() ||
        isEdeskPearsonPl() ||
        isMcourserEurope6() ||
        isMcourserEurope8()
    ) {
        let scriptOtAutoBlock = document.createElement('script');

        scriptOtAutoBlock.src = scriptOtAutoBlockSrc;
        scriptOtAutoBlock.type = 'text/javascript';
        document.head.insertBefore(
            scriptOtAutoBlock,
            document.head.firstElementChild
        );
    }
})();
