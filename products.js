// products.js
const productsData = [
    {   id: 901,
        category: 'Promocja',
        name: 'Rusztowanie elewacyjne jezdne w promocyjnej cenie',
        image: 'https://github.com/rusztowania/rusztowania.github.io/blob/main/img/Promocja.jpg',
        description: 'Wytrzymałe i mobilne rusztowanie elewacyjne, idealne do prac na zewnątrz budynków.',
        price: '999 zł',
        learnMoreLink: 'https://example.com/product1'
    },
    {   id: 902,
        category: 'Promocja',
        name: 'Rusztowanie elewacyjne jezdne w promocyjnej cenie',
        image: 'https://github.com/rusztowania/rusztowania.github.io/blob/main/img/Promocja.jpg',
        description: 'Wytrzymałe i mobilne rusztowanie elewacyjne, idealne do prac na zewnątrz budynków.',
        price: '999 zł',
        learnMoreLink: 'https://example.com/product1'
    },
    {   id: 903,
        category: 'Promocja',
        name: 'Rusztowanie elewacyjne jezdne w promocyjnej cenie',
        image: 'https://github.com/rusztowania/rusztowania.github.io/blob/main/img/Promocja.jpg',
        description: 'Wytrzymałe i mobilne rusztowanie elewacyjne, idealne do prac na zewnątrz budynków.',
        price: '999 zł',
        learnMoreLink: 'https://example.com/product1'
    },
    {   id: 904,
        category: 'Promocja',
        name: 'Rusztowanie elewacyjne jezdne w promocyjnej cenie',
        image: 'https://github.com/rusztowania/rusztowania.github.io/blob/main/img/Promocja.jpg',
        description: 'Wytrzymałe i mobilne rusztowanie elewacyjne, idealne do prac na zewnątrz budynków.',
        price: '999 zł',
        learnMoreLink: 'https://example.com/product1'
    },
    {   id: 905,
        category: 'Promocja',
        name: 'Rusztowanie elewacyjne jezdne w promocyjnej cenie',
        image: 'https://github.com/rusztowania/rusztowania.github.io/blob/main/img/Promocja.jpg',
        description: 'Wytrzymałe i mobilne rusztowanie elewacyjne, idealne do prac na zewnątrz budynków.',
        price: '999 zł',
        learnMoreLink: 'https://example.com/product1'
    },
    {   id: 906,
        category: 'Promocja',
        name: 'Rusztowanie elewacyjne jezdne w promocyjnej cenie',
        image: 'https://github.com/rusztowania/rusztowania.github.io/blob/main/img/Promocja.jpg',
        description: 'Wytrzymałe i mobilne rusztowanie elewacyjne, idealne do prac na zewnątrz budynków.',
        price: '999 zł',
        learnMoreLink: 'https://example.com/product1'
    },
    // {id: 2,
    //     category: 'jezdne',
    //     name: 'Rusztowanie elewacyjne jezdne',
    //     image: 'rusztowanie1.jpg',
    //     description: 'Wytrzymałe i mobilne rusztowanie elewacyjne, idealne do prac na zewnątrz budynków.',
    //     price: '100 zł',
    //     learnMoreLink: 'https://example.com/product1'
    // },
    {id: 3,
        category: 'wynajem',
        name: 'Rusztowanie elewacyjne',
        image: 'rusztowanie1.jpg',
        description: 'Rusztowanie elewacyjne do wynajęcia, dostępne w różnych konfiguracjach.',
        price: '120 zł' ,
        learnMoreLink: 'https://example.com/product1'
    },
    // { (((((((((((((((((((((((((((((((((((((((((PRZYKŁADOWY)))))))))))))))))))))))))))))))))))))))))
    //     category: 'plettkc', ((((((((((((TEGO NIE ZMIENIAĆ))))))))))))
    //     name: 'Rusztowanie Plettac', (((((((((((((((((((NAZWA MOŻNA ZMIENIĆ)))))))))))))))))))
    //     image: 'img/plettac.jpg',((((((((((((((((((( MOŻNA ZMIENIĆ  JEŚLI znajduje się w folderze to podaje się to tak::::{nazwa folderu}/{nazwa pliku z roszerzeniem np. jpg})))))))))))))))))))
    //     description: 'Rusztowanie Plettac (poznańskie) - system ocynkowanych ram, łatwy w montażu i demontażu.', (((((((((((((((((((OPIS MOŻNA ZMIENIĆ)))))))))))))))))))
    //     price: '8888 zł', (((((((((((((((((((CENA MOŻNA ZMIENIĆ//////BRUTTO)))))))))))))))))))
    //     learnMoreLink: 'https://example.com/product1'(((((((((((((((((((LINK PROWADZĄCY DO PRODUKTU MOŻNA ZMIENIĆ)))))))))))))))))))
    // },
    {id: 4,
        category: 'plettkc',
        name: 'PLETTAC 175M2',
        image: 'img/plettac.jpg',
        description: 'RUSZTOWANIA ELEWACYJNE SYSTEM PLETTAC 175M2',
        price: '19 499,00 zł',
        learnMoreLink: 'plettac 19499.html'
    },
    {id:5 ,
        category: 'plettkc',
        name: 'PLETTAC 125M2',
        image: 'img/plettac.jpg',
        description: 'RUSZTOWANIA ELEWACYJNE SYSTEMU PLETTAC 125M2',
        price: '16 299,00 zł',
        learnMoreLink: 'plettac 16299.html'
    },
    {id: 6,
        category: 'plettkc',
        name: 'Rusztowanie Plettac 150M2',
        image: 'img/plettac.jpg',
        description: 'Rusztowanie Plettac (poznańskie) - system ocynkowanych ram, łatwy w montażu i demontażu.',
        price: '15 499,00 zł',
        learnMoreLink: 'plettac 15499.html'
        
    },
    {id: 7,
        category: 'plettkc',
        name: ' SYSTEM PLETTAC 105M2',
        image: 'img/plettac.jpg',
        description: 'RUSZTOWANIA ELEWACYJNE SYSTEM PLETTAC 105M2',
        price: '8 999,00 zł',
        learnMoreLink: 'plettac 8999.html'
    },
    {id:8 ,
        category: 'plettkc',
        name: 'SYSTEM PLETTAC 78M2',
        image: 'img/plettac.jpg',
        description: 'RUSZTOWANIA ELEWACYJNE SYSTEM PLETTAC 78M2',
        price: '8840 zł',
        learnMoreLink: 'Plettac 8840.html'
    },
    {id: 9,
        category: 'plettkc',
        name: '[OFERTA NA DOMKI]',
        image: 'img/plettac.jpg',
        description: 'Najpopularniejszy system rusztowań elewacyjnych, zwane również jako „poznańskie”.',
        price: '8 599,00 zł',
        learnMoreLink: 'plettac 8599.html'
    },
    {id: 30,
        category: 'plettkc',
        name: 'SYSTEM PLETTAC 200M2',
        image: 'img/plettac.jpg',
        description: 'Rusztowanie Plettac (poznańskie) - system ocynkowanych ram, łatwy w montażu i demontażu.',
        price: '19 799,00 zł',
        learnMoreLink: 'plettac 19 799.html'
    },
    {id: 11,
        category: 'plettkc',
        name: 'SYSTEM PLETTAC 96M2',
        image: 'img/plettac.jpg',
        description: 'Rusztowanie Plettac (poznańskie) - system ocynkowanych ram, łatwy w montażu i demontażu.',
        price: '10350 zł',
        learnMoreLink: 'plettac 10350.html'
    },
    {id: 12,
        category: 'modul',
        name: 'Rusztowanie modułowe',
        image: 'rusztowanie3.jpg',
        description: 'Wszechstronne rusztowanie modułowe, dostosowujące się do różnych kształtów budynków.',
        price: '7777 zł',
        learnMoreLink: 'https://example.com/product1'
    },
    // {id: 103,
    //     category: 'bauman',
    //     name: 'Rusztowanie Bauman',
    //     image: 'rusztowanie4.jpg',
    //     description: 'Solidne i bezpieczne rusztowanie Bauman, idealne do prac budowlanych i remontowych.',
    //     price: '6666 zł',
    //     learnMoreLink: 'https://example.com/product1'
    // },
    {id: 103,
        category: 'bauman',
        name: 'BAUMANN 310M2',
        image: 'rusztowanie4.jpg',
        description: 'Solidne i bezpieczne rusztowanie Bauman, idealne do prac budowlanych i remontowych.',
        price: '35 549,00 zł',
        learnMoreLink: 'BAUMANN 310M2.html'
    },
    {id: 104,
        category: 'bauman',
        name: 'BAUMANN 175M2',
        image: 'rusztowanie4.jpg',
        description: 'Solidne i bezpieczne rusztowanie Bauman, idealne do prac budowlanych i remontowych.',
        price: '24 157,00 zł',
        learnMoreLink: 'BAUMANN 175M2.html'
    },
    {id: 105,
        category: 'bauman',
        name: 'BAUMANN [OFERTA NA DOMKI]',
        image: 'rusztowanie4.jpg',
        description: 'Solidne i bezpieczne rusztowanie Bauman, idealne do prac budowlanych i remontowych.',
        price: '9 699,00 zł',
        learnMoreLink: 'Baumann 65m2.html'
    },
    {id: 106,
        category: 'bauman',
        name: 'BAUMANN 200M2',
        image: 'rusztowanie4.jpg',
        description: 'Solidne i bezpieczne rusztowanie Bauman, idealne do prac budowlanych i remontowych.',
        price: '23 739,00 zł',
        learnMoreLink: 'BAUMANN 200M2.html'
    },
    {id: 107,
        category: 'bauman',
        name: 'BAUMANN 150M2',
        image: 'rusztowanie4.jpg',
        description: 'Solidne i bezpieczne rusztowanie Bauman, idealne do prac budowlanych i remontowych.',
        price: '19 158,00 zł',
        learnMoreLink: 'BAUMANN 150M2.html'
    },
    {id: 108,
        category: 'bauman',
        name: 'BAUMANN 105M2',
        image: 'rusztowanie4.jpg',
        description: 'Solidne i bezpieczne rusztowanie Bauman, idealne do prac budowlanych i remontowych.',
        price: '10 839,00 zł',
        learnMoreLink: 'BAUMANN 105M2.html'
    },
    {id: 109,
        category: 'bauman',
        name: 'BAUMANN 96M2',
        image: 'rusztowanie4.jpg',
        description: 'Solidne i bezpieczne rusztowanie Bauman, idealne do prac budowlanych i remontowych.',
        price: '12 476,00 zł',
        learnMoreLink: 'BAUMANN 96M2.html'
    },
    {id: 110,
        category: 'bauman',
        name: 'BAUMANN 78M2',
        image: 'rusztowanie4.jpg',
        description: 'Solidne i bezpieczne rusztowanie Bauman, idealne do prac budowlanych i remontowych.',
        price: '10 399,00 zł',
        learnMoreLink: 'BAUMANN 78M2.html'
    },
    // baumanana kuniec

    // {id: 14,
    //     category: 'jezdne',
    //     name: 'Rusztowanie jezdne aluminiowe', 
    //     image: 'rusztowanie5.jpg',
    //     description: 'Lekkie i mobilne rusztowanie jezdne aluminiowe, ułatwiające przemieszczanie się na placu budowy.',
    //     price: '5555 zł',
    //     learnMoreLink: 'https://example.com/product1'
    // },
    {id: 2001,
        category: 'jezdne',
        name: 'SOLID 900', 
        image: 'img/900Sv2.png',
        description: 'Lekkie i mobilne rusztowanie jezdne aluminiowe, ułatwiające przemieszczanie się na placu budowy.',
        price: '18.300,00zł cena brutto 14.878,05 zł cena netto',
        learnMoreLink: 'SOLID 900.html'
    },
    {id: 2002,
        category: 'jezdne',
        name: 'SOLID 730', 
        image: 'img/730Sv2.png',
        description: 'Lekkie i mobilne rusztowanie jezdne aluminiowe, ułatwiające przemieszczanie się na placu budowy.',
        price: '14.350,00zł cena brutto 11.666,67 zł cena netto',
        learnMoreLink: 'SOLID 730.html'
    },
    {id: 2003,
        category: 'jezdne',
        name: 'SOLID 550', 
        image: 'img/550Sv2.png',
        description: 'Lekkie i mobilne rusztowanie jezdne aluminiowe, ułatwiające przemieszczanie się na placu budowy.',
        price: '9.550,00zł cena brutto 7.764,23 zł cena netto',
        learnMoreLink: 'SOLID 550.html'
    },
    {id: 2004,
        category: 'jezdne',
        name: 'SOLID 380', 
        image: 'img/380Sv2.png',
        description: 'Lekkie i mobilne rusztowanie jezdne aluminiowe, ułatwiające przemieszczanie się na placu budowy.',
        price: '5.350,00zł cena brutto 4.349,59 zł cena netto',
        learnMoreLink: 'SOLID 380.html'
    },
    {id: 2005,
        category: 'jezdne',
        name: 'SOLID 290', 
        image: 'img/290v2.png',
        description: 'Lekkie i mobilne rusztowanie jezdne aluminiowe, ułatwiające przemieszczanie się na placu budowy.',
        price: '2.600,00zł cena brutto 2.113,82 zł cena netto',
        learnMoreLink: 'SOLID 290.html'
    },
    {id: 2006,
        category: 'jezdne',
        name: 'EASYGATE 730', 
        image: 'img/730Ev2.png',
        description: 'Lekkie i mobilne rusztowanie jezdne aluminiowe, ułatwiające przemieszczanie się na placu budowy.',
        price: '14.700,00zł cena brutto 11.951,22 zł cena netto',
        learnMoreLink: 'EASYGATE 730.html'
    },
    {id: 2007,
        category: 'jezdne',
        name: 'Easygate 550', 
        image: 'img/550Ev2.png',
        description: 'Lekkie i mobilne rusztowanie jezdne aluminiowe, ułatwiające przemieszczanie się na placu budowy.',
        price: '9.900,00zł cena brutto 8.048,78 zł cena netto',
        learnMoreLink: 'Easygate 550.html'
    },
    {id: 2008,
        category: 'jezdne',
        name: 'EASYGATE 380', 
        image: 'img/380Ev2.png',
        description: 'Lekkie i mobilne rusztowanie jezdne aluminiowe, ułatwiające przemieszczanie się na placu budowy.',
        price: '5.400,00zł cena brutto 4.390,24 zł cena netto',
        learnMoreLink: 'EASYGATE 380.html'
    },


    // koniec jezdnych
     {id:15 ,
        category: 'wynajem',
        name: 'Rusztowanie warszawskie',
        image: 'rusztowanie5.jpg',
        description: 'Tradycyjne rusztowanie warszawskie, dostępne do wynajęcia.',
        price: '70 zł',
        learnMoreLink: 'https://example.com/product1'
    },


    {id:16 ,
        category: 'modul',
        name: 'Rusztowanie modułowe - lekka wersja',
        image: 'rusztowanie3.jpg',
        description: 'Lżejsza wersja rusztowania modułowego, łatwa w transporcie i montażu.',
        price: '6500 zł',
        
    },
    // Dodaj więcej produktów tutaj...

];

async function getProducts() {
    return productsData;
  }
  
  async function getProductPriceById(productId) {
    try {
      const products = await getProducts();
      const product = products.find(product => product.id === productId);
  
      if (product) {
        return product.price;
      } else {
        return null;
      }
    } catch (error) {
        console.error('Error fetching product data:', error);
        return null;
    }
  }
  export { getProducts, getProductPriceById };
