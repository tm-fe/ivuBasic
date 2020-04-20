
import { Message } from 'tm-iview';

const copyText = (element: any) => {
    let selectedText;

    if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        const isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }
        selectedText = element.value;
    }
    document.execCommand('copy');
};


const onClick = (el: any) => {
    const fakeElem = document.createElement('textarea');
    fakeElem.style.fontSize = '12pt';
    fakeElem.style.border = '0';
    fakeElem.style.padding = '0';
    fakeElem.style.margin = '0';
    fakeElem.style.position = 'absolute';
    fakeElem.style.left = '-9999px';
    const yPosition = window.pageYOffset || document.documentElement.scrollTop;
    fakeElem.style.top = `${yPosition}px`;

    fakeElem.setAttribute('readonly', '');
    fakeElem.value = el.currentTarget.getAttribute('copy-data');

    el.currentTarget.appendChild(fakeElem);

    copyText(fakeElem);

    const successText = el.currentTarget.getAttribute('copy-success');
    if (successText) {
        (Message as any).success({
            content: el.currentTarget.getAttribute('copy-success')
        });
    }

    el.currentTarget.removeChild(fakeElem);
};

const listenerClick = (el: any, binding: any) => {
    const copyText = binding.value || el.textContent;
    el.setAttribute('copy-data', copyText);
    if (!el.isListener && copyText) {
        el.addEventListener('click', onClick, true);
        el.isListener = true;
    }
}


export default {
    update: (el: any, binding: any) => {
        listenerClick(el, binding);
    },
    bind: (el: any, binding: any) => {
        listenerClick(el, binding);
    },
    unbind: (el: Element, binding: any) => {
        el.removeEventListener('click', onClick, true);
    }
};
