const images = [
    {
        file: 'ttk.jpg',
        caption: 'Tallinn University of Applied Sciences',
        credit: 'Photo: Kristjan Lepp, CC BY-SA 4.0, Wikimedia Commons'
    },
    {
        file: 'truck.jpg',
        caption: 'Logistics and road transport',
        credit: 'Photo: Kotivalo, CC BY-SA 4.0, Wikimedia Commons'
    },
    {
        file: 'paldiski.jpg',
        caption: 'Paldiski – military service',
        credit: 'Photo: Ivar Leidus, CC BY-SA 3.0, Wikimedia Commons'
    },
    {
        file: 'kuressaare.jpg',
        caption: 'Kuressaare, Saaremaa – my home island',
        credit: 'Photo: WikedKentaur, CC BY-SA 3.0, Wikimedia Commons'
    }
];

const targetImage = document.querySelector('.carousel-image');
const caption = document.querySelector('.carousel-caption');
const credit = document.querySelector('.carousel-credit');
let i = 0;

targetImage.addEventListener('click', () => {

    targetImage.style.opacity = '0';

    setTimeout(() => {

        i++;

        if (i === images.length) {
            i = 0;
        }

        targetImage.src = 'images/' + images[i].file;
        targetImage.alt = images[i].caption;
        caption.innerText = images[i].caption;
        credit.innerText = images[i].credit;

        targetImage.style.opacity = '1';

    }, 300);

});
