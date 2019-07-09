document.title = 'FT-Island';

document.body.appendChild<HTMLDivElement>(((): HTMLDivElement => {
    const appContainer: HTMLDivElement = document.createElement('div');
    appContainer.id = 'app-container';

    appContainer.appendChild<HTMLDivElement>(((): HTMLDivElement => {
        const valueTextContainer: HTMLDivElement = document.createElement('div');
        valueTextContainer.id = 'value-text-container';

        valueTextContainer.appendChild<HTMLDivElement>(((): HTMLDivElement => {
            const valueText: HTMLDivElement = document.createElement('div');
            valueText.id = 'value-text';
            valueText.innerText = '100T';

            return valueText;
        })());

        valueTextContainer.appendChild<HTMLDivElement>(((): HTMLDivElement => {
            const valueTextInfo: HTMLDivElement = document.createElement('div');
            valueTextInfo.id = 'value-text-info';
            valueTextInfo.innerText = 'Hello!';

            return valueTextInfo;
        })());

        return valueTextContainer;
    })());

    return appContainer;
})());
