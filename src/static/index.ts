document.title = 'FT-Island';

const appContainer: HTMLDivElement = document.createElement('div');
appContainer.id = 'app-container';
document.body.appendChild<HTMLDivElement>(appContainer);

const valueTextContainer: HTMLDivElement = document.createElement('div');
valueTextContainer.id = 'value-text-container';
appContainer.appendChild<HTMLDivElement>(valueTextContainer);

const valueText: HTMLDivElement = document.createElement('div');
valueText.id = 'value-text';
valueText.innerText = '100톤';
valueTextContainer.appendChild<HTMLDivElement>(valueText);

const valueTextInfo: HTMLDivElement = document.createElement('div');
valueTextInfo.id = 'value-text';
valueTextInfo.innerText = '의 음식이 버려졌어요!';
valueTextContainer.appendChild<HTMLDivElement>(valueTextInfo);

const dataContainer: HTMLDivElement = document.createElement('div');
dataContainer.id = 'data-container';
dataContainer.innerText = 'DATA';
appContainer.appendChild<HTMLDivElement>(dataContainer);
