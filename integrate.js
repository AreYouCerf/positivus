const accordionButtons = document.querySelectorAll('.accordion_button');

accordionButtons.forEach(accordionButton => {
    accordionButton.addEventListener('click', () => {
        const accordionHeader = accordionButton.closest('.accordion_header');
        if (!accordionHeader) return;

        const accordionInfo = accordionHeader.querySelector('.accordion_info');
        if (!accordionInfo) return;

        const isActive = accordionButton.classList.contains('active');

        accordionButtons.forEach(button => {
            button.classList.remove('active');
            setIcon(button, 'svg/plus.svg')
            const a = button.closest('.accordion_header');
            if (a) {
                const b = a.querySelector('.accordion_info');
                if (b) b.classList.remove('show');
            }
        });

        if (isActive) {
            accordionButton.classList.remove('active');
            accordionInfo.classList.remove('show');
            return;
        }

        accordionButton.classList.add('active');
        accordionInfo.classList.add('show');
        setIcon(accordionButton, 'svg/minus.svg')
    });
});

function setIcon(button, file) {
    const icon = button.querySelector('.accordion_icon img');
    if (icon) icon.src = file;
}