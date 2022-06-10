"use strict"
import { cars } from './data.js';
import { filter, find } from './filters.js';

    // 1. Generar el codigo Html que voy a poenr en la pagina
    // 2. Identificar el contenedor donde pondré mi código
    // 3. Poner mi código
function generateCardCars(carsArray) {
    let html = '';
    for(let i = 0; i < carsArray.length; i++) {
        html += `<div class="col-4">
                        <div class="card">
                            <div class="card-body">
                            <p>Brand: ${carsArray[i].brand}</p>
                            <p>Year: ${carsArray[i].year}</p>
                            <p>Code: ${carsArray[i].code}</p>
                            </div>
                        </div>
                    </div>`;
    }
    const container = document.getElementById('cars-container');
    container.innerHTML = html;
}
generateCardCars(cars);

function cbByMXCode(element) {
    return element.code.endsWith('MX');
}

function filterByYear(element) {
    return element.year >= 2014 && element.year <= 2018;
}

function findByMXCode(element) {
    return element.code.endsWith('MX');
}

function cbFilterByBrand(element) {
    const input = document.getElementById('brand-filter');
    // let brand = element.brand.toLowerCase();
    // let value = input.value.toLowerCase();
    // return brand.includes(value);
    return element.brand.toLowerCase().includes(input.value.toLowerCase());
}


function filterByMXCode() {
    let carByName = filter(cars, cbFilterByBrand);
    generateCardCars(carByName);
}

function createNewCar() {
    const brand = document.getElementById('brand').value;
    const code = document.getElementById('code').value;
    const year = document.getElementById('year').value;
    const model = document.getElementById('model').value;
    const shop = document.getElementById('shop').value;

    const newCar = {
        brand: brand,
        code: code,
        year: year,
        model: model,
        shop: shop
    }

    cars.push(newCar);
    console.log(cars);
    generateCardCars(cars);
}


window.filterByMXCode = filterByMXCode;
window.createNewCar = createNewCar;
