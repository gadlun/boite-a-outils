(function () {
    let dataDomainScript = '';
    if (isActivebooksPearsonEu()) {
        dataDomainScript = 'b75f88f9-a6d3-4bc4-9ba3-258150c05e25';
    } else if (isEdeskPearsonPl() || isMcourserEurope6()) {
        dataDomainScript = 'f401d0a3-cd2f-42b9-8f0d-3b5e0e9ff6ce';
    } else if (isEnglishconnectPearsonCom() || isMcourserEurope8()) {
        dataDomainScript = '2e7b549d-17ab-44f4-96e4-92114c9f48b8';
    }

    if (
        isActivebooksPearsonEu() ||
        isEnglishconnectPearsonCom() ||
        isEdeskPearsonPl() ||
        isMcourserEurope6() ||
        isMcourserEurope8()
    ) {
        let body = document.getElementsByTagName('body')[0];
        let input = document.createElement('input');
        input.type = 'hidden';
        input.id = 'pi_user_id';
        body.appendChild(input);

        //<!-- OneTrust Cookies Consent Notice start for activebooks.pearson.eu -->
        let scriptOtSDKStub = document.createElement('script');

        scriptOtSDKStub.src =
            'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js';
        scriptOtSDKStub.type = 'text/javascript';
        scriptOtSDKStub.setAttribute('data-domain-script', dataDomainScript);
        document.body.appendChild(scriptOtSDKStub);
    }
})();
