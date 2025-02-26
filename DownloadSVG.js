const canvas = document.querySelector('canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    const imgData = canvas.toDataURL('image/png');

    const svgData = `<svg xmlns="http://www.w3.org/2000/svg" width="${canvas.width}" height="${canvas.height}">
        <image href="${imgData}" width="${canvas.width}" height="${canvas.height}"/>
    </svg>`;

    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'canvas-image.svg';
    link.click();
} else {
    console.log('No canvas found on this page.');
}
